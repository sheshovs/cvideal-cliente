import React from "react";
import {
	Box,
	styled,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../redux/actionsRedux/file";
import { createProject } from "../../../redux/actionsRedux/project";

const AddProject = ({ alertData, setAlertData, setOpenAlert }) => {
	const dispatch = useDispatch();

	const sizeMax = 3145728;

	const [projectData, setProjectData] = React.useState({
		name: "",
		description: "",
		type: "",
		project_date: new Date().toISOString().slice(0, 10),
		github_url: "",
		demo_url: "",
		cover_img_url: "",
		img_urls: [],
	});

	const [coverImg, setCoverImg] = React.useState();
	const [projectsImgs, setProjectsImgs] = React.useState();

	const handleChange = (event) => {
		setProjectData({
			...projectData,
			[event.target.name]: event.target.value,
		});
	};

	const handleCoverImg = (event) => {
		let file = event.target.files[0];
		if (file.size > sizeMax) {
			setAlertData({
				...alertData,
				type: "error",
				message: "La imagen debe pesar máximo 3MB.",
			});
			setOpenAlert(true);
			return;
		}
		setCoverImg(file);
	};

	const handleProjectImgs = (event) => {
		let files = event.target.files;
		let arrImgs = [];
		if (files.length > 3) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar máximo 3 imágenes.",
			});
			setOpenAlert(true);
			return;
		}

		Object.keys(files).map((index) => {
			if (files[index].size > sizeMax) {
				setAlertData({
					...alertData,
					type: "error",
					message: "La imagen debe pesar máximo 3MB.",
				});
				setOpenAlert(true);
				return;
			}
			arrImgs.push(files[index]);
		});

		setProjectsImgs(arrImgs);
	};

	const handleSubmit = () => {
		if (!projectData.name) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar el nombre del proyecto.",
			});
			setOpenAlert(true);
			return;
		}
		if (!projectData.description) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar la descripción del proyecto.",
			});
			setOpenAlert(true);
			return;
		}
		if (!projectData.type) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe seleccionar el tipo del proyecto.",
			});
			setOpenAlert(true);
			return;
		}
		if (!projectData.project_date) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar la fecha del proyecto.",
			});
			setOpenAlert(true);
			return;
		}
		if (coverImg) {
			if (coverImg.size > sizeMax) {
				setAlertData({
					...alertData,
					type: "error",
					message: "La imagen debe pesar máximo 3MB.",
				});
				setOpenAlert(true);
				return;
			}
		}
		if (projectsImgs.length > 3) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar máximo 3 imágenes.",
			});
			setOpenAlert(true);
			return;
		}
		if (projectsImgs) {
			projectsImgs.map((file) => {
				if (file.size > sizeMax) {
					setAlertData({
						...alertData,
						type: "error",
						message: "La imagen debe pesar máximo 3MB.",
					});
					setOpenAlert(true);
					return;
				}
			});
		}

		let projectsImgsURL = [];
		let coverImgURL = "";

		projectsImgs.map((file) => {
			dispatch(uploadFile(file)).then((res) => {
				if (!res.status) {
					setAlertData({
						...alertData,
						type: "error",
						message: "Error al subir una imagen",
					});
					setOpenAlert(true);
				}
				projectsImgsURL.push(res.url);
			});
		});

		dispatch(uploadFile(coverImg)).then((res) => {
			coverImgURL = res.url;
		});

		dispatch(
			createProject({
				name,
				description,
				type,
				project_date,
				github_url,
				demo_url,
				coverImgURL,
				projectsImgsURL,
			})
		).then((res) => console.log(res));
	};

	const { name, description, type, project_date, github_url, demo_url } =
		projectData;

	return (
		<ComponentBox>
			<LeftSide>
				<Title>Información básica</Title>
				<PrimaryInfo>
					<Input
						label="Nombre"
						variant="outlined"
						required
						name="name"
						value={name}
						onChange={handleChange}
					/>
					<InputArea
						label="Descripción"
						variant="outlined"
						multiline
						minRows={2}
						required
						name="description"
						value={description}
						onChange={handleChange}
					/>
					<FormBox>
						<FormControlStyled>
							<InputLabel id="type-select">Tipo *</InputLabel>
							<Select
								labelId="type-select"
								name="type"
								value={type}
								label="Tipo *"
								onChange={handleChange}
								required
							>
								<MenuItem value="">
									<em>Deseleccionar</em>
								</MenuItem>
								<MenuItem value="IT">Informático</MenuItem>
								<MenuItem value="investigation">Investigación</MenuItem>
								<MenuItem value="social">Social</MenuItem>
							</Select>
						</FormControlStyled>
						<Input
							variant="outlined"
							type="date"
							label="Fecha"
							required
							name="project_date"
							value={project_date}
							onChange={handleChange}
						/>
					</FormBox>
				</PrimaryInfo>
				<Title>Links</Title>
				<PrimaryInfo>
					<InputLinks
						label="Github URL"
						variant="outlined"
						name="github_url"
						value={github_url}
						onChange={handleChange}
					/>
					<InputLinks
						label="Demo URL"
						variant="outlined"
						name="demo_url"
						value={demo_url}
						onChange={handleChange}
					/>
				</PrimaryInfo>
			</LeftSide>
			<RightSide>
				<ImgsBox>
					<Title>Portada</Title>
					<PrimaryInfo>
						<input
							type="file"
							onChange={handleCoverImg}
							accept="image/*"
							name="cover_img_url"
						/>
						<HelperText>Tamaño máximo 3MB.</HelperText>
					</PrimaryInfo>

					<Title>Imágenes</Title>
					<PrimaryInfo>
						<input
							type="file"
							onChange={handleProjectImgs}
							accept="image/*"
							multiple
						/>
						<HelperText>Máximo 3 imágenes.</HelperText>
					</PrimaryInfo>
				</ImgsBox>
				<SubmitButtonBox>
					<Button
						color="primary"
						variant="contained"
						size="large"
						onClick={handleSubmit}
					>
						Crear Proyecto
					</Button>
				</SubmitButtonBox>
			</RightSide>
		</ComponentBox>
	);
};

export default AddProject;

const ComponentBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
}));
const LeftSide = styled(Box)(() => ({
	width: "45%",
	display: "flex",
	flexDirection: "column",
}));
const RightSide = styled(Box)(() => ({
	width: "45%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
}));
const ImgsBox = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
}));
const SubmitButtonBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "flex-end",
	paddingRight: 25,
}));
const PrimaryInfo = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	marginLeft: 20,
	marginBottom: 30,
}));
const Title = styled("h2")(() => ({
	margin: 0,
	marginBottom: 20,
}));
const Input = styled(TextField)(() => ({
	width: "45%",
	marginBottom: "20px",
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&:hover fieldset": {
			borderColor: "rgb(70,161,185)",
		},
	},
	"& input:valid + fieldset": {
		borderColor: "rgb(58,131,150)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgb(58,131,150)",
	},
	"& label.Mui-focused": {
		color: "rgb(58,131,150)",
	},
}));
const InputArea = styled(TextField)(() => ({
	width: "100%",
	marginBottom: "20px",
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&:hover fieldset": {
			borderColor: "rgb(70,161,185)",
		},
	},
	"& input:valid + fieldset": {
		borderColor: "rgb(58,131,150)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgb(58,131,150)",
	},
	"& label.Mui-focused": {
		color: "rgb(58,131,150)",
	},
}));
const FormControlStyled = styled(FormControl)(() => ({
	width: "45%",
	marginBottom: "20px",
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&:hover fieldset": {
			borderColor: "rgb(70,161,185)",
		},
	},
	"& input:valid + fieldset": {
		borderColor: "rgb(58,131,150)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgb(58,131,150)",
	},
	"& label.Mui-focused": {
		color: "rgb(58,131,150)",
	},
}));
const FormBox = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
}));
const InputLinks = styled(TextField)(() => ({
	width: "100%",
	marginBottom: "20px",
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgb(58,131,150)",
		},
		"&:hover fieldset": {
			borderColor: "rgb(70,161,185)",
		},
	},
	"& input:valid + fieldset": {
		borderColor: "rgb(58,131,150)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgb(58,131,150)",
	},
	"& label.Mui-focused": {
		color: "rgb(58,131,150)",
	},
}));
const HelperText = styled("p")(() => ({
	color: "#888888",
	marginTop: 10,
	marginLeft: 10,
	fontSize: "14px",
}));

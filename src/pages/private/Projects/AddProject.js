import React from "react";
import {
	Box,
	styled,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../redux/actionsRedux/file";

const AddProject = () => {
	const dispatch = useDispatch();
	const [type, setType] = React.useState("");
	const [coverImg, setCoverImg] = React.useState("");

	const handleChange = (event) => {
		setType(event.target.value);
	};

	const handleCoverImg = (event) => {
		console.log(event.target.files[0]);
		let file = event.target.files[0];
		if (file.size > 2000000) {
			console.log("La imagen debe pesar máximo 2MB.");
			return;
		}
		if (event.target.files.length > 0) {
			dispatch(uploadFile(file)).then((x) => setCoverImg(x.url));
		}
	};

	return (
		<ComponentBox>
			<LeftSide>
				<Title>Información básica</Title>
				<PrimaryInfo>
					<Input label="Nombre" variant="outlined" required />
					<InputArea
						label="Descripción"
						variant="outlined"
						multiline
						minRows={2}
						required
					/>
					<FormBox>
						<FormControlStyled>
							<InputLabel id="type-select">Tipo *</InputLabel>
							<Select
								labelId="type-select"
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
							defaultValue={new Date().toISOString().slice(0, 10)}
							required
						/>
					</FormBox>
				</PrimaryInfo>
				<Title>Links</Title>
				<PrimaryInfo>
					<InputLinks label="Github URL" variant="outlined" />
					<InputLinks label="Demo URL" variant="outlined" />
				</PrimaryInfo>
			</LeftSide>
			<RightSide>
				<Title>Portada</Title>
				<PrimaryInfo>
					{coverImg ? <ImgCoverBox src={coverImg} alt="Portada" /> : null}
					<input type="file" onChange={handleCoverImg} accept="image/*" />
				</PrimaryInfo>
				<Title>Imágenes</Title>
				<PrimaryInfo>
					<input type="file" accept="image/*" multiple />
				</PrimaryInfo>
			</RightSide>
		</ComponentBox>
	);
};

export default AddProject;

const ComponentBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	padding: "20px",
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

const ImgCoverBox = styled("img")(() => ({
	width: "300px",
	height: "200px",
	marginBottom: "20px",
}));

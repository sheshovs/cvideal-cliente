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

const AddProject = () => {
	const [type, setType] = React.useState("");

	const handleChange = (event) => {
		setType(event.target.value);
	};
	return (
		<ComponentBox>
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
			</PrimaryInfo>
			<Title>Links</Title>
			<PrimaryInfo>
				<Input label="Github URL" variant="outlined" />
				<Input label="Demo URL" variant="outlined" />
			</PrimaryInfo>
		</ComponentBox>
	);
};

export default AddProject;

const ComponentBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	padding: "20px",
}));

const PrimaryInfo = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	marginLeft: 20,
}));

const Title = styled("h2")(() => ({
	margin: 0,
	marginBottom: 20,
}));

const Input = styled(TextField)(() => ({
	width: "20%",
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
	width: "40%",
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
	width: "20%",
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

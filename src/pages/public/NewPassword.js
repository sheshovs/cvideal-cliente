import React, { useState } from "react";
import {
	styled,
	Box,
	Button,
	TextField,
	IconButton,
	InputAdornment,
	CircularProgress,
	Snackbar,
	Alert,
	Slide,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import Header2 from "../../components/Header2";
import LoginSidebar from "../../components/LoginSidebar";
import Footer from "../../components/Footer";
import { createNewPassword } from "../../redux/actionsRedux/user";
import { useLocation } from "react-router-dom";

// icons
import { Visibility, VisibilityOff, Close, Check } from "@mui/icons-material";

const mayusculas = /([A-Z])/;
const simbolos = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;
const numeros = /\d/;

const NewPassword = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const resetToken = location.pathname.split("/")[2];
	const [openAlert, setOpenAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [alertData, setAlertData] = useState({
		message: "",
		type: "",
	});
	const [newPassword, setNewPassword] = useState("");

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenAlert(false);
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};
	const handleChange = (e) => {
		e.preventDefault();

		setNewPassword(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		setLoading(!loading);

		if (newPassword.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo contraseña no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!mayusculas.test(newPassword)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos una mayúscula",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!numeros.test(newPassword)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos un número",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!simbolos.test(newPassword)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos un símbolo",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (newPassword.length < 8) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos 8 caracteres",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		}

		dispatch(createNewPassword(newPassword, resetToken)).then((x) => {
			if (x.status) {
				setAlertData({
					...alertData,
					type: "success",
					message: x.message,
				});
				setOpenAlert(true);
				setLoading(false);
				setNewPassword("");
			} else {
				setAlertData({
					...alertData,
					type: "error",
					message: x.message,
				});
				setLoading(false);
				setOpenAlert(true);
			}
		});
	};

	return (
		<>
			<Snackbar
				open={openAlert}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				TransitionComponent={(props) => <Slide {...props} direction="left" />}
			>
				<Alert
					onClose={handleClose}
					severity={alertData.type}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{alertData.message}
				</Alert>
			</Snackbar>
			<LoginSidebar
				alertData={alertData}
				setAlertData={setAlertData}
				setOpenAlert={setOpenAlert}
			/>
			<Contenedor>
				<Navbar />
				<Header2
					title="¿Has olvidado tu contraseña?"
					description="No te preocupes, a continuación podrás crear una nueva en un par de minutos."
				/>
				<ComponentBox>
					<FormBox onSubmit={(e) => onSubmit(e)}>
						<Title>Restablecer contraseña</Title>
						<Description>
							Completa el siguiente campo para crear <br /> tu
							<b> nueva contraseña</b>!
						</Description>

						<Input
							label="Nueva contraseña"
							placeholder="********"
							variant="outlined"
							type={showPassword ? "text" : "password"}
							name="newPassword"
							value={newPassword}
							onChange={(e) => handleChange(e)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						{newPassword.length > 0 ? (
							<ValidateBox>
								<ValidateText>
									{mayusculas.test(newPassword) ? (
										<ValidateSuccess>
											<Check fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos una mayúscula.
										</ValidateSuccess>
									) : (
										<ValidateError>
											<Close fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos una mayúscula.
										</ValidateError>
									)}
								</ValidateText>
								<ValidateText>
									{numeros.test(newPassword) ? (
										<ValidateSuccess>
											<Check fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos un número.
										</ValidateSuccess>
									) : (
										<ValidateError>
											<Close fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos un número.
										</ValidateError>
									)}
								</ValidateText>
								<ValidateText>
									{simbolos.test(newPassword) ? (
										<ValidateSuccess>
											<Check fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos un símbolo.
										</ValidateSuccess>
									) : (
										<ValidateError>
											<Close fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos un símbolo.
										</ValidateError>
									)}
								</ValidateText>
								<ValidateText>
									{newPassword.length >= 8 ? (
										<ValidateSuccess>
											<Check fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos 8 caracteres.
										</ValidateSuccess>
									) : (
										<ValidateError>
											<Close fontSize="small" sx={{ marginRight: "5px" }} /> al
											menos 8 caracteres.
										</ValidateError>
									)}
								</ValidateText>
							</ValidateBox>
						) : null}

						<SubmitButton
							variant="contained"
							type="submit"
							disabled={loading ? true : false}
						>
							{loading ? (
								<CircularProgress color="inherit" />
							) : (
								"Restablecer contraseña"
							)}
						</SubmitButton>
					</FormBox>
				</ComponentBox>
				<Footer />
			</Contenedor>
		</>
	);
};

export default NewPassword;

const Contenedor = styled(Box)(() => ({
	width: "100%",
	minHeight: "100vh",
}));

const ComponentBox = styled(Box)(() => ({
	background: "#ffffff",
	width: "100%",
	padding: "20px 30px",
	boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.1)",
	display: "flex",
	justifyContent: "center",
}));

const Title = styled("h1")(() => ({
	width: "100%",
	textAlign: "center",
	color: "#0F2930",
	marginBottom: "10px",
}));

const Description = styled("p")(() => ({
	width: "100%",
	textAlign: "center",
	color: "#999999",
	marginBottom: "30px",
	lineHeight: "22px",
}));

const FormBox = styled("form")(() => ({
	width: "40%",
	marginBottom: "40px",
}));

const Input = styled(TextField)(() => ({
	width: "100%",
	marginBottom: "5px",
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

const SubmitButton = styled(Button)(() => ({
	width: "100%",
	height: "50px",
	borderRadius: "5px",
	background: "rgba(58,131,150,1)",
	margin: "10px 0 20px 0",

	"&:hover": {
		background: "rgba(70,161,185,1)",
	},
}));

const ValidateBox = styled(Box)(() => ({
	width: "100%",
	marginBottom: "20px",
}));

const ValidateText = styled("p")(() => ({
	margin: "5px 0",
}));

const ValidateSuccess = styled("p")(() => ({
	display: "flex",
	alignItems: "center",
	color: "#2ECA3A",
	margin: "5px 0",
}));

const ValidateError = styled("p")(() => ({
	display: "flex",
	alignItems: "center",
	color: "#E73131",
	margin: "5px 0",
}));

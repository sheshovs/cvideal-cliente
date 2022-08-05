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

// components
import Navbar from "../../components/Navbar";
import LoginSidebar from "../../components/LoginSidebar";
import Header from "../../components/Header";

// icons
import { Visibility, VisibilityOff, Close, Check } from "@mui/icons-material";

// actions
import { setIsOpen } from "../../redux/actionsRedux/loginSidebar";
import Footer from "../../components/Footer";
import { register } from "../../redux/actionsRedux/user";

const mayusculas = /([A-Z])/;
const simbolos = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;
const numeros = /\d/;

const Register = () => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [openAlert, setOpenAlert] = React.useState(false);
	const { isOpen } = useSelector((x) => x.useLoginSidebar);
	const [userData, setUserData] = useState({
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
	});

	const [alertData, setAlertData] = useState({
		message: "",
		type: "",
	});

	const { first_name, last_name, username, email, password } = userData;

	const handleChange = (e) => {
		e.preventDefault();

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

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

	const onSubmit = (e) => {
		e.preventDefault();

		setLoading(!loading);

		if (first_name.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo nombre no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (last_name.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo apellido no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (username.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo nombre de usuario no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (email.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo email no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (password.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo contraseña no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!mayusculas.test(password)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos una mayúscula",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!numeros.test(password)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos un número",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!simbolos.test(password)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos un símbolo",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (password.length < 8) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Contraseña debe tener al menos 8 caracteres",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		}

		dispatch(register(userData)).then((x) => {
			if (x.status) {
				setAlertData({
					...alertData,
					type: "success",
					message: x.message,
				});
				setOpenAlert(true);
				setLoading(false);
				dispatch(setIsOpen(true));
				setUserData({
					...userData,
					first_name: "",
					last_name: "",
					username: "",
					email: "",
					password: "",
				});
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
			<Container>
				<Navbar />
				<Header />
				<RegisterBox>
					<FormBox onSubmit={(e) => onSubmit(e)}>
						<RegisterTitle>Crear una cuenta</RegisterTitle>
						<RegisterDescription>
							Completa los siguientes campos y comienza a <br /> crear tu
							<b> Curriculum Vitae Online</b>!
						</RegisterDescription>
						<NameBox>
							<InputMid
								label="Nombre"
								placeholder="Juan"
								variant="outlined"
								name="first_name"
								value={first_name}
								onChange={(e) => handleChange(e)}
							/>
							<InputMid
								label="Apellido"
								placeholder="Pérez"
								variant="outlined"
								name="last_name"
								value={last_name}
								onChange={(e) => handleChange(e)}
							/>
						</NameBox>
						<Input
							label="Nombre de usuario"
							placeholder="Juanpe"
							variant="outlined"
							name="username"
							value={username}
							onChange={(e) => handleChange(e)}
						/>
						<Input
							type="email"
							label="Correo electrónico"
							placeholder="juan@cvideal.cl"
							variant="outlined"
							name="email"
							value={email}
							onChange={(e) => handleChange(e)}
						/>
						<LastInput
							label="Contraseña"
							placeholder="********"
							variant="outlined"
							type={showPassword ? "text" : "password"}
							name="password"
							value={password}
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

						{password.length > 0 ? (
							<ValidateBox>
								<ValidateText>
									{mayusculas.test(password) ? (
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
									{numeros.test(password) ? (
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
									{simbolos.test(password) ? (
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
									{password.length >= 8 ? (
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

						<RegisterButton
							variant="contained"
							type="submit"
							disabled={loading ? true : false}
						>
							{loading ? <CircularProgress color="inherit" /> : "Crear cuenta"}
						</RegisterButton>
						<LoginBox>
							¿Ya tienes una cuenta?
							<CustomLinkLogin onClick={() => dispatch(setIsOpen(!isOpen))}>
								Iniciar sesión
							</CustomLinkLogin>
						</LoginBox>
					</FormBox>
				</RegisterBox>
				<Footer />
			</Container>
		</>
	);
};

export default Register;

const Container = styled(Box)(() => ({
	width: "100%",
	minHeight: "100vh",
}));

const RegisterBox = styled(Box)(() => ({
	background: "#ffffff",
	width: "100%",
	padding: "20px 30px",
	boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.1)",
	display: "flex",
	justifyContent: "center",
}));

const RegisterTitle = styled("h1")(() => ({
	width: "100%",
	textAlign: "center",
	color: "#0F2930",
	marginBottom: "10px",
}));

const RegisterDescription = styled("p")(() => ({
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

const NameBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
}));

const InputMid = styled(TextField)(() => ({
	width: "48%",
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

const Input = styled(TextField)(() => ({
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

const LastInput = styled(TextField)(() => ({
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

const RegisterButton = styled(Button)(() => ({
	width: "100%",
	height: "50px",
	borderRadius: "5px",
	background: "rgba(58,131,150,1)",
	margin: "10px 0 20px 0",

	"&:hover": {
		background: "rgba(70,161,185,1)",
	},
}));

const LoginBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: "#999999",
	marginBottom: "10px",
}));

const CustomLinkLogin = styled("a")(() => ({
	textDecoration: "none",
	color: "rgba(58,131,150,1)",
	marginLeft: "5px",
	cursor: "pointer",

	"&:hover": {
		color: "rgba(70,161,185,1)",
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

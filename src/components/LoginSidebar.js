import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
	TextField,
	Box,
	Button,
	styled,
	CircularProgress,
	IconButton,
	InputAdornment,
} from "@mui/material";
import LogoCv from "../assets/img/logo-cv-transparent.png";

//actions
import { setIsOpen } from "../redux/actionsRedux/loginSidebar";
import { login } from "../redux/actionsRedux/user";

// icons
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";

const LoginSidebar = ({ alertData, setAlertData, setOpenAlert }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isOpen } = useSelector((x) => x.useLoginSidebar);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const { email, password } = userData;

	const handleChange = (e) => {
		e.preventDefault();

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
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

		if (email.length === 0) {
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
		}

		dispatch(login(userData)).then((x) => {
			if (x.status) {
				setAlertData({
					...alertData,
					type: "success",
					message: x.message,
				});
				setOpenAlert(true);
				setLoading(false);
				dispatch(setIsOpen(!isOpen));
				return navigate("/dashboard");
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

		setLoading(false);
	};

	return (
		<>
			<MainContent isOpen={isOpen}>
				<CloseButton>
					<Logo src={LogoCv} alt="Logo CV Ideal" />
					<Close
						onClick={() => dispatch(setIsOpen(!isOpen))}
						color="disabled"
						sx={{
							cursor: "pointer",
						}}
					/>
				</CloseButton>
				<FormBox onSubmit={(e) => onSubmit(e)}>
					<LoginTitle>Iniciar sesión</LoginTitle>
					<Input
						label="Correo electrónico"
						placeholder="juan@cvideal.cl"
						variant="outlined"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
					/>

					<Input
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
					<ForgotPasswordBox>
						<CustomLinkForgot
							to="/forgot-password"
							onClick={() => dispatch(setIsOpen(!isOpen))}
						>
							¿Olvidaste tu contraseña?
						</CustomLinkForgot>
					</ForgotPasswordBox>

					<LoginButton
						variant="contained"
						type="submit"
						disabled={loading ? true : false}
					>
						{loading ? <CircularProgress color="inherit" /> : "Ingresar"}
					</LoginButton>
					<RegisterBox>
						¿Necesitas una cuenta?
						<CustomLinkRegister
							to="/register"
							onClick={() => dispatch(setIsOpen(!isOpen))}
						>
							Registrarse
						</CustomLinkRegister>
					</RegisterBox>
				</FormBox>
			</MainContent>
			<Background
				isOpen={isOpen}
				onClick={() => dispatch(setIsOpen(!isOpen))}
			></Background>
		</>
	);
};

export default LoginSidebar;

const Background = styled(Box)(({ isOpen }) => ({
	position: "fixed",
	top: 0,
	width: "100%",
	minHeight: "100vh",
	background: "rgba(0,0,0,.5)",
	visibility: isOpen ? "auto" : "hidden",
	opacity: isOpen ? 1 : 0,
	zIndex: isOpen ? 15 : 0,
	transition: "all .4s ease .1s",
}));

const MainContent = styled(Box)(({ isOpen }) => ({
	width: isOpen ? "30%" : "0",
	overflow: isOpen ? "auto" : "hidden",
	minHeight: "100vh",
	position: "fixed",
	top: 0,
	right: 0,
	zIndex: isOpen ? 16 : 0,
	background: "#eeeeee",
	transition: "width .2s ease",
}));

const CloseButton = styled(Box)(() => ({
	width: "390px",
	margin: "20px auto",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const Logo = styled("img")(() => ({
	height: "50px",
}));

const FormBox = styled("form")(() => ({
	width: "390px",
	background: "#ffffff",
	borderRadius: "10px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	margin: "20px auto",
	padding: "10px 30px",
	boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.1)",
}));

const LoginTitle = styled("h2")(() => ({
	width: "100%",
	textAlign: "center",
	margin: "40px 0 30px 0",
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

const ForgotPasswordBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
}));

const CustomLinkForgot = styled(Link)(() => ({
	textDecoration: "none",
	color: "rgba(58,131,150,1)",
	marginLeft: "5px",
	marginBottom: "10px",
	cursor: "pointer",

	"&:hover": {
		color: "rgba(70,161,185,1)",
	},
}));

const LoginButton = styled(Button)(() => ({
	width: "100%",
	height: "50px",
	borderRadius: "5px",
	background: "rgba(58,131,150,1)",
	margin: "10px 0 20px 0",

	"&:hover": {
		background: "rgba(70,161,185,1)",
	},
}));

const RegisterBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: "#999999",
	marginBottom: "10px",
}));

const CustomLinkRegister = styled(Link)(() => ({
	textDecoration: "none",
	color: "rgba(58,131,150,1)",
	marginLeft: "5px",
	cursor: "pointer",

	"&:hover": {
		color: "rgba(70,161,185,1)",
	},
}));

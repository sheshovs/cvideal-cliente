import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actionsRedux/user";
import { useNavigate } from "react-router-dom";
import {
	TextField,
	Box,
	Button,
	styled,
	FormControlLabel,
	Checkbox,
} from "@mui/material";

const LoginSidebar = ({ isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userData;

	const handleChange = (e) => {
		e.preventDefault();

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(login(userData)).then((x) => {
			if (x.status) {
				return navigate("/dashboard");
			}
		});
	};

	return (
		<>
			<MainContent isOpen={isOpen}>
				<CloseButton>
					<CloseIcon
						onClick={() => setIsOpen(!isOpen)}
						color="disabled"
						sx={{
							cursor: "pointer",
						}}
					/>
				</CloseButton>
				<FormBox>
					<LoginTitle>Iniciar sesión</LoginTitle>
					<Input
						label="Correo electrónico"
						placeholder="sergio@cvideal.cl"
						variant="outlined"
						size="small"
						name="email"
						valiue={email}
						onChange={(e) => handleChange(e)}
					/>

					<Input
						label="Contraseña"
						placeholder="********"
						variant="outlined"
						size="small"
						type="password"
						name="password"
						valiue={password}
						onChange={(e) => handleChange(e)}
					/>

					<SubmitButton variant="contained" onClick={(e) => onSubmit(e)}>
						Ingresar
					</SubmitButton>
				</FormBox>
			</MainContent>
			<Background
				isOpen={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			></Background>
		</>
	);
};

export default LoginSidebar;

const Background = styled(Box)(({ isOpen }) => ({
	position: "absolute",
	top: 0,
	width: "100%",
	height: "100vh",
	background: "rgba(0,0,0,.5)",
	visibility: isOpen ? "auto" : "hidden",
	opacity: isOpen ? 1 : 0,
	zIndex: isOpen ? 10 : 0,
	transition: "all .7s ease",
}));

const MainContent = styled(Box)(({ isOpen }) => ({
	width: isOpen ? "30%" : "0",
	overflow: isOpen ? "auto" : "hidden",
	height: "100vh",
	position: "absolute",
	top: 0,
	right: 0,
	zIndex: isOpen ? 11 : 0,
	background: "#eeeeee",
	transition: "width .5s ease",
}));

const CloseButton = styled(Box)(() => ({
	width: "390px",
	margin: "20px auto",
	display: "flex",
	justifyContent: "flex-end",
}));

const FormBox = styled(Box)(() => ({
	width: "330px",
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
	textAlign: "left",
	margin: "40px 0 30px 0",
}));

const Input = styled(TextField)(() => ({
	width: "100%",
	marginBottom: "20px",
}));

const SubmitButton = styled(Button)(() => ({
	width: "100%",
	height: "40px",
	borderRadius: "20px",
	textTransform: "capitalize",
	fontWeight: "bold",
	margin: "10px 0",
}));

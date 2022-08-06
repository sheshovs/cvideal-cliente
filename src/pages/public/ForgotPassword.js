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
import LoginSidebar from "../../components/LoginSidebar";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import { forgotPassword } from "../../redux/actionsRedux/user";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const [openAlert, setOpenAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const [alertData, setAlertData] = useState({
		message: "",
		type: "",
	});
	const [emailRecovery, setEmailRecovery] = useState("");

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenAlert(false);
	};

	const handleChange = (e) => {
		e.preventDefault();

		setEmailRecovery(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		setLoading(!loading);

		if (emailRecovery.length === 0) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Campo correo electrónico no puede estar vacío",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		} else if (!emailRegex.test(emailRecovery)) {
			setAlertData({
				...alertData,
				type: "error",
				message: "Debe ingresar un correo electrónico válido",
			});
			setLoading(false);
			setOpenAlert(true);
			return;
		}

		dispatch(forgotPassword(emailRecovery)).then((x) => {
			if (x.status) {
				setAlertData({
					...alertData,
					type: "success",
					message: x.message,
				});
				setOpenAlert(true);
				setLoading(false);
				setEmailRecovery("");
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
						<Title>¿Olvidaste tu contraseña?</Title>
						<Description>
							Completa el siguiente campo y recibirás un <br />
							<b> correo electrónico</b> para restablecer tu
							<b> contraseña</b>!
						</Description>

						<Input
							type="email"
							label="Correo electrónico"
							placeholder="juan@cvideal.cl"
							variant="outlined"
							name="emailRecovery"
							value={emailRecovery}
							onChange={(e) => handleChange(e)}
						/>

						<SubmitButton
							variant="contained"
							type="submit"
							disabled={loading ? true : false}
						>
							{loading ? (
								<CircularProgress color="inherit" />
							) : (
								"Olvidé mi contraseña"
							)}
						</SubmitButton>
					</FormBox>
				</ComponentBox>
				<Footer />
			</Contenedor>
		</>
	);
};

export default ForgotPassword;

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

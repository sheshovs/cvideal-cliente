import React, { useState } from "react";
import { styled, Box, Snackbar, Alert, Slide } from "@mui/material";
import Navbar from "../../components/Navbar";
import LoginSidebar from "../../components/LoginSidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = () => {
	const [openAlert, setOpenAlert] = useState(false);
	const [alertData, setAlertData] = useState({
		message: "",
		type: "",
	});
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenAlert(false);
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
				<Header />
				<Footer />
			</Contenedor>
		</>
	);
};

export default Main;

const Contenedor = styled(Box)(() => ({
	width: "100%",
	minHeight: "100vh",
}));

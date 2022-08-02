import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import LoginSidebar from "../../components/LoginSidebar";

const Login = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={{ width: "100%" }}>
			<LoginSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<SubmitButton
				variant="contained"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Ingresar
			</SubmitButton>
		</div>
	);
};

export default Login;

const SubmitButton = styled(Button)(() => ({
	width: "300px",
	height: "40px",
}));

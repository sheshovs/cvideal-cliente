import React from "react";
import { styled, Box } from "@mui/material";

const Footer = () => {
	return (
		<FooterBox>
			<MainBox></MainBox>
			<CreditsBox>
				Desarrollado con ❤️ por
				<Author href="https://github.com/sheshovs" target="_blank">
					Sergio Vargas
				</Author>
				|
				<Author
					href="https://github.com/sheshovs/cvideal-cliente"
					target="_blank"
				>
					Github
				</Author>
			</CreditsBox>
		</FooterBox>
	);
};

export default Footer;

const FooterBox = styled(Box)(() => ({
	width: "100%",
}));
const MainBox = styled(Box)(() => ({
	width: "100%",
	height: "200px",
	background: "#333333",
}));
const CreditsBox = styled(Box)(() => ({
	width: "100%",
	height: "50px",
	background: "#1C1C1C",
	color: "#858585",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const Author = styled("a")(() => ({
	margin: "0 5px",
	color: "#ffffff",
	textDecoration: "none",
	fontWeight: "bold",

	"&:hover": {
		color: "rgba(70,161,185,1)",
	},
}));

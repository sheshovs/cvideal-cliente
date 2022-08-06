import React from "react";
import { styled, Box } from "@mui/material";

const Header2 = ({ title, description }) => {
	return (
		<HeaderBox>
			<MainBox>
				<TextSide>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</TextSide>
			</MainBox>
		</HeaderBox>
	);
};

export default Header2;

const HeaderBox = styled(Box)(() => ({
	width: "100%",
	height: "300px",
	background: "rgba(65, 185, 214,1)",
}));

const MainBox = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	background:
		"linear-gradient(130deg, rgba(0,0,0,.4) 0% , rgba(65, 185, 214,1) 33%  66% , rgba(255,255,255,.4) 100%)",
	display: "flex",
	padding: "40px",
	boxSizing: "border-box",
	justifyContent: "center",
}));

const TextSide = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));

const Title = styled("h1")(() => ({
	color: "#ffffff",
	textTransform: "uppercase",
	textAlign: "center",
	fontSize: "2.5rem",
	marginBottom: "10px",
}));

const Description = styled("p")(() => ({
	margin: "5px auto",
	width: "40%",
	color: "#f0f0f0",
	textAlign: "center",
}));

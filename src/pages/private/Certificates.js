import React from "react";
import { styled } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar";

const Certificates = () => {
	return (
		<Background>
			<Sidebar />
			<MainContent>
				<TitleBox>
					<Title>Certificados</Title>
				</TitleBox>
			</MainContent>
		</Background>
	);
};

export default Certificates;

const Background = styled("div")(() => ({
	width: "95%",
	minHeight: "90vh",
	display: "flex",
	margin: "30px 0",
	background:
		"linear-gradient(to right bottom, rgba(65, 185, 214,0.5),rgba(65, 185, 214,0.2), rgba(65, 185, 214,0.4))",
	borderRadius: "30px",
	backdropFilter: "blur(10px)",
	boxShadow: "10px 10px 15px 0 rgba(0,0,0,0.2)",
}));

const MainContent = styled("div")(() => ({
	width: "100%",
	position: "relative",
}));

const TitleBox = styled("div")(() => ({
	width: "100%",
	borderBottom: "1px solid rgba(0,0,0,0.1)",
}));

const Title = styled("h1")(() => ({
	textTransform: "uppercase",
	color: "#001518",
	margin: "20px",
}));

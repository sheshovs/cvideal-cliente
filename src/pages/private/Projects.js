import React from "react";
import { styled, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "../../components/Sidebar";

const Projects = () => {
	return (
		<Background>
			<Sidebar />
			<MainContent>
				<TitleBox>
					<Title>Proyectos</Title>
				</TitleBox>
				<ProjectsBox>
					<ProjectAddItem>
						<AddIcon sx={{ color: "rgb(58, 163, 189)", fontSize: "40px" }} />
						<ProjectAddItemTitle>Agregar Proyecto</ProjectAddItemTitle>
					</ProjectAddItem>
				</ProjectsBox>
			</MainContent>
		</Background>
	);
};

export default Projects;

const Background = styled(Box)(() => ({
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

const MainContent = styled(Box)(() => ({
	width: "100%",
	position: "relative",
}));

const TitleBox = styled(Box)(() => ({
	width: "100%",
	borderBottom: "1px solid rgba(0,0,0,0.1)",
}));

const Title = styled("h1")(() => ({
	textTransform: "uppercase",
	color: "#0F2930",
	margin: "20px",
}));

const ProjectsBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	padding: "20px",
}));

const ProjectAddItem = styled(Box)(() => ({
	width: "260px",
	height: "160px",
	borderRadius: "20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-around",
	border: "2px solid rgba(65, 185, 214, 0.6)",
	background:
		"linear-gradient(to right bottom, rgba(255, 255, 255,0.7),rgba(255, 255, 255,0.4))",
	boxShadow: "5px 5px 10px 0 rgba(0,0,0,.1)",
	padding: "20px 30px",
	cursor: "pointer",
	transition: "all .1s ease",

	"&:hover": {
		boxShadow: "5px 5px 10px 0 rgba(0,0,0,.2)",
	},
}));

const ProjectAddItemTitle = styled("h2")(() => ({
	textAlign: "center",
	fontSize: "1.4rem",
	color: "rgb(58, 163, 189)",
	margin: 0,
}));

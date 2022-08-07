import React from "react";
import { styled, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Projects = () => {
	return (
		<ProjectAddItem>
			<AddIcon sx={{ color: "rgb(58, 163, 189)", fontSize: "40px" }} />
			<ProjectAddItemTitle>Agregar Proyecto</ProjectAddItemTitle>
		</ProjectAddItem>
	);
};

export default Projects;

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

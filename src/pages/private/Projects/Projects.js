import React from "react";
import { styled, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsByUserID } from "../../../redux/actionsRedux/project";
import AddIcon from "@mui/icons-material/Add";

const Projects = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { userProjects } = useSelector((x) => x.useProject);

	React.useEffect(() => {
		dispatch(getProjectsByUserID());
	}, []);

	return (
		<ComponentBox>
			{userProjects?.map((project) => {
				return (
					<ItemLink to={`/admin/projects`}>
						<ProjectAddItem>
							<ProjectAddItemTitle>{project.name}</ProjectAddItemTitle>
						</ProjectAddItem>
					</ItemLink>
				);
			})}

			<ItemLink to={location.pathname + "/add"}>
				<ProjectAddItem>
					<AddIcon sx={{ color: "rgb(58, 163, 189)", fontSize: "40px" }} />
					<ProjectAddItemTitle>Agregar Proyecto</ProjectAddItemTitle>
				</ProjectAddItem>
			</ItemLink>
		</ComponentBox>
	);
};

export default Projects;

const ProjectAddItem = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	borderRadius: "20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-around",
	border: "2px solid rgba(65, 185, 214, 0.6)",
	background:
		"linear-gradient(to right bottom, rgba(255, 255, 255,0.7),rgba(255, 255, 255,0.4))",
	boxShadow: "5px 5px 10px 0 rgba(0,0,0,.1)",
	cursor: "pointer",
	transition: "all .1s ease",
	padding: "20px 30px",

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

const ItemLink = styled(Link)(() => ({
	textDecoration: "none",
	padding: 0,
	width: "260px",
	height: "160px",
	margin: "10px",
}));

const ComponentBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexWrap: "wrap",
	alignContent: "flex-start",
}));

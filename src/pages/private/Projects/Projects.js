import React from "react";
import {
	styled,
	Box,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
} from "@mui/material";
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
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead style={{ background: "rgba(65,185,214,1)" }}>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell>Descripción</TableCell>
							<TableCell>Tipo</TableCell>
							<TableCell>Fecha</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userProjects.map((project) => (
							<TableRow
								key={project.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{project.name}
								</TableCell>
								<TableCell>{project.description}</TableCell>
								<TableCell>{project.type}</TableCell>
								<TableCell>
									{project.project_date
										.slice(0, 10)
										.split("-")
										.reverse()
										.join("/")}
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<ItemLink to={location.pathname + "/add"}>
								<TableCell>
									<AddIcon sx={{ fontSize: "16px" }} />
									Agregar Proyecto
								</TableCell>
							</ItemLink>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
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

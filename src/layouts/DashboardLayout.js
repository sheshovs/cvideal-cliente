import React, { useState, useEffect } from "react";
import { styled, CircularProgress, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { DashboardBar } from "../components/DashboardBar";
import {
	Navigate,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { getUserByToken } from "../redux/actionsRedux/user";
import { useDispatch, useSelector } from "react-redux";
import routes from "../routes";

const DashboardLayout = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(true);
	const { isOpen } = useSelector((x) => x.useUser);
	const token = localStorage.getItem("token");

	const getActiveRoute = (routes) => {
		let activeRoute = "Página no disponible";
		for (let i = 0; i < routes.length; i++) {
			if (
				window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
			) {
				return routes[i].name;
			}
		}
		return activeRoute;
	};

	const routelist = (routes) => {
		let array = [];
		const currentLayout = "/" + location.pathname.split("/")[1];
		array = routes.map((element) => {
			if (
				element.layout === currentLayout ||
				element.layout === "/admin" ||
				element.name === "Principal"
			) {
				return element;
			}
		});
		return array;
	};

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === "/admin") {
				return (
					<Route path={prop.path} element={<prop.component />} key={key} />
				);
			} else {
				return null;
			}
		});
	};

	useEffect(() => {
		dispatch(getUserByToken()).then((res) => {
			if (res.status) {
				setLoading(false);
			} else {
				localStorage.removeItem("token");
				return navigate("/");
			}
		});
	}, []);

	if (!token) return <Navigate from="*" to="/" />;
	if (isLoading) return <CircularProgress />;

	return (
		<Background>
			<Sidebar routes={routelist(routes)} isOpen={isOpen} />
			<MainContent>
				<DashboardBar title={getActiveRoute(routes)} />
				<ComponentBox>
					<Routes>{getRoutes(routes)}</Routes>
				</ComponentBox>
			</MainContent>
		</Background>
	);
};

export default DashboardLayout;

const Background = styled("div")(() => ({
	width: "95%",
	height: "90vh",
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

const ComponentBox = styled(Box)(() => ({
	width: "100%",
	height: "85%",
	display: "flex",
	padding: "20px",
	overflowY: "scroll",
	"&::-webkit-scrollbar": {
		width: "6px",
	},

	"&::-webkit-scrollbar-thumb": {
		background: "rgba(150,150,150,1)",
		borderRadius: "2px",
	},

	"&::-webkit-scrollbar-track": {
		background: "rgba(255, 255, 255,0.2)",
		borderRadius: "2px",
		height: "80%",
		display: "none",
	},
}));

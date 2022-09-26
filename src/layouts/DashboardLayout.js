import React, { useState, useEffect } from "react";
import {
	styled,
	CircularProgress,
	Box,
	Snackbar,
	Alert,
	Slide,
} from "@mui/material";
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
					<Route
						path={prop.path}
						element={
							<prop.component
								alertData={alertData}
								setAlertData={setAlertData}
								setOpenAlert={setOpenAlert}
							/>
						}
						key={key}
					/>
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
			<Background>
				<Sidebar routes={routelist(routes)} isOpen={isOpen} />
				<MainContent>
					<DashboardBar title={getActiveRoute(routes)} />
					<ComponentBox>
						<Routes>{getRoutes(routes)}</Routes>
					</ComponentBox>
				</MainContent>
			</Background>
		</>
	);
};

export default DashboardLayout;

const Background = styled("div")(() => ({
	width: "100%",
	height: "100vh",
	display: "flex",
	background:
		"linear-gradient(to right bottom, rgba(65, 185, 214,0.5),rgba(65, 185, 214,0.2), rgba(65, 185, 214,0.4))",
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

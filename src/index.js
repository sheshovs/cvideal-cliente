import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/main.css";
//Rutas públicas
import { Main, Login, Register } from "./pages/public";
import {
	Dashboard,
	Projects,
	Experiences,
	Certificates,
	Cv,
	Profile,
} from "./pages/private";
import { PrivateRoutes } from "./utils/PrivateRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} exact />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<PrivateRoutes />}>
					<Route element={<Dashboard />} path="/dashboard" />
					<Route element={<Projects />} path="/projects" />
					<Route element={<Experiences />} path="/experiences" />
					<Route element={<Certificates />} path="/certificates" />
					<Route element={<Cv />} path="/cv" />
					<Route element={<Profile />} path="/profile" />
				</Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

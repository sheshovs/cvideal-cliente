import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/main.css";
//Rutas públicas
import { Main, Login, Profile, Projects, Services } from "./pages/public";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="login" element={<Login />} />
				<Route path="profile" element={<Profile />} />
				<Route path="projects" element={<Projects />} />
				<Route path="services" element={<Services />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

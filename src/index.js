import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/main.css";
//Rutas públicas
import {
	Main,
	Register,
	PublicCv,
	ForgotPassword,
	NewPassword,
	FAQ,
} from "./pages/public";
import {
	Dashboard,
	Projects,
	Experiences,
	Certificates,
	Cv,
	Profile,
} from "./pages/private";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} exact />
					<Route path="/register" element={<Register />} />
					<Route path="/u/:url" element={<PublicCv />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/new-password/:token" element={<NewPassword />} />

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
		</Provider>
	</React.StrictMode>
);

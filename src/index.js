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

import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DashboardLayout from "./layouts/DashboardLayout";

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
						<Route path="/admin/*" element={<DashboardLayout />} />
					</Route>

					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

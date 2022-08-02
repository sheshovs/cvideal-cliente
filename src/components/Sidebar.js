import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actionsRedux/user";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/sidebar.css";

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const Logout = () => {
		dispatch(logout()).then((x) => {
			if (x.status) {
				return navigate("/login");
			}
		});
	};
	return (
		<div className={isOpen ? "sidebar" : "sidebar closed"}>
			<ul>
				<li onClick={() => setIsOpen(!isOpen)}>
					<ItemLink>
						<MenuIcon style={{ marginRight: 15 }} />
						Menú
					</ItemLink>
				</li>
				<li className={location.pathname === "/dashboard" ? "active" : ""}>
					<CustomLink to="/dashboard">
						<DashboardIcon style={{ marginRight: 15 }} /> Principal
					</CustomLink>
				</li>
				<li className={location.pathname === "/projects" ? "active" : ""}>
					<CustomLink to="/projects">
						<FolderIcon style={{ marginRight: 15 }} />
						Proyectos
					</CustomLink>
				</li>
				<li className={location.pathname === "/experiences" ? "active" : ""}>
					<CustomLink to="/experiences">
						<BusinessCenterIcon style={{ marginRight: 15 }} />
						Experiencias
					</CustomLink>
				</li>
				<li className={location.pathname === "/certificates" ? "active" : ""}>
					<CustomLink to="/certificates">
						<InventoryIcon style={{ marginRight: 15 }} />
						Certificados
					</CustomLink>
				</li>
				<li className={location.pathname === "/cv" ? "active" : ""}>
					<CustomLink to="/cv">
						<DescriptionIcon style={{ marginRight: 15 }} /> CV's
					</CustomLink>
				</li>
				<li onClick={() => Logout()}>
					<ItemLink>
						<LogoutIcon style={{ marginRight: 15 }} /> Salir
					</ItemLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;

const CustomLink = styled(Link)`
	font-size: 1.2rem;
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 15px;
	text-decoration: none;
	color: #000000;
`;

const ItemLink = styled("a")`
	font-size: 1.2rem;
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 15px;
`;

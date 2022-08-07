import React, { useState } from "react";
import { styled, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, setIsOpen } from "../redux/actionsRedux/user";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/sidebar.css";

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = (props) => {
	const [totalRoutes, setTotalRoutes] = useState(props.routes);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const Logout = () => {
		dispatch(logout()).then((x) => {
			if (x.status) {
				return navigate("/");
			}
		});
	};

	const activeRoute = (routeName) => {
		return location.pathname === routeName
			? "active sidebar-item"
			: "sidebar-item";
	};
	const createLinks = (routes) => {
		return routes.map((prop, key) => {
			if (prop.show === false || !prop.show) {
				return null;
			}
			return (
				<li key={key} className={activeRoute("/admin" + prop.path)}>
					<CustomLink to={prop.layout + prop.path}>
						{prop.icon !== undefined ? (
							typeof prop.icon === "string" ? (
								<Icon style={{ marginRight: 15 }}>{prop.icon}</Icon>
							) : (
								<prop.icon style={{ marginRight: 15 }} />
							)
						) : null}
						{prop.name}
					</CustomLink>
				</li>
			);
		});
	};
	var links = (
		<ul className="sidebar-menu">
			<li
				onClick={() => dispatch(setIsOpen(!props.isOpen))}
				className="sidebar-item"
			>
				<ItemLink>
					<MenuIcon style={{ marginRight: 15 }} />
					Menú
				</ItemLink>
			</li>
			{createLinks(totalRoutes)}
			<li onClick={() => Logout()} className="sidebar-item">
				<ItemLink>
					<LogoutIcon style={{ marginRight: 15 }} /> Salir
				</ItemLink>
			</li>
		</ul>
	);
	return (
		<div className={props.isOpen ? "sidebar" : "sidebar closed"}>{links}</div>
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

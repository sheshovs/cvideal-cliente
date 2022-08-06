import React, { useState } from "react";
import { Box, styled, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../redux/actionsRedux/loginSidebar";
import { Link } from "react-router-dom";
import LogoCv from "../assets/img/logo-cv.jpg";

const Navbar = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((x) => x.useLoginSidebar);
	return (
		<NavbarBox>
			<ContainerMenu>
				<LogoBox>
					<Logo src={LogoCv} alt="Logo CV Ideal" />
				</LogoBox>
				<Menu>
					<MenuItem>
						<CustomLink to="/">Inicio</CustomLink>
					</MenuItem>
					<MenuItem>
						<CustomLink to="/about-us">Nosotros</CustomLink>
					</MenuItem>
					<MenuItem>
						<CustomLink to="/FAQ">FAQ</CustomLink>
					</MenuItem>
				</Menu>
				<div>
					<RegisterButton variant="outlined">
						<CustomLinkRegister to="/register">Registrarse</CustomLinkRegister>
					</RegisterButton>
					<LoginButton
						variant="contained"
						onClick={() => {
							dispatch(setIsOpen(!isOpen));
						}}
					>
						Ingresar
					</LoginButton>
				</div>
			</ContainerMenu>
		</NavbarBox>
	);
};

export default Navbar;

const NavbarBox = styled(Box)(() => ({
	width: "100%",
	background: "white",
	boxShadow: "0 0 10px 0 rgba(0,0,0,.5)",
	position: "relative",
}));

const ContainerMenu = styled(Box)(() => ({
	width: "90%",
	height: "80px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	margin: "0 auto",
}));

const LogoBox = styled(Box)(() => ({
	width: "200px",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "2rem",
}));

const Logo = styled("img")(() => ({
	height: "90%",
}));

const Menu = styled("ul")(() => ({
	height: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	listStyle: "none",
	padding: "0 20px",
	margin: 0,
}));

const MenuItem = styled("li")(() => ({
	width: "130px",
	height: "60%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "#ffffff",
	transition: "background .2s ease",
	borderRadius: "5px",
	margin: "0 10px",

	"&:hover": {
		background: "#f5f5f5",
	},
}));

const CustomLink = styled(Link)(() => ({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textDecoration: "none",
	color: "black",
	padding: "0 20px",
}));

const RegisterButton = styled(Button)(() => ({
	width: "150px",
	height: "40px",
	margin: "0 10px",
	borderRadius: "20px",
	color: "rgba(58,131,150,1)",
	borderColor: "rgba(58,131,150,1)",

	"&:hover": {
		borderColor: "rgba(70,161,185,1)",
		boxShadow:
			"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
	},
}));

const CustomLinkRegister = styled(Link)(() => ({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textDecoration: "none",
	color: "rgba(58,131,150,1)",
}));

const LoginButton = styled(Button)(() => ({
	width: "150px",
	height: "40px",
	margin: "0 10px",
	borderRadius: "20px",
	background: "rgba(58,131,150,1)",

	"&:hover": {
		background: "rgba(70,161,185,1)",
	},
}));

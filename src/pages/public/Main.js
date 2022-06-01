import React from "react";
import { styled } from "@mui/material/styles";

const Main = () => {
	return <Contenedor>Main</Contenedor>;
};

export default Main;

const Contenedor = styled("div")(() => ({
	width: "100%",
	height: "100px",
	backgroundColor: "blue",
}));

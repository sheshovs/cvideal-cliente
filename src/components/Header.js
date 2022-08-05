import React from "react";
import { styled, Box } from "@mui/material";
import ImgHeader from "../assets/img/Header.png";

const Header = () => {
	return (
		<HeaderBox>
			<MainBox>
				<TextSide>
					<Title>Crea tu curriculum 100% online</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque rhoncus elementum consectetur. Aliquam dignissim odio
						vel orci accumsan vulputate. Fusce nec nibh tellus. Nunc pretium.
						Aliquam dignissim odio vel orci accumsan vulputate. Fusce nec nibh
						tellus. Nunc pretium.
					</Description>
				</TextSide>
				<ImgBox>
					<HeaderImg src={ImgHeader} />
				</ImgBox>
			</MainBox>
		</HeaderBox>
	);
};

export default Header;

const HeaderBox = styled(Box)(() => ({
	width: "100%",
	height: "400px",
	background: "rgba(65, 185, 214,1)",
}));

const MainBox = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	background:
		"linear-gradient(130deg, rgba(0,0,0,.5) 0%, rgba(65, 185, 214,1) 60%)",
	display: "flex",
	padding: "40px",
	boxSizing: "border-box",
	justifyContent: "space-evenly",
}));

const TextSide = styled(Box)(() => ({
	width: "40%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));

const Title = styled("h1")(() => ({
	color: "#ffffff",
	textTransform: "uppercase",
}));

const Description = styled("p")(() => ({
	color: "#F0F0F0",
}));

const ImgBox = styled(Box)(() => ({
	width: "50%",
	height: "100%",
	display: "flex",
	justifyContent: "flex-end",
}));

const HeaderImg = styled("img")(() => ({
	width: "100%",
	height: "auto",
}));

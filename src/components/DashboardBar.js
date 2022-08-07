import React, { useEffect, useState } from "react";
import { styled, Avatar, Menu, IconButton, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// icons
import { Settings, Person } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
	},
}));

export const DashboardBar = ({ title }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { userInfo } = useSelector((x) => x.useUser);
	const [initials, setInitials] = useState("");

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		setInitials(userInfo.first_name[0] + userInfo.last_name[0]);
	}, [userInfo]);

	return (
		<TitleBox>
			<Title>{title}</Title>
			<UserName>
				<IconButton
					onClick={handleClick}
					size="small"
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<StyledBadge
						overlap="circular"
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						variant="dot"
					>
						<Avatar sx={{ width: 40, height: 40, bgcolor: "#00bbd6" }}>
							{initials}
						</Avatar>
					</StyledBadge>
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 18,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: "right", vertical: "top" }}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				>
					<CustomLink to="/admin/profile">
						<Person fontSize="small" style={{ marginRight: 15 }} />
						Perfil
					</CustomLink>
					<CustomLink to="/admin/settings">
						<Settings fontSize="small" style={{ marginRight: 15 }} />
						Configuraciones
					</CustomLink>
				</Menu>
			</UserName>
		</TitleBox>
	);
};

const TitleBox = styled("div")(() => ({
	width: "100%",
	borderBottom: "1px solid rgba(0,0,0,0.1)",
	display: "flex",
	justifyContent: "space-between",
}));

const Title = styled("h1")(() => ({
	textTransform: "uppercase",
	color: "#001518",
	margin: "20px",
}));

const UserName = styled("p")(() => ({
	margin: "10px 20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const CustomLink = styled(Link)(() => ({
	cursor: "pointer",
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	padding: "15px",
	textDecoration: "none",
	color: "#0F2930",
	fontFamily: "sans-serif",

	"&:hover": {
		backgroundColor: "#f0f0f0",
	},
}));

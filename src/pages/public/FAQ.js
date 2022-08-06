import React, { useState } from "react";
import { styled, Box, Snackbar, Alert, Slide, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

// components
import Navbar from "../../components/Navbar";
import LoginSidebar from "../../components/LoginSidebar";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
	const [openAlert, setOpenAlert] = useState(false);
	const [alertData, setAlertData] = useState({
		message: "",
		type: "",
	});
	const [expanded, setExpanded] = useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenAlert(false);
	};

	return (
		<>
			<Snackbar
				open={openAlert}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				TransitionComponent={(props) => <Slide {...props} direction="left" />}
			>
				<Alert
					onClose={handleClose}
					severity={alertData.type}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{alertData.message}
				</Alert>
			</Snackbar>
			<LoginSidebar
				alertData={alertData}
				setAlertData={setAlertData}
				setOpenAlert={setOpenAlert}
			/>
			<Container>
				<Navbar />
				<Header2
					title="¿Tienes algunas dudas?"
					description="A continuación te dejamos las preguntas y respuestas más comunes sobre nuestra plataforma."
				/>
				<ComponentBox>
					<FAQBox>
						<Title>Preguntas frecuentes</Title>
						<Description>
							Tal vez las siguientes preguntas y respuestas puedan <br />
							resolver tus dudas!
						</Description>
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleChange("panel1")}
						>
							<AccordionSummary>
								<Typography>Collapsible Group Item #1</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
									eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
									eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel2"}
							onChange={handleChange("panel2")}
						>
							<AccordionSummary>
								<Typography>Collapsible Group Item #1</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
									eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
									eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</FAQBox>
				</ComponentBox>
				<Footer />
			</Container>
		</>
	);
};

export default FAQ;

const Container = styled(Box)(() => ({
	width: "100%",
	minHeight: "100vh",
}));

const ComponentBox = styled(Box)(() => ({
	background: "#ffffff",
	width: "100%",
	padding: "20px 30px",
	boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.1)",
	display: "flex",
	justifyContent: "center",
}));

const FAQBox = styled(Box)(() => ({
	width: "50%",
	marginBottom: "40px",
}));

const Title = styled("h1")(() => ({
	width: "100%",
	textAlign: "center",
	color: "#0F2930",
	marginBottom: "10px",
}));

const Description = styled("p")(() => ({
	width: "100%",
	textAlign: "center",
	color: "#999999",
	marginBottom: "30px",
	lineHeight: "22px",
}));

//Views
//Private Imports
import {
	Dashboard,
	Experiences,
	Certificates,
	Cv,
	Profile,
	Settings,
} from "./pages/private";
import { Projects, AddProject } from "./pages/private/Projects";
// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

var dashRoutes = [
	// Private Routes
	{
		path: "/dashboard",
		name: "Principal",
		icon: DashboardIcon,
		show: true,
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/projects",
		name: "Proyectos",
		icon: FolderIcon,
		show: true,
		component: Projects,
		layout: "/admin",
	},
	{
		path: "/projects/add",
		name: "Agregar proyecto",
		icon: FolderIcon,
		show: false,
		component: AddProject,
		layout: "/admin",
	},
	{
		path: "/experiences",
		name: "Experiencias",
		icon: BusinessCenterIcon,
		show: true,
		component: Experiences,
		layout: "/admin",
	},
	{
		path: "/certificates",
		name: "Certificados",
		icon: InventoryIcon,
		show: true,
		component: Certificates,
		layout: "/admin",
	},
	{
		path: "/cvs",
		name: "CV's",
		icon: DescriptionIcon,
		show: true,
		component: Cv,
		layout: "/admin",
	},
	{
		path: "/profile",
		name: "Perfil",
		icon: PersonIcon,
		show: false,
		component: Profile,
		layout: "/admin",
	},
	{
		path: "/settings",
		name: "Configuraciones",
		icon: SettingsIcon,
		show: false,
		component: Settings,
		layout: "/admin",
	},
	// Private Routes END
];
export default dashRoutes;

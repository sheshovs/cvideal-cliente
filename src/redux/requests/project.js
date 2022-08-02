import clienteAxios from "../../utils/clienteAxios";

const ProjectURL = "/project";
const ProjectsURL = "/projects";
const ProjectByUserURL = "/project/user";

const project = {
	CreateProject: async ({
		name,
		description,
		type,
		project_date,
		cover_img_url,
		demo_url,
		github_url,
		img_urls,
	}) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(ProjectURL, {
				name,
				description,
				type,
				project_date,
				cover_img_url,
				demo_url,
				github_url,
				img_urls,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetProjectByID: async (project_id) => {
		try {
			const resp = await clienteAxios.get(ProjectURL, { project_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateProject: async ({
		project_id,
		name,
		description,
		type,
		project_date,
		cover_img_url,
		demo_url,
		github_url,
		img_urls,
	}) => {
		try {
			const resp = await clienteAxios.patch(ProjectURL, {
				project_id,
				name,
				description,
				type,
				project_date,
				cover_img_url,
				demo_url,
				github_url,
				img_urls,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteProject: async (project_id) => {
		try {
			const resp = await clienteAxios.delete(ProjectURL, {
				project_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetProjects: async () => {
		try {
			const resp = await clienteAxios.get(ProjectsURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetProjectsByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(ProjectByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default project;

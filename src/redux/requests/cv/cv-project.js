import clienteAxios from "../../utils/clienteAxios";

const CvProjectURL = "/cv/project";

const cv_project = {
	CreateCvProject: async ({ cv_id, project_id }) => {
		try {
			const resp = await clienteAxios.post(CvProjectURL, {
				cv_id,
				project_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvProjects: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvProjectURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetProjectsByCvID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvProjectURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_project;

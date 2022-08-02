import clienteAxios from "../../utils/clienteAxios";

const CvURL = "/cv";
const CvsURL = "/cvs";
const CvByUserURL = "/cv/user";
const CvCheckURL = "/cv/checkUrl";

const cv = {
	CreateCv: async ({ name, url, job, template_id }) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(CvURL, {
				name,
				url,
				job,
				template_id,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateCv: async ({ cv_id, name, url, job, template_id }) => {
		try {
			const resp = await clienteAxios.patch(CvURL, {
				cv_id,
				name,
				url,
				job,
				template_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteCv: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetCvs: async () => {
		try {
			const resp = await clienteAxios.get(CvsURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCvByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCvsByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(CvByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	CheckUrl: async (url) => {
		try {
			const resp = await clienteAxios.get(CvCheckURL, {
				url,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCvByURL: async (url) => {
		try {
			const resp = await clienteAxios.get(`/cv/${url}`);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv;

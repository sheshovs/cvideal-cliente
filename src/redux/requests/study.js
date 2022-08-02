import clienteAxios from "../../utils/clienteAxios";

const StudyURL = "/study";
const StudiesURL = "/studies";
const StudyByUserURL = "/study/user";

const study = {
	CreateStudy: async ({ institution, career, start_year, end_year }) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(StudyURL, {
				institution,
				career,
				start_year,
				end_year,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetStudyByID: async (study_id) => {
		try {
			const resp = await clienteAxios.get(StudyURL, { study_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateStudy: async ({
		study_id,
		institution,
		career,
		start_year,
		end_year,
	}) => {
		try {
			const resp = await clienteAxios.patch(StudyURL, {
				study_id,
				institution,
				career,
				start_year,
				end_year,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteStudy: async (study_id) => {
		try {
			const resp = await clienteAxios.delete(StudyURL, {
				study_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetStudies: async () => {
		try {
			const resp = await clienteAxios.get(StudiesURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetStudiesByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(StudyByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default study;

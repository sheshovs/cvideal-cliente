import clienteAxios from "../../utils/clienteAxios";

const CvStudyURL = "/cv/study";

const cv_study = {
	CreateCvStudy: async ({ cv_id, study_id }) => {
		try {
			const resp = await clienteAxios.post(CvStudyURL, {
				cv_id,
				study_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvStudies: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvStudyURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetStudiesByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvStudyURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_study;

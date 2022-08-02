import clienteAxios from "../../utils/clienteAxios";

const CvExperienceURL = "/cv/experience";

const cv_experience = {
	CreateCvExperience: async ({ cv_id, experience_id }) => {
		try {
			const resp = await clienteAxios.post(CvExperienceURL, {
				cv_id,
				experience_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvExperiences: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvExperienceURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetExperiencesByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvExperienceURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_experience;

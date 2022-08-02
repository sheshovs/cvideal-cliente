import clienteAxios from "../../utils/clienteAxios";

const CvSkillURL = "/cv/skill";

const cv_skill = {
	CreateCvSkill: async ({ cv_id, skill_id }) => {
		try {
			const resp = await clienteAxios.post(CvSkillURL, {
				cv_id,
				skill_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvSkills: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvSkillURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetSkillByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvSkillURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_skill;

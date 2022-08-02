import clienteAxios from "../../utils/clienteAxios";

const SkillURL = "/skill";
const SkillsURL = "/skills";

const skill = {
	CreateSkill: async (name) => {
		try {
			const resp = await clienteAxios.post(SkillURL, {
				name,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetSkillByID: async (skill_id) => {
		try {
			const resp = await clienteAxios.get(SkillURL, { skill_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetSkills: async () => {
		try {
			const resp = await clienteAxios.get(SkillsURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default skill;

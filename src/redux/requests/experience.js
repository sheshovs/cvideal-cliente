import clienteAxios from "../../utils/clienteAxios";

const ExperienceURL = "/experience";
const ExperiencesURL = "/experiences";
const ExperienceByUserURL = "/experience/user";

const experience = {
	CreateExperience: async ({
		job_name,
		description,
		start_date,
		end_date,
		workday,
		company_name,
	}) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(ExperienceURL, {
				job_name,
				description,
				start_date,
				end_date,
				workday,
				company_name,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateExperience: async ({
		experience_id,
		job_name,
		description,
		start_date,
		end_date,
		workday,
		company_name,
	}) => {
		try {
			const resp = await clienteAxios.patch(ExperienceURL, {
				experience_id,
				job_name,
				description,
				start_date,
				end_date,
				workday,
				company_name,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteExperience: async (experience_id) => {
		try {
			const resp = await clienteAxios.delete(ExperienceURL, {
				experience_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetExperiences: async () => {
		try {
			const resp = await clienteAxios.get(ExperiencesURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetExperienceByID: async (experience_id) => {
		try {
			const resp = await clienteAxios.get(ExperienceURL, { experience_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetExperiencesByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(ExperienceByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default experience;

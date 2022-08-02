import clienteAxios from "../../utils/clienteAxios";

const LanguageURL = "/language";
const LanguagesURL = "/languages";
const LanguageByUserURL = "/language/user";

const language = {
	CreateLanguage: async ({ name, level }) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(LanguageURL, {
				name,
				level,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateLanguage: async ({ language_id, name, level }) => {
		try {
			const resp = await clienteAxios.patch(LanguageURL, {
				language_id,
				name,
				level,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteLanguage: async (language_id) => {
		try {
			const resp = await clienteAxios.delete(LanguageURL, {
				language_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetLanguages: async () => {
		try {
			const resp = await clienteAxios.get(LanguagesURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetLanguageByID: async (language_id) => {
		try {
			const resp = await clienteAxios.get(LanguageURL, { language_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetLanguagesByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(LanguageByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default language;

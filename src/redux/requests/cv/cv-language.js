import clienteAxios from "../../utils/clienteAxios";

const CvLanguageURL = "/cv/language";

const cv_language = {
	CreateCvLanguage: async ({ cv_id, language_id }) => {
		try {
			const resp = await clienteAxios.post(CvLanguageURL, {
				cv_id,
				language_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvLanguages: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvLanguageURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetLanguagesByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvLanguageURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_language;

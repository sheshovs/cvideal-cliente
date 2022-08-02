import clienteAxios from "../../utils/clienteAxios";

const TemplateURL = "/template";
const TemplatesURL = "/templates";

const template = {
	CreateTemplate: async ({ name, is_premium, thumbnail, file_name }) => {
		try {
			const resp = await clienteAxios.post(TemplateURL, {
				name,
				is_premium,
				thumbnail,
				file_name,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetTemplateByID: async (template_id) => {
		try {
			const resp = await clienteAxios.get(TemplateURL, { template_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateTemplate: async ({
		template_id,
		name,
		is_premium,
		thumbnail,
		file_name,
	}) => {
		try {
			const resp = await clienteAxios.patch(TemplateURL, {
				template_id,
				name,
				is_premium,
				thumbnail,
				file_name,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetTemplates: async () => {
		try {
			const resp = await clienteAxios.get(TemplatesURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default template;

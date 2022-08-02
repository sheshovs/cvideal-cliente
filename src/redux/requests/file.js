import clienteAxios from "../../utils/clienteAxios";

const FileURL = "/uploadfile";

const file = {
	uploadFile: async (file) => {
		try {
			const formData = new FormData();
			formData.append("file", file);

			const resp = await clienteAxios.post(FileURL, {
				formData,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default file;

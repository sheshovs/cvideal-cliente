import clienteAxios from "../../utils/axios";

const FileURL = "/uploadfile";

const file = {
	uploadFile: async (file) => {
		try {
			const token = localStorage.getItem("token");
			const formData = new FormData();
			formData.append("file", file);

			const resp = await clienteAxios.post(FileURL, formData, {
				headers: {
					token,
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

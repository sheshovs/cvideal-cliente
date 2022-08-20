import file from "../requests/file";

export const uploadFile = (inputFile) => {
	return async (dispatch) => {
		const { data, status } = await file.uploadFile(inputFile);
		if (status === 200) {
			return { status: true, message: data.message, url: data.url_file };
		}
		return { status: false, message: data.error };
	};
};

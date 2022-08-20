import project from "../requests/project";
import { CREATE_PROJECT } from "../../types/index";

export const createProject = (projectData) => {
	return async (dispatch) => {
		const { data, status } = await project.createProject(projectData);
		if (status === 200) {
			dispatch(action(CREATE_PROJECT, data.data));
			return { status: true, message: data.message, data: data.data };
		}
		return { status: false, message: data.error };
	};
};

const action = (type, data) => ({
	type: type,
	payload: data,
});

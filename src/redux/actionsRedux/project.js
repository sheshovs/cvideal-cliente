import project from "../requests/project";
import { CREATE_PROJECT, GET_PROJECTS_BY_USER_ID } from "../../types/index";

export const createProject = (projectData) => {
	return async (dispatch) => {
		const { data, status } = await project.CreateProject(projectData);
		if (status === 200) {
			dispatch(action(CREATE_PROJECT, data.data));
			return { status: true, message: data.message, data: data.data };
		}
		return { status: false, message: data.error };
	};
};

export const getProjectsByUserID = () => {
	return async (dispatch) => {
		const { data, status } = await project.GetProjectsByUserID();
		if (status === 200) {
			dispatch(action(GET_PROJECTS_BY_USER_ID, data.data));
			return { status: true, message: data.message, data: data.data };
		}
		return { status: false, message: data.error };
	};
};

const action = (type, data) => ({
	type: type,
	payload: data,
});

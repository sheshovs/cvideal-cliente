import { CREATE_PROJECT, GET_PROJECTS_BY_USER_ID } from "../../types/index";

const initialState = {
	currentProject: {},
	userProjects: [],
};

export const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PROJECT:
			return {
				...state,
				currentProject: action.payload,
			};
		case GET_PROJECTS_BY_USER_ID:
			return {
				...state,
				userProjects: action.payload,
			};
		default:
			return state;
	}
};

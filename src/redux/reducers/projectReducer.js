import { CREATE_PROJECT } from "../../types/index";

const initialState = {
	currentProject: {},
};

export const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PROJECT:
			return {
				...state,
				currentProject: action.payload,
			};
		default:
			return state;
	}
};

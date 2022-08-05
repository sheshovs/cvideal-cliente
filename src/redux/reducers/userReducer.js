import { LOGIN, LOGOUT, HANDLE_INTERN_SIDEBAR } from "../../types/index";

const initialState = {
	userInfo: [],
	isOpen: true,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				userInfo: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				userInfo: [],
			};
		case HANDLE_INTERN_SIDEBAR:
			return {
				...state,
				isOpen: action.payload,
			};
		default:
			return state;
	}
};

import {
	LOGIN,
	LOGOUT,
	HANDLE_INTERN_SIDEBAR,
	GET_USER_INFO,
} from "../../types/index";

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
		case GET_USER_INFO:
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

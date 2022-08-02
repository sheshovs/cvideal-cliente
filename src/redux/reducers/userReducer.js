import { LOGIN, LOGOUT } from "../../types/index";

const initialState = {
	userInfo: [],
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
		default:
			return state;
	}
};

import { HANDLE_SIDEBAR } from "./../../types/index";

const initialState = {
	isOpen: false,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_SIDEBAR:
			return {
				...state,
				isOpen: action.payload,
			};
		default:
			return state;
	}
};

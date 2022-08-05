import { HANDLE_SIDEBAR } from "../../types/index";

export const setIsOpen = (isOpen) => {
	return async (dispatch) => {
		dispatch(handleSidebar(isOpen));
	};
};

const handleSidebar = (isOpen) => ({
	type: HANDLE_SIDEBAR,
	payload: isOpen,
});

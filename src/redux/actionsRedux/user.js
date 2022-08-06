import user from "../requests/user";
import { LOGIN, LOGOUT, HANDLE_INTERN_SIDEBAR } from "../../types/index";

export const login = (userData) => {
	return async (dispatch) => {
		const { data, status } = await user.Login(userData);
		if (status === 200) {
			localStorage.setItem("token", data.token);
			const { data: userInfo } = await user.GetUserByID();
			dispatch(userLogin(userInfo.data[0]));
			return { status: true, message: data.message };
		}
		return { status: false, message: data.error };
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch(userLogout());
		localStorage.removeItem("token");
		return { status: true };
	};
};

export const register = (userData) => {
	return async (dispatch) => {
		const { data, status } = await user.CreateUser(userData);
		if (status === 200) {
			return { status: true, message: data.message };
		}
		return { status: false, message: data.error };
	};
};

export const setIsOpen = (isOpen) => {
	return async (dispatch) => {
		dispatch(handleSidebar(isOpen));
	};
};

export const forgotPassword = (email) => {
	return async (dispatch) => {
		const { data, status } = await user.ForgotPassword(email);
		if (status === 200) {
			return { status: true, message: data.message };
		}
		return { status: false, message: data.error };
	};
};

export const createNewPassword = (newPassword, token) => {
	return async (dispatch) => {
		const { data, status } = await user.NewPassword(newPassword, token);
		if (status === 200) {
			return { status: true, message: data.message };
		}
		return { status: false, message: data.error };
	};
};

const userLogin = (user) => ({
	type: LOGIN,
	payload: user,
});

const userLogout = () => ({
	type: LOGOUT,
});

const handleSidebar = (isOpen) => ({
	type: HANDLE_INTERN_SIDEBAR,
	payload: isOpen,
});

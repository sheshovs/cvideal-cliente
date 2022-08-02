import user from "../requests/user";
import { LOGIN, LOGOUT } from "../../types/index";

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

const userLogin = (user) => ({
	type: LOGIN,
	payload: user,
});

export const userLogout = () => ({
	type: LOGOUT,
});

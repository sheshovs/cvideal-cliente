import axios from "axios";

const LoginURL = "/user/login";
const RegisterURL = "/user/register";
const UserURL = "/user";
const UsersURL = "/users";

const user = {
	Login: async (userData) => {
		try {
			const resp = await axios.post(LoginURL, {
				userData,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	CreateUser: async ({ userData }) => {
		try {
			const resp = await axios.post(RegisterURL, {
				userData,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetUserByID: async (token) => {
		try {
			const resp = await axios.get(UserURL, { headers: { token } });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateUser: async (userData, token) => {
		try {
			const resp = await axios.patch(UserURL, {
				userData,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteUser: async (token) => {
		try {
			const resp = await axios.delete(UserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetUsers: async () => {
		try {
			const resp = await axios.get(UsersURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default user;

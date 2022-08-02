import clienteAxios from "../../utils/axios";

const LoginURL = "/user/login";
const RegisterURL = "/user/register";
const UserURL = "/user";
const UsersURL = "/users";

const user = {
	Login: async ({ email, password }) => {
		try {
			const resp = await clienteAxios.post(LoginURL, {
				email,
				password,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	CreateUser: async ({
		username,
		email,
		password,
		first_name,
		last_name,
		description,
		phone,
		rrss,
	}) => {
		try {
			const resp = await clienteAxios.post(RegisterURL, {
				username,
				email,
				password,
				first_name,
				last_name,
				description,
				phone,
				rrss,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetUserByID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(UserURL, { headers: { token } });
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateUser: async ({
		username,
		email,
		first_name,
		last_name,
		description,
		phone,
		rrss,
	}) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.patch(UserURL, {
				username,
				email,
				first_name,
				last_name,
				description,
				phone,
				rrss,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteUser: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.delete(UserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetUsers: async () => {
		try {
			const resp = await clienteAxios.get(UsersURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default user;

import clienteAxios from "../../utils/clienteAxios";

const CertificateURL = "/certificate";
const CertificatesURL = "/certificates";
const CertificateByUserURL = "/certificate/user";

const certificate = {
	CreateCertificate: async ({ name, file_url, certificate_date }) => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.post(CertificateURL, {
				name,
				file_url,
				certificate_date,
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	UpdateCertificate: async ({
		certificate_id,
		name,
		file_url,
		certificate_date,
	}) => {
		try {
			const resp = await clienteAxios.patch(CertificateURL, {
				certificate_id,
				name,
				file_url,
				certificate_date,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	DeleteCertificate: async (certificate_id) => {
		try {
			const resp = await clienteAxios.delete(CertificateURL, {
				certificate_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},

	GetCertificates: async () => {
		try {
			const resp = await clienteAxios.get(CertificatesURL);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCertificateByID: async (certificate_id) => {
		try {
			const resp = await clienteAxios.get(CertificateURL, { certificate_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCertificatesByUserID: async () => {
		try {
			const token = localStorage.getItem("token");
			const resp = await clienteAxios.get(CertificateByUserURL, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default certificate;

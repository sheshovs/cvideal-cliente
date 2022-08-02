import clienteAxios from "../../utils/clienteAxios";

const CvCertificateURL = "/cv/certificate";

const cv_certificate = {
	CreateCvCertificate: async ({ cv_id, certificate_id }) => {
		try {
			const resp = await clienteAxios.post(CvCertificateURL, {
				cv_id,
				certificate_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	DeleteCvCertificates: async (cv_id) => {
		try {
			const resp = await clienteAxios.delete(CvCertificateURL, {
				cv_id,
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	GetCertificatesByID: async (cv_id) => {
		try {
			const resp = await clienteAxios.get(CvCertificateURL, { cv_id });
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default cv_certificate;

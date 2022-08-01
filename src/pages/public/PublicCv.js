import React from "react";

const PublicCv = () => {
	return <div>{window.location.pathname.split("/")[2]}</div>;
};

export default PublicCv;

import React from "react";
import "./ButtonMedium.css";

function ButtonMedium(props) {
	const { children } = props;

	return (
		<div className="primary-medium">
			<div className="label asap-medium-meteorite-14px">{children}</div>
		</div>
	);
}

export default ButtonMedium;

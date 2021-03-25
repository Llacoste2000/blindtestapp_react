import React from "react";
import "./ButtonSmall.css";

function ButtonSmall(props) {
	const { children } = props;

	return (
		<div className="primary-small">
			<div className="label asap-medium-meteorite-12px">{children}</div>
		</div>
	);
}

export default ButtonSmall;

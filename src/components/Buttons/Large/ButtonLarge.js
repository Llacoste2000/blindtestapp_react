import React from "react";
import "./ButtonLarge.css";

function ButtonLarge(props) {
	const { children } = props;

	return (
		<div className="primary-large">
			<div className="label asap-medium-meteorite-20px">{children}</div>
		</div>
	);
}

export default ButtonLarge;

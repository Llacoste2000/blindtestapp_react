import React from "react";
import "./Input.css";

export default function Input(props) {
	const { inputName, inputType, inputPlaceholder, inputRequired } = props;

	return (
		<div className="input">
			<div className="text-cursor">
				<input
					className="text-i151434141504 asap-regular-normal-fog-14px"
					name={inputName}
					placeholder={inputPlaceholder}
					type={inputType}
					required={inputRequired}
				/>
			</div>
		</div>
	);
}

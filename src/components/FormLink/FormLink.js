import React from "react";
import "./FormLink.css";
import { Link } from "react-router-dom";

// TODO : Link router
export default function FormLink(props) {
	const { children, path } = props;

	return (
		<Link to={path} className="text-1 asap-regular-normal-meteorite-16px">
			{children}
		</Link>
	);
}

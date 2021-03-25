import React from "react";
import "./Page.css";

export default function Page(props) {
	let { children } = props;
	return <div className="page">{children}</div>;
}

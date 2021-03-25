import React from "react";
import "./AnswerCard.css";

export default function AnswerCard(props) {
	const { children, type } = props;

	return (
		<div className={`${type} answer-cards smart-layers-pointers`}>
			<div className="titre-de-musique text">{children}</div>
		</div>
	);
}

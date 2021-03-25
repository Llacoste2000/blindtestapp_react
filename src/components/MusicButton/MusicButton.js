import React from "react";
import "./MusicButton.css";

// TODO : state music playing or not => vector play or pause

export default function MusicButton(props) {
	const { src } = props;

	const playImage =
		"https://anima-uploads.s3.amazonaws.com/projects/5fb500df01f0299208c4d019/releases/605bd60015bc90470da47be2/img/vector@2x.png";
	const pauseImage =
		"https://anima-uploads.s3.amazonaws.com/projects/5fb500df01f0299208c4d019/releases/605bd60015bc90470da47be2/img/vector-1@2x.png";

	return (
		<div className="music-buttons-play smart-layers-pointers ">
			<img className="vector" src={playImage} />
		</div>
	);
}

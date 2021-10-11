import React, { useState } from "react";
import AppTitleBar from "./AppTitleBar";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

const InfoApp = ({ openClose, open }) => {
	let [x, setX] = useState(10);
	let [y, setY] = useState(10);
	let [grabOffset, setGrabOffset] = useState([0, 0]);
	const id = 1;

	// if (open) {
	return (
		<section id="info-window" className="windows">
			<div
				className={
					open ? "window-container" : "window-container window-container-closed"
				}
				style={{ left: x, top: y }}
			>
				<AppTitleBar
					id = {id}
					windowX = {x}
					windowY = {y}
					windowSetX = {setX}
					windowSetY = {setY}
					grabOffset = {grabOffset}
					setGrabOffset = {setGrabOffset}
					openClose = {openClose}
					title = "Info"
					IconComponent = {InfoIcon}
				/>

				<div className="window-content">
					Lorem, ipsum. Lorem ipsum dolor sit, amet consectetur, adipisicing
					elit. Unde, eum.
				</div>
			</div>
		</section>
	);
	// } else {
	// 	return <></>;
	// }
};

export default InfoApp;

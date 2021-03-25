import React from "react";
import styles from "./HeaderMain.module.css";

//TODO : Sync image of account
//TODO : sync player level text
//TODO : Sync player level bar progress
const HeaderMain = () => {
	return (
		<div className={styles.headerMain}>
			<div className={styles.headerMain__wrapper}>
				<div className={styles.headerMain__player}>
					<img
						alt=""
						className={styles.player__image}
						src="https://static.overlay-tech.com/assets/43f9ca00-2851-438e-9710-8ad4582c2cad.png"
					/>
					<div className={styles.player__level}>
						<p className={styles.level__text}>Level : 12</p>
						<div className={styles.level__bar}>
							<div className={styles.bar__progress} />
						</div>
					</div>
				</div>
				<div className={styles.headerMain__menu}>
					<img
						alt=""
						src="https://static.overlay-tech.com/assets/6bf1d20c-e472-4bd0-b7e9-f48d6027e964.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;

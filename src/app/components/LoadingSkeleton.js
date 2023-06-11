import React from "react";
import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
	return (
		<div className={styles.loadingSkeleton}>
			<div className={styles.skeletonLine}></div>
			<div className={styles.skeletonLine}></div>
			<div className={styles.skeletonLine}></div>
		</div>
	);
};

export default LoadingSkeleton;

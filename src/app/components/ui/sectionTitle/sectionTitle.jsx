import React from 'react';
import styles from './sectionTitle.module.scss'

const SectionTitle = ({ title, subTitle }) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.line}></p>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.subTitle}>{subTitle}</p>
		</div>
	)
}

export default SectionTitle

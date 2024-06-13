import React from 'react'
import styles from './mainButton.module.scss'

const MainButton = ({ content }) => {
	return (
		<button className={styles.body}>
			{content}
		</button>
	)
}

export default MainButton

import React from 'react'
import styles from './mainButton.module.scss'

const MainButton = ({ content }) => {
	return (
		<a
			className={styles.body}
			href='mailto: vigonin83@gmail.com'
		>
			{content}
		</a>
	)
}

export default MainButton

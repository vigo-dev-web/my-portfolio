import React from 'react'
import styles from './buttonLink.module.scss'

const ButtonLink = ({ link, children }) => {
	return (
		<>
			<a
				className={styles.body}
				href={link}
        target='_blank'
        rel="noopener noreferrer"
			>
				{children}
			</a>
		</>
	)
}

export default ButtonLink

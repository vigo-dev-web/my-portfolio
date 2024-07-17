import React from 'react'
import styles from './footer.module.scss'
import socialLink from '../../../mock/social'

const Footer = () => {
	return (
		<div className={styles.container}>
			<ul className='flex justify-start gap-x-4'>
				{socialLink.map((item) => (
					<li key={item.id}>
						<a
							className='h-5 w-5 hover:text-lightblue transition delay-180 duration-300 ease-in'
							href={item.link}
							target='_blank'
							rel="noopener noreferrer"
						>
							{item.icon}
						</a>
					</li>
				))}
				<li className={styles.phone}>+7 (985) 937-47-08</li>
			</ul>
		</div>
	)
}

export default Footer

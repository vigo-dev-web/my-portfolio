import React from 'react'
import { NavLink } from 'react-router-dom'
import myInfo from '../../../mock/mainPage'
import styles from './mainPage.module.scss'
import MainButton from '../../ui/mainButton/mainButton'

const MainPage = () => {
	const createMessage = 'Написать мне'

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<p className={styles.greetings}>{myInfo.greetings}</p>
					<h1 className={styles.title}>{myInfo.occupation}</h1>
					<p className={styles.mainText}>
						● Я имею опыт работы в создании современных веб-приложений и пользовательских интерфейсов.
					</p>
					<p className={styles.mainText}>
						● Осуществляю профессиональную разработку с использованием{' '}
						<span>- React, Next.js, TypeScript.</span> Подробнее с моим стеком можно
						ознакомиться{' '}
						<NavLink
							to='/technology'
							className='text-lightblue hover:text-white transition delay-180 duration-300 ease-in'
						>
							{' '}
							здесь.
						</NavLink>{' '}
					</p>
					<p className={styles.mainText}>
						● В этом портфолио вы найдете ряд реализованных{' '}
						<NavLink
							to='/projects'
							className='text-lightblue hover:text-white transition delay-180 duration-300 ease-in'
						>
							{' '}
							проектов,{' '}
						</NavLink>
						отражающих мои профессиональные навыки и компетенции.
					</p>
					<p className={styles.callAction}>
						Свяжитесь со мной - я всегда открыт для новых вызовов и взаимного сотрудничества!
					</p>
					<div className={styles.buttonBox}>
						<MainButton content={createMessage} />
					</div>
				</div>
				<img
					src='/my-portfolio/assets/main-foto.jpg'
					alt='Main-foto'
					className={styles.image}
				/>
			</div>
		</>
	)
}

export default MainPage

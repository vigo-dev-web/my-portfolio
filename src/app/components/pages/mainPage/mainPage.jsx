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
						Разрабатываю сайты, приложения и интерфейсы для Вашего бизнеса. Имею опыт интеграции Frontend и Backend.
						Использую современный технологический{' '}
						<NavLink
							to='/technology'
							className='text-lightblue hover:text-white transition delay-180 duration-300 ease-in'
						>
							{' '}
							стек.
						</NavLink>{' '}
						С моими проектами можно ознакомиться
						<NavLink
							to='/projects'
							className='text-lightblue hover:text-white transition delay-180 duration-300 ease-in'
						>
							{' '}
							здесь.
						</NavLink>
					</p>
					<p className={styles.callAction}>Давайте начнем работать вместе!</p>
					<div className={styles.buttonBox}>
						<MainButton content={createMessage} />
					</div>
				</div>
				<img
					src='./assets/main-foto.jpg'
					alt='Main'
					className={styles.image}
				/>
			</div>
		</>
	)
}

export default MainPage

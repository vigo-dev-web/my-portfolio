import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './navBar.module.scss'
import MainButton from '../../ui/mainButton/mainButton'
import nav from '../../../mock/nav'
import Logo from '../../ui/logo/logo'
import ButtonLink from '../../ui/buttonLink/buttonLink';

const NavBar = () => {
	const createMessage = 'Написать мне'
	const { pathname } = useLocation()
	return (
		<nav className={styles.container}>
			<div className={styles.wrapper}>
				<Logo />
				<div className={''}>
					{nav.map((item) => (
						<NavLink
							to={item.path}
							key={item.id}
							className={
								(pathname === item.path ? 'text-white ' : 'text-lightblue ') +
								'hover:text-white px-3 transition delay-180 duration-300 ease-in py-2 rounded-md text-sm font-[700] tracking-[.05rem] whitespace-nowrap'
							}
						>
							{item.title}
						</NavLink>
					))}
				</div>
				<ButtonLink link={'/assets/Igonin_Vasiliy_CV.pdf'}>Скачать резюме</ButtonLink>
			</div>
		</nav>
	)
}

export default NavBar

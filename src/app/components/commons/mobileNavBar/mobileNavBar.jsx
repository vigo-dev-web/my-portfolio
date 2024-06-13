import React, { useState } from 'react'
import styles from './mobileNavBar.module.scss'
import { FaPhone } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import MobileNavLinks from '../mobileNavLinks/mobileNavLinks'
import Logo from '../../ui/logo/logo'

const MobileNavBar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const handleOpenMenu = () => {
		document.body.classList.add('close')
		setIsOpenMenu((prev) => !prev)
	}
	return (
		<>
			{isOpenMenu ? (
				<MobileNavLinks onClick={handleOpenMenu} />
			) : (
				<nav className={styles.container}>
					<div className={styles.wrapper}>
						<div onClick={handleOpenMenu}>
							<HiMenuAlt3
								size={30}
								className={styles.menu}
							/>
						</div>
						<Logo />
						<a href='tel:89859374708'>
							<FaPhone
								size={25}
								className={styles.phone}
							/>
						</a>
					</div>
				</nav>
			)}
		</>
	)
}

export default MobileNavBar

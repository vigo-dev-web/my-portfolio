import nav from '../../../mock/nav'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './mobileNavLinks.module.scss'
import { MdClose } from 'react-icons/md'

const MobileNavLinks = ({ onClick }) => {
	const { pathname } = useLocation()

	console.log(pathname)
	console.log(nav[0].path === pathname)

	const handleClose = () => {
		setTimeout(() => {
			document.body.classList.remove('close')
		}, 200)
		onClick()
	}

	return (
		<div className={styles.wrapper}>
			<MdClose
				className={styles.close}
				size={50}
				onClick={handleClose}
			/>
			{nav.map((item) => (
				<NavLink
					to={item.path}
					key={item.id}
					className={styles.link}
					onClick={handleClose}
					>
					{item.title}
				</NavLink>
			))}
			<a
				href='./assets/Igonin_Vasiliy_CV.pdf'
				onClick={handleClose}
				className={styles.link}
			>
				{'Посмотреть резюме'}
			</a>
		</div>
	)
}

export default MobileNavLinks

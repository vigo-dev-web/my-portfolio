import nav from '../../../mock/nav'
import { NavLink } from 'react-router-dom'
import styles from './mobileNavLinks.module.scss'
import { MdClose } from 'react-icons/md'

const MobileNavLinks = ({ onClick }) => {
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
				href='/my-portfolio/assets/Igonin_Vasiliy_CV.pdf'
				onClick={handleClose}
				className={styles.link}
			>
				{'Посмотреть резюме'}
			</a>
		</div>
	)
}

export default MobileNavLinks

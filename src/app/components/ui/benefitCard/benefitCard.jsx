import React from 'react'
import styles from './benefitCard.module.scss'
import {
	TimerIcon,
	MoodIcon,
	TeamIcon,
	LanguageIcon,
	LaptopIcon,
	RiMoneyDollarCircleLine,
	IoMdCheckboxOutline
} from '../../../../icons'

const BenefitCard = ({ benefit }) => {
	const getImage = () => {
		if (benefit?.title === 'Тайм-менеджмент') {
			return (
				<>
					<TimerIcon size={33} />
				</>
			)
		}
		if (benefit?.title === 'Работа в команде') {
			return (
				<>
					<TeamIcon size={28} />
				</>
			)
		}
		if (benefit?.title === 'Ценность для бизнеса') {
			return (
				<>
					<RiMoneyDollarCircleLine size={32} />
				</>
			)
		}
		if (benefit?.title === 'Самообучение') {
			return (
				<>
					<LaptopIcon size={25} />
				</>
			)
		}
		if (benefit?.title === 'Решение проблем') {
			return (
				<>
					<IoMdCheckboxOutline size={25} />
				</>
			)
		}
		if (benefit?.title === 'Английский язык') {
			return (
				<>
					<LanguageIcon size={25} />
				</>
			)
		}
		if (benefit?.title === 'Позитивный настрой') {
			return (
				<>
					<MoodIcon size={28} />
				</>
			)
		}
	}

	return (
		<>
			<div className={styles.cardBody}>
				<div className={styles.circle}>{getImage()}</div>
				<div className={styles.text}>
					<h3 className={styles.title}>{benefit.title}</h3>
					<span>{benefit?.description}</span>
				</div>
			</div>
		</>
	)
}

export default BenefitCard

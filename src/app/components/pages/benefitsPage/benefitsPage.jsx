import React from 'react'
import styles from './benefitsPage.module.scss'
import SectionTitle from '../../ui/sectionTitle/sectionTitle'
import BenefitCard from '../../ui/benefitCard/benefitCard'
import benefits from '../../../mock/benefits'

const BenefitsPage = () => {
	return (
		<>
			<SectionTitle
				title={'Преимущества'}
				subTitle={'работы со мной'}
			/>
			<div className={styles.wrapper}>
				<div className={styles.item0}>
					<BenefitCard benefit={benefits[0]} />
				</div>
				<div className={styles.item1}>
					<BenefitCard benefit={benefits[1]} />
				</div>
				<div className={styles.item2}>
					<BenefitCard benefit={benefits[2]} />
				</div>
				<div className={styles.item3}>
					<BenefitCard benefit={benefits[3]} />
				</div>
				<div className={styles.item4}>
					<BenefitCard benefit={benefits[4]} />
				</div>
				<div className={styles.item5}>
					<BenefitCard benefit={benefits[5]} />
				</div>
				<div className={styles.item6}>
					<BenefitCard benefit={benefits[6]} />
				</div>
			</div>
		</>
	)
}

export default BenefitsPage

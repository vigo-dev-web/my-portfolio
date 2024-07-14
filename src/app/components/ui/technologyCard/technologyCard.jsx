import styles from './technologyCard.module.scss'
import {
	ReactIcon,
	NextIcon,
	JsIcon,
	TsIcon,
	SassIcon,
	TailwindIcon,
	ExpressIcon,
	NodeIcon,
	WebpackIcon,
	GulpIcon,
	HTMLIcon,
	GitHubIcon,
	ReduxIcon,
	AIIcon
} from '../../../../icons'

const TechnologyCard = ({ technology }) => {
	const getImage = () => {
		if (technology?.tech1.keyWord === 'React') {
			return (
				<>
					<ReactIcon size={33} />
					<NextIcon size={32} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'JavaScript') {
			return (
				<>
					<JsIcon size={28} />
					<TsIcon size={28} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'Redux') {
			return (
				<>
					<ReduxIcon size={38} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'Webpack') {
			return (
				<>
					<WebpackIcon size={36} />
					<GulpIcon size={38} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'HTML') {
			return (
				<>
					<HTMLIcon size={36} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'SASS') {
			return (
				<>
					<SassIcon size={40} />
					<TailwindIcon size={28} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'Node.js') {
			return (
				<>
					<NodeIcon size={30} />
					<ExpressIcon size={28} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'Git') {
			return (
				<>
					<GitHubIcon size={40} />
				</>
			)
		}
		if (technology?.tech1.keyWord === 'AI') {
			return (
				<>
					<AIIcon size={40} />
				</>
			)
		}
	}
	return (
		<div className={styles.cardBody}>
			<div className={styles.circle}>{getImage()}</div>
			<ul className={styles.list}>
				{' '}
				<li className={styles.listItem}>
					<span>
						{technology?.tech1.partOne}
						<strong>{technology?.tech1.keyWord}</strong>
						{technology?.tech1.partTwo}
					</span>
				</li>
				<li className={styles.listItem}>
					<span>
						{technology?.tech2.partOne}
						<strong>{technology?.tech2.keyWord}</strong>
						{technology?.tech2.partTwo}
					</span>
				</li>
			</ul>
		</div>
	)
}

export default TechnologyCard

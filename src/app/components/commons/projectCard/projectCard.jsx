import styles from './projectCard.module.scss'
import ButtonLink from '../../ui/buttonLink/buttonLink'

const ProjectCard = ({ image, alt, title, description, technology, projectLink, gitHubLink }) => {
	return (
		<>
			<div className={styles.body}>
				<img
					className={styles.image}
					src={image}
					alt={alt}
				/>
				<div className={styles.content}>
					<div>
						<h3 className={styles.title}>{title}</h3>
						<div className={styles.descriptionContainer}>
							<h3 className={styles.descriptionTitle}>Реализован функционал:</h3>
							<p>{description}</p>
						</div>
						<div className={styles.descriptionContainer}>
							<h3 className={styles.technologyTitle}>Используемые технологии:</h3>
							<p className={styles.technologyText}>
								{technology.map((item, index) => (
									<span key={index}> {item}</span>
								))}
							</p>
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<ButtonLink link={projectLink}>Посмотреть</ButtonLink>
						<ButtonLink link={gitHubLink}>GitHub</ButtonLink>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectCard

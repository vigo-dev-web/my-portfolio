import React, { useState } from 'react'
import styles from './projectPage.module.scss'
import ProjectCard from '../../commons/projectCard/projectCard'
import projects from '../../../mock/projects'
import SectionTitle from '../../ui/sectionTitle/sectionTitle'
import Pagination from '../../commons/pagination.jsx/pagination'

const ProjectsPage = () => {
	const sumOfCounts = projects.length
	const pageSize = 2
	const [currentPage, setCurrentPage] = useState(1)

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const paginate = (items, pageNumber, pageSize) => {
		const startindex = (pageNumber - 1) * pageSize
		return [...items].splice(startindex, pageSize)
	}
	const pageProjects = paginate(projects, currentPage, pageSize)

	return (
		<>
			<SectionTitle
				title={'Проекты'}
				subTitle={'реализованные мной'}
			/>
			<div className={styles.wrapper}>
				<div className={styles.cardWrapper}>
					{pageProjects.map((project) => (
						<ProjectCard
							key={project.id}
							{...project}
						/>
					))}
				</div>
				<Pagination
					itemsCount={sumOfCounts}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</div>
		</>
	)
}

export default ProjectsPage

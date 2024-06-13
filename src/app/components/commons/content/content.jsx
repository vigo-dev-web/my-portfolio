import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/mainPage/mainPage'
import TechnologyPage from '../../pages/technologyPage/technologyPage'
import styles from './content.module.scss'
import ProjectsPage from '../../pages/projectPage/projectsPage';
import BenefitsPage from '../../pages/benefitsPage/benefitsPage';

const Content = () => {

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<Routes>
					<Route
						path=''
						element={<MainPage />}
					/>
					<Route
						path='projects'
						element={<ProjectsPage />}
					/>
					<Route
						path='technology'
						element={<TechnologyPage />}
					/>
					<Route
						path='benefits'
						element={<BenefitsPage />}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default Content

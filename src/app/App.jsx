import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import NavBar from './components/commons/navBar/navBar'
import MobileNavBar from './components/commons/mobileNavBar/mobileNavBar'
import Footer from './components/commons/footer/footer'
import ProjectsPage from '../app/components/pages/projectPage/projectsPage';
import BenefitsPage from '../app/components/pages/benefitsPage/benefitsPage';
import MainPage from '../app/components/pages/mainPage/mainPage';
import TechnologyPage from '../app/components/pages/technologyPage/technologyPage';

function App() {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

	return (
		<>
			{isTabletOrMobile ? <MobileNavBar /> : <NavBar />}
			<div className='body'>
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={<MainPage />}
						/>
						<Route
							path='/projects'
							element={<ProjectsPage />}
						/>
						<Route
							path='/technology'
							element={<TechnologyPage />}
						/>
						<Route
							path='/benefits'
							element={<BenefitsPage />}
						/>
						<Route
							path='*'
							element={<div>Страница не найдена</div>}
						/>
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App

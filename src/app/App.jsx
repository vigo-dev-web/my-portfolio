import { useMediaQuery } from 'react-responsive'
import NavBar from './components/commons/navBar/navBar'
import MobileNavBar from './components/commons/mobileNavBar/mobileNavBar'
import Footer from './components/commons/footer/footer'
import Content from './components/commons/content/content'

function App() {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
	return (
		<>
			{isTabletOrMobile ? <MobileNavBar /> : <NavBar />}
			<Content />
			<Footer />
		</>
	)
}

export default App

import { Link } from 'react-router-dom'

const Logo = () => {

	return (
		<Link to={'/'}>
			<img
				className='h-10 w-auto'
				src='/my-portfolio/assets/word-logo-original.png'
				alt='Portfolio logo'
			/>
		</Link>
	)
}

export default Logo

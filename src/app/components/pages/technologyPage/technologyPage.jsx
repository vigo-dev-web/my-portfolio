import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import styles from './technologyPage.module.scss'
import SectionTitle from '../../ui/sectionTitle/sectionTitle'
import TechnologyCard from '../../ui/technologyCard/technologyCard'
import technologies from '../../../mock/technologies'

const TechnologyPage = () => {
	return (
		<>
			<SectionTitle
				title={'Технологии'}
				subTitle={'используемые в проектах'}
			/>
			<div className={styles.cardContainer}>
				<Swiper
					className={styles.sliderContainer}
					modules={[Navigation, Pagination, EffectCoverflow]}
					spaceBetween={160}
					slidesPerView={1}
					effect='coverflow'
					coverflowEffect={{ rotate: 35, slideShadows: false, depth: 50, stretch: 3 }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
					onSlideChange={() => console.log('Cлайд изменился')}
					breakpoints={{
						914: {
							slidesPerView: 3,
							spaceBetween: 50
						},
						625: {
							slidesPerView: 2,
							spaceBetween: 60
						}
					}}
				>
					{technologies.map((tech) => (
						<>
							<SwiperSlide key={tech.id}>
								<TechnologyCard
									technology={tech}
									// key={tech.id}
								/>
							</SwiperSlide>
						</>
					))}
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
					<div className='swiper-pagination'></div>
				</Swiper>
			</div>
		</>
	)
}

export default TechnologyPage

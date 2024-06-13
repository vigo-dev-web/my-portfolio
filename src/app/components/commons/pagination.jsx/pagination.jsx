import React from 'react'
import _ from 'lodash'
import styles from './pagination.module.scss'

function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
	const pageCount = Math.ceil(itemsCount / pageSize)
	if (pageCount === 1) return null
	const pages = _.range(1, pageCount + 1)
	return (
		<div className={styles.container}>
			<nav
				className='inline-flex -space-x-px text-lightblue'
				aria-label='Pagination'
			>
				{pages.map((page) => (
					<button
						key={'page_' + page}
						className={
							'relative inline-flex items-center border px-3 py-1 text-sm font-medium' +
							(currentPage === page ? ' bg-lightblue text-white' : ' bg-white') +
							(page === 1 ? ' rounded-l-md' : ' ') +
							(page === pages.length ? ' rounded-r-md' : ' ')
						}
						onClick={() => onPageChange(page)}
					>
						{page}
					</button>
				))}
			</nav>
		</div>
	)
}

export default Pagination

import Link from 'next/link'
import React, { Suspense } from 'react'
import Loading from '../loading'

export const metadata = {
	title: 'Meetups : Laravel Live Jaipur - Find your community',
	description: 'Meetups : Laravel Live Jaipur - Find your community in Jaipur',
}
const Meetups = () => {
	return (
		<div>
			<Suspense fallback={<Loading />}>
				<section class='bg-white dark:bg-gray-900'>
					<div class='flex flex-col bg-center bg-cover bg-no-repeat py-32'>
						<h1 className='text-color-primary text-center font-bold'>No future meetup scheduled, We will share ASAP</h1>
					</div>
				</section>
			</Suspense>
		</div>
	)
}

export default Meetups

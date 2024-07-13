import React, { Suspense } from 'react'
import Loading from '../loading'
 
import AllEventsEmbed from '../components/AllEventsEmbed';
export const metadata = {
	title: 'Meetups : Laravel Live Jaipur - Find your community',
	description: 'Meetups : Laravel Live Jaipur - Find your community in Jaipur',
}
const Meetups = () => { 

	return (
		<div className=''>
			<Suspense fallback={<Loading />}>
			<AllEventsEmbed />
			</Suspense>
		</div>
	)
}

export default Meetups

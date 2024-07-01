import Link from 'next/link'
import React, { Suspense } from 'react'
import Loading from '../loading'
import Image from 'next/image' 
import dayjs from 'dayjs';
export const metadata = {
	title: 'Meetups : Laravel Live Jaipur - Find your community',
	description: 'Meetups : Laravel Live Jaipur - Find your community in Jaipur',
}
const Meetups = () => {

	const meetups = [
		{
			title: "Laravel Live Jaipur - July Chapter Meetup - 2024",
			date: "2024-04-27",
			thumbnail: "/images/meetups/July2024ChapterMeetup.jpeg",
			ticketLink: "my.allevents.in/laravel-live-jaipur-july-2024"
		},
		{
			title: "Laravel Live Jaipur - April Chapter Meetup - 2024",
			date: "2024-04-27",
			thumbnail: "/images/meetups/April2024ChapterMeetup.png",
			ticketLink: "#"
		},
		{
			title: "Laravel Live Jaipur - January Chapter Meetup - 2024",
			date: "2024-01-07",
			thumbnail: "/images/meetups/January2024ChapterMeetup.png",
			ticketLink: "#"
		},
		{
			title: "Laravel Live Jaipur - December Chapter Meetup - 2023",
			date: "2023-12-02",
			thumbnail: "/images/meetups/Dec2023ChapterMeetup.png",
			ticketLink: "#"
		},
		{
			title: "Laravel Live Jaipur - May Chapter Meetup - 2023",
			date: "2023-05-27",
			thumbnail: "/images/meetups/May2023ChapterMeetup.png",
			ticketLink: "#"
		}
	]

	return (
		<div>
			<Suspense fallback={<Loading />}>
				<section className='bg-white dark:bg-gray-900 p-4'>
					<div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 bg-center bg-cover bg-no-repeat py-20 gap-4 justify-center sm:justify-start'>
						{

meetups.map((record, index) => {
								return (
									<div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
										<Link href={record.ticketLink} target='_blank'>
											<Image
												src={record.thumbnail}
												className=''
												alt={record.title}
												width={380}
												height={200}
											/>
										</Link>
										<div className='p-5 px-2 py-3'>
											<Link href={record.ticketLink} target='_blank'>
												<div className='flex items-center flex-col sm:flex-row'>
													<figcaption className='text-center sm:w-[60px] w-full sm:block flex'>
														<span className='text-red-500 sm:mr-0 mr-2'>{dayjs(record.date).format('MMM')}</span>
														<span className='block text-black'>{dayjs(record.date).year()}</span>
													</figcaption>
													<h5 className='sm:text-md text-md font-bold tracking-tight text-gray-900 dark:text-white sm:w-[calc(100%_-_60px)] w-full'>
													{record.title}
													</h5>
												</div>
											</Link>
										</div>
									</div> 
								)
							})
						}
						
					</div>
				</section>
			</Suspense>
		</div>
	)
}

export default Meetups

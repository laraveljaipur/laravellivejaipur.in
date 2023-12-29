import Link from 'next/link'
import React, { Suspense } from 'react'
import Loading from '../loading'
import Image from 'next/image' 
export const metadata = {
	title: 'Meetups : Laravel Live Jaipur - Find your community',
	description: 'Meetups : Laravel Live Jaipur - Find your community in Jaipur',
}
const Meetups = () => {
	return (
		<div>
			<Suspense fallback={<Loading />}>
				<section className='bg-white dark:bg-gray-900 p-4'>
					<div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 bg-center bg-cover bg-no-repeat py-20 gap-4 justify-center sm:justify-start'>
						{

							new Array(1).fill({}).map((record, index) => {
								return (
									<div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
										<Link href='https://allevents.in/jaipur/laravel-live-jaipur-january-chapter-meetup-2024/80003104858673' target='_blank'>
											<Image
												src={'/images/meetups/JanuaryChapterMeetup.png'}
												className=''
												alt='LaravelJaipurJanuaryChapterMeetup'
												width={380}
												height={200}
											/>
										</Link>
										<div className='p-5 px-2 py-3'>
											<Link href='https://allevents.in/jaipur/laravel-live-jaipur-january-chapter-meetup-2024/80003104858673' target='_blank'>
												<div className='flex items-center flex-col sm:flex-row'>
													<figcaption className='text-center sm:w-[60px] w-full sm:block flex'>
														<span className='text-red-500 sm:mr-0 mr-2'>JAN</span>
														<span className='block text-black'>2024</span>
													</figcaption>
													<h5 className='sm:text-md text-md font-bold tracking-tight text-gray-900 dark:text-white sm:w-[calc(100%_-_60px)] w-full'>
													Laravel Live Jaipur - January Chapter Meetup - 2024
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

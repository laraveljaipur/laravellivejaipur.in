import Image from 'next/image'
import Link from 'next/link'
import { BsMic } from 'react-icons/bs'
import { FaHandsHelping } from "react-icons/fa";
import FirstMeetup from '../../public/images/first-meetup.jpg'
import Sponsors from "./components/Sponsors";
import React from 'react'
export const metadata = {
	title: 'Laravel Live Jaipur - Find your community',
	description: 'Laravel Live Jaipur - Find your community in Jaipur',
	keywords: ['Laravel Live Jaipur', ' Find your community in Jaipur', 'laravellivejaipur'],
	metadataBase: new URL('https://www.laravellivejaipur.in')
}

export default function Home() {

	const ticketsEnabled = true

	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='bg-clip-text max-w-2xl mb-4 text-3xl text-color-secondary font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>Laravel Live Jaipur</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						Laravel Jaipur Community is an open-source community based in Jaipur, India. It is dedicated to promoting and supporting the Laravel PHP framework, known for its elegant syntax
						and developer-friendly features. The community comprises passionate Laravel developers committed to sharing knowledge, expertise, and best practices in web
						development.
					</p>
					<div className='flex items-center flex-wrap tagline-mobile gap-3'>
						<Link
							href='/contact-us'
							className='mb-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
						>
							Register with community
							<svg className='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</Link>
						<a
							target='_blank'
							href='https://forms.gle/nQD17cMsDgVosqQP8'
							className='mb-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
						>
							Submit talk <BsMic />
						</a>
						<Link
							target='_blank'
							href='/contact-us'
							className='mb-4 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-color-secondary hover:bg-color-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
						>
							Sponsership? <FaHandsHelping />
						</Link>
					</div>
				</div>
				<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
					<Image className='rounded-md' src={FirstMeetup} alt='mockup' />
				</div>
			</div>
			{
				ticketsEnabled &&
				<div className='sm:bg-white bg-color-primary'>
					<div className='grid max-w-screen-xl px-4 py-8 mx-auto sm:w-70 '>
						{/* <h2 className='sm:text-black text-white mb-3'>April Chapter Meetups : <span className='sm:text-black text-color-secondary sm:inline block text-center'>Tickets Book now</span></h2> */}
						<iframe
							src='https://allevents.in/manage/tickets/book.php?event_id=80003195112855&auto_fill=1&platform=iframe&hide_details=1'
							style={{ width: '100%', height: '518px', border: '1px solid #efefef' }}
						></iframe>
						<span className='consent-text' style={{ fontSize: '12px' }}>
							Powered by <a target='_blank' href='https://allevents.in/manage/create.php?utm_source=booking-plugin&utm_campaign=21671497&utm_medium=plugin&utm_content=create'>
								<img src='https://cdn2.allevents.in/transup/a4/b7dd5e5fdb47708041855344e26645/logo-with-glow-1-.png' width='90' alt='AllEvents.in' />
							</a>
						</span>

					</div>
				</div>

			}

			<div>
				<Sponsors />
			</div>
		</section>
	)
}

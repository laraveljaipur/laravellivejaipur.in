import Image from 'next/image'
import Link from 'next/link'
import { BsMic } from 'react-icons/bs'
import FirstMeetup from '../../public/images/first-meetup.jpg'
import Sponsers from './components/Sponsers'
import React from 'react'
export const metadata = {
	title: 'Laravel Live Jaipur - Find your community',
	description: 'Laravel Live Jaipur - Find your community in Jaipur',
}

export default function Home() {
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='bg-clip-text max-w-2xl mb-4 text-4xl text-color-secondary font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>Laravel Live Jaipur</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						Laravel Jaipur Community is an open-source community based in Jaipur, India. It is dedicated to promoting and supporting the Laravel PHP framework, which is known for its elegant syntax
						and developer-friendly features. The community is comprised of passionate Laravel developers, who are committed to sharing knowledge, expertise, and best practices in the field of web
						development.
					</p>
					<a
						href='#'
						className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-color-secondary hover:bg-color-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
					>
						Register with community
						<svg className='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clip-rule='evenodd'
							></path>
						</svg>
					</a>
					<a
						target='_blank'
						href='https://forms.gle/nQD17cMsDgVosqQP8'
						className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
					>
						Submit talk <BsMic />
					</a>
				</div>
				<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
					<Image className='rounded-md' src={FirstMeetup} alt='mockup' />
				</div>
			</div>
			<div>
				<Sponsers />
			</div>
		</section>
	)
}

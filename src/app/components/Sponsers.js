import React from 'react'
import OctalItSolutionLogo from '../../../public/images/sponsers/octal-it-solution.svg'
import Image from 'next/image'
import Link from 'next/link'
const Sponsers = () => {
	return (
		<section class='bg-white dark:bg-gray-900'>
			<div class='py-8 lg:py-16 mx-auto max-w-screen-xl px-4'>
				<h2 class='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>Our proud sponsers</h2>
				<div class='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400'>
					<Link href='https://www.octalsoftware.com' target='_blank' class='flex justify-center items-center'>
						<Image src={OctalItSolutionLogo} />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Sponsers

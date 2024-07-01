'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import { RxTextAlignJustify, RxCross1 } from 'react-icons/rx'
import Link from 'next/link'
const Header = () => {
	const [showMobileMenus, setShowMobileMenus] = useState(false)
	const handleClick = () => {
		setShowMobileMenus(!showMobileMenus)
	}
	return (
		<header>
			<nav className=' flex justify-between items-center px-3'>
				<div className='w-40 py-2 font-bold text-3xl'>
					{/* <span className='text-color-secondary'>Laravellive</span>Jaipur. */}
					<Link
						href='/'>
						<Image src={Logo} alt="Laravel Live"/>
					</Link>
				</div>
				<div>
					<ul className='hidden lg:flex items-center space-x-20'>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<Link href='/'>Home</Link>
						</li>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<Link href='/meetups'>Meetups</Link>
						</li>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<Link href='/contact-us'>Contact US</Link>
						</li>
					</ul>
				</div>
				<div className='lg:hidden cursor-pointer z-50' onClick={handleClick}>
					{showMobileMenus && <RxCross1 />}
					{!showMobileMenus && <RxTextAlignJustify />}
				</div>
				<div className={classNames('bg-slate-800 h-[100vh] absolute inset-0', { hidden: !showMobileMenus })}>
					<ul className='h-full grid place-items-center py-5 border-b-2'>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<a href='/'>Home</a>
						</li>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<a href='/meetups'>Meetups</a>
						</li>
						<li className='hover:text-color-secondary font-medium ease-in duration-75'>
							<a href='/contact-us'>Contact Us</a>
						</li> 
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header

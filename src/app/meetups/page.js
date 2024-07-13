"use client"
import Link from 'next/link'
import React, { Suspense } from 'react'
import Loading from '../loading'
import Image from 'next/image' 
import dayjs from 'dayjs';
import AllEventsEmbed from '../components/AllEventsEmbed';
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
		<div className=''>
			<Suspense fallback={<Loading />}>
			<AllEventsEmbed />
			</Suspense>
		</div>
	)
}

export default Meetups

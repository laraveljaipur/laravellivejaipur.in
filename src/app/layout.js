import './globals.css'
import './media.css'
import { Inter } from 'next/font/google'
import Header from './components/Header' 
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Laravel Live Jaipur - Find your laravel community',
	description: 'Laravel Live Jaipur - Find your laravel community in Jaipur',
	keywords: ['Laravel Live Jaipur', 'Laravel Live in Jaipur', 'Manish Prajapati', 'Find your community in Jaipur', 'laravellivejaipur'],
	metadataBase: new URL('https://www.laravellivejaipur.in')
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={'container bg-color-primary tracking-wider text-white min-h-screen'}>
				<Header />
				<main className=''>{children}</main>
				<GoogleAnalytics gaId="G-HW1G0EHJXP" />
			</body>
		</html>
	)
}

import Head from 'next/head';
import { useState } from 'react';
import PortfolioProjects from '../components/PortfolioProjects';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Amitoj Singh</title>
				<meta name='description' content='My portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
				<section className='min-h-screen'>
					<Nav handleDarkModeChange={setDarkMode} darkMode={darkMode} />
					<Header />
				</section>
				<PortfolioProjects />
				<Skills />
				<Contact />
			</main>
		</div>
	);
}

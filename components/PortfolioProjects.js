import Image from 'next/image';
import fpeproect from '../public/fpeproject.png';
import guniproject from '../public/guniproject.png';
import mtasproject from '../public/mtasproject.png';
import netflixproject from '../public/netflixproject.png';

const PortfolioProjects = () => {
	return (
		<section className='py-10'>
			<div id='projectsContainer'>
				<h2 className='text-6xl text-center  py-1 dark:text-white text-teal-600 font-semibold dark:text-teal-400'>
					Projects 🧑‍💻
				</h2>
				<p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-200'>
					In my time as a web developer, I&apos;ve had the opportunity to work on a diverse range of
					web applications which includes developing dynamic
					<span className='text-teal-500'> banking</span> applications, efficient
					<span className='text-teal-500'> SaaS-based</span> web apps, engaging
					<span className='text-teal-500'> e-commerce</span> sites, and more. But what really drives
					me is developing web apps that tackle real-world problems and deliver meaningful
					solutions.
				</p>
			</div>
			<div className='flex flex-col gap-8 py-8 lg:flex-row lg:flex-wrap'>
				<div className='basis-1/3 flex-1'>
					<div>
						<a href='https://www.edgeverve.com/finacle/solutions/finacle-core-banking-solution/' target="_blank" rel="noopener noreferrer" className='text-lg text-center text-teal-600 font-semibold dark:text-teal-400 py-1 mb-2 block underline'>
							Finacle Payment Suite
						</a>
						<Image
							className='rounded-lg'
							width={'100%'}
							height={'63%'}
							layout='responsive'
							alt='finacle payment engine screenshot'
							src={fpeproect}
						/>
					</div>
				</div>
				<div className='basis-1/3 flex-1'>
					<a href='https://www.gunisms.com.au/' target="_blank" rel="noopener noreferrer" className='text-lg text-center text-teal-600 font-semibold dark:text-teal-400 py-1 mb-2 block underline'>
						GuniSMS
					</a>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'63%'}
						layout='responsive'
						alt='gunisms screenshot'
						src={guniproject}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<a href='https://www.mtas.io/' target="_blank" rel="noopener noreferrer" className='text-lg text-center text-teal-600 font-semibold dark:text-teal-400 py-1 mb-2 block underline'>
						MTAS
					</a>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'63%'}
						layout='responsive'
						alt='mtas automation screenshot'
						src={mtasproject}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<a href='#' target="_blank" rel="noopener noreferrer" className='text-lg text-center text-teal-600 font-semibold dark:text-teal-400 py-1 mb-2 block underline'>
						Netflix Clone
					</a>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'63%'}
						layout='responsive'
						alt='netflix clone screenshot'
						src={netflixproject}
					/>
				</div>
			</div>
		</section>
	);
};

export default PortfolioProjects;

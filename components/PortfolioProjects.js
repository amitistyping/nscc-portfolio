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
					In my time as a web developer, I've had the opportunity to work on a diverse range of web
					applications which includes developing dynamic
					<span className='text-teal-500'> banking</span> applications, efficient
					<span className='text-teal-500'> SaaS-based</span> web apps, engaging
					<span className='text-teal-500'> e-commerce</span> sites, and more. But what really drives
					me is developing web apps that tackle real-world problems and deliver meaningful
					solutions.
				</p>
			</div>
			<div className='flex flex-col gap-8 py-8 lg:flex-row lg:flex-wrap'>
				<div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'64%'}
						layout='responsive'
						alt='finacle payment engine screenshot'
						src={fpeproect}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'64%'}
						layout='responsive'
						alt='gunisms screenshot'
						src={guniproject}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'64%'}
						layout='responsive'
						alt='mtas automation screenshot'
						src={mtasproject}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg'
						width={'100%'}
						height={'64%'}
						layout='responsive'
						alt='netflix clone screenshot'
						src={netflixproject}
					/>
				</div>
				{/* <div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg object-cover'
						width={'100%'}
						height={'100%'}
						layout='responsive'
						src={netflixproject}
					/>
				</div>
				<div className='basis-1/3 flex-1'>
					<Image
						className='rounded-lg object-cover'
						width={'100%'}
						height={'100%'}
						layout='responsive'
						src={web6}
					/>
				</div> */}
			</div>
		</section>
	);
};

export default PortfolioProjects;

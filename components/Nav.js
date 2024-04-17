import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';

const Nav = ({ handleDarkModeChange, darkMode }) => {
	return (
		<nav className='py-5 mb-12 flex justify-between items-center px-4 md:py-10 md:px-0 dark:text-white'>
			<h1 className='text-2xl md:text-4xl font-semibold'>Amitoj Singh</h1>
			<ul className='flex items-center text-sm md:text-base'>
				<li>
					<a className='mr-4 md:mr-8' href='#projectsContainer'>
						Projects
					</a>
				</li>
				<li>
					<a className='mr-4 md:mr-8' href='#skillsContainer'>
						Skills
					</a>
				</li>
				<li>
					<a className='mr-4 md:mr-8' href='#contactContainer'>
						Contact
					</a>
				</li>
				<li>
					<a
						className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 md:px-4 md:py-3 border-none rounded-md mr-4 md:mr-8'
						href='https://amitistyping.github.io/resumepdf/amitresumeletter.pdf'
						target='_blank'
						rel='noopener noreferrer'
					>
						Resume <AiOutlineDownload className='inline' />
					</a>
				</li>
				<li>
					<BsFillMoonStarsFill onClick={() => handleDarkModeChange(!darkMode)} className='cursor-pointer text-xl md:text-2xl' />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

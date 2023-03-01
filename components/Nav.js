import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';

const Nav = ({ handleDarkModeChange, darkMode }) => {
	return (
		<nav className='py-10 mb-12 flex justify-between dark:text-white'>
			<h1 className='text-4xl font-semibold'>Amitoj Singh</h1>
			<ul className='flex items-center'>
				<li>
					<a className='text-lg text-gray-900 dark:text-gray-300 mr-8' href='#projectsContainer'>
						Projects
					</a>
				</li>
				<li>
					<a className='text-lg text-gray-900 dark:text-gray-300 mr-8' href='#skillsContainer'>
						Skills
					</a>
				</li>
				<li>
					<a className='text-lg text-gray-900 dark:text-gray-300 mr-8' href='#contactContainer'>
						Contact
					</a>
				</li>
				<li>
					<a
						className='text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-3 border-none rounded-md mr-8'
						href='https://amitistyping.github.io/resumepdf/amitresumeletter.pdf'
                        target="_blank" rel="noopener noreferrer"
					>
						Resume <AiOutlineDownload className='inline' />
					</a>
				</li>
				<li>
					<BsFillMoonStarsFill
						onClick={() => handleDarkModeChange(!darkMode)}
						className=' cursor-pointer text-2xl'
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

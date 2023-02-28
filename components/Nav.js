import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Nav = ({ handleDarkModeChange, darkMode }) => {
	return (
		<nav className='py-10 mb-12 flex justify-between dark:text-white'>
			<h1 className='text-3xl font-semibold'>Amitoj Singh</h1>
			<ul className='flex items-center'>
				<li>
					<a className='text-white mr-8' href='#'>
						Projects
					</a>
				</li>
				<li>
					<a className='text-white mr-8' href='#'>
						Skills
					</a>
				</li>
				<li>
					<a className='text-white mr-8' href='#'>
						Contact
					</a>
				</li>
				<li>
					<a
						className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md mr-8'
						href='#'
					>
						Resume
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

import React from 'react';
import Image from 'next/image';
import softwareDev from '../public/softwareDev.png';
import { AiOutlineDownload } from 'react-icons/ai';

const Header = () => {
	return (
		<div className='flex justify-center items-center'>
			<div id='introductionContainer' className='w-4/6'>
				<h2 className='text-7xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-8xl'>
					Hi, I am Amit<span className='wave'>👋</span>
				</h2>
				<p className='text-lg py-2 leading-8 text-gray-900 dark:text-gray-300'>
					I&apos;m a junior web developer with almost 2 years of experience developing web apps for the
					banking and SaaS industries. Right now, I&apos;m super excited to be pursuing the Full Stack
					Application Development program at NSCC IT Campus in Halifax to keep growing my skills. So
					take a look around, and if you have any questions, feel free to drop me a line!
				</p>
				<div className='mt-5'>
					<a
						className='text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-3 border-none rounded-md mr-3'
						href='#contactContainer'
					>
						Contact📮
					</a>
					<a
						className='text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-3 border-none rounded-md'
						href='#'
					>
						Resume <AiOutlineDownload className='inline' />
					</a>
				</div>
			</div>
			<div id='imageContainer' className='w-2/6'>
				<Image src={softwareDev} alt="developer clip art" />
			</div>
		</div>
	);
};

export default Header;

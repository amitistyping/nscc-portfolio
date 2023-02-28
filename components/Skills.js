import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Skills = () => {
	return (
		<section className='py-10'>
			<div>
				<h2 className='text-6xl text-center  py-1 dark:text-white text-teal-600 font-semibold dark:text-teal-400 mb-5'>
					Skills🤹
				</h2>
				<div id='skillsContainer' className='flex justify-between space-x-12'>
					<div
						id='frontEndSkills'
						className='flex flex-col flex-1 justify-start items-start px-10 py-12 bg-slate-100 rounded-md'
					>
						<h1 className='text-2xl font-semibold mb-4 self-center'>Frontend</h1>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							HTML/CSS
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							Tailwind/BootStrap/AntDesign
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							JavaScript
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							React (Redux, MobX)
						</p>
						<p>
							<FaCheck className='inline text-teal-600 mr-2' />
							Angular
						</p>
					</div>
					<div
						id='backEndSkills'
						className='flex flex-col flex-1 justify-start items-start px-10 py-12 bg-slate-100 rounded-md'
					>
						<h1 className='text-2xl font-semibold mb-4 self-center'>Backend</h1>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							JavaScript/C#
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							Node.js/Express
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							.NET Core/.NET MVC
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							MongoDB/Mongoose
						</p>
						<p>
							<FaCheck className='inline text-teal-600 mr-2' />
							SQL/Entity Framework Core
						</p>
					</div>
					<div
						id='OtherSkills'
						className='flex flex-col flex-1 justify-start items-start px-10 py-12 bg-slate-100 rounded-md'
					>
						<h1 className='text-2xl font-semibold mb-4 self-center'>Others</h1>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							Node-Red/LoopBack
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							Microsoft Azure
						</p>
						<p className='mb-1'>
							<FaCheck className='inline text-teal-600 mr-2' />
							Version control - Git
						</p>
						<p>
							<FaCheck className='inline text-teal-600 mr-2' />
							Bull Queue/rabbitMQ
						</p>
					</div>
				</div>
				
			</div>
		</section>
	);
};

export default Skills;

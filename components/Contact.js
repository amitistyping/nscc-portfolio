import React from 'react';

const Contact = () => {
	return (
		<section className='py-10'>
			<div id='contactContainer'>
				<h2 className='text-5xl text-center py-1 dark:text-white text-teal-600 font-semibold dark:text-teal-400'>
					Contact me📮
				</h2>
				<p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-200'>
                    If you want to get in touch with me, please{' '}
					<a href='mailto:amitoj.dev@gmail.com' target="_blank" rel="noopener noreferrer" className='text-teal-600'>click here</a> to send me an email. You can checkout my{' '}
					<a href='https://www.linkedin.com/in/amitcodes/' target="_blank" rel="noopener noreferrer" className='text-teal-600'>LinkedIn</a> and{' '}
					<a href='https://github.com/amitistyping' target="_blank" rel="noopener noreferrer" className='text-teal-600'>Github</a> as well. I am currently living in Halifax, Nova Scotia.
				</p>
			</div>
		</section>
	);
};

export default Contact;

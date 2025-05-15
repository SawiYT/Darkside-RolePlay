import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='bg-[#0e0d0d] text-white py-20 px-6 lg:px-20'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Left Section: Logo and Copyright */}
				<div className='flex flex-col items-center lg:items-start'>
					<img className='h-32 mb-4' src='/logo2.png' alt='Logo' />
					<h2 className='text-2xl font-bold uppercase text-center lg:text-left'>
						COPYRIGHT {currentYear} AmazingDev.PL
					</h2>
					<p className='mt-4 text-sm opacity-80 text-center lg:text-left max-w-md'>
						This project is not affiliated with or endorsed by Rockstar North, Take-Two Interactive, or any other
						rightsholders. All trademarks belong to their respective owners.
					</p>
				</div>

				{/* Right Section: Contact and Links */}
				<div className='flex flex-col items-center lg:items-start'>
					<p className='text-2xl font-bold uppercase underline decoration-[#f92763] underline-offset-4 mb-4'>
						Contact & Info
					</p>
					<ul className='space-y-2 text-lg'>
						<li>
							<span className='font-semibold'>Email:</span>{' '}
							<a href='mailto:contact@darkside.pl' className='text-[#f92763] hover:underline'>
								contact@darkside.pl
							</a>
						</li>
						<li>
							<span className='font-semibold'>Forum:</span>{' '}
							<a href='https://forum-darkside.pl' className='text-[#f92763] hover:underline'>
								forum-darkside.pl
							</a>
						</li>
					</ul>

					<p className='mt-10 text-sm opacity-80 max-w-md text-center lg:text-left'>
						This server is built by the community, for the community. We are independent developers and do not represent
						any official game publisher or platform.
					</p>

					<p className='mt-6 text-md font-bold uppercase font-raleway'>
						Created by <span className='text-[#f92763]'>ValeryR</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

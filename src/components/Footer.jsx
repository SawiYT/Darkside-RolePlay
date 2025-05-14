import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='flex justify-center items-center text-white bg-[#0e0d0d] h-auto lg:h-60'>
			<div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20'>
				<div className='flex justify-center items-center flex-col'>
					<img className='h-32' src='/logo2.png' alt='Logo' />
					<h2 className='text-white text-lg font-bold uppercase  lg:text-xl text-center mt-2'>
						COPYRIGHT {currentYear} AmazingDev.PL
					</h2>
				</div>
				<div className='flex flex-col items-center lg:items-start'>
					<p className='text-xl lg:text-3xl underline pb- lg:pb-4 font-bold uppercase font-raleway decoration-[#f92763] underline-offset-[5px]'>
						Useful Links
					</p>

					<div className='flex flex-col lg:flex-row gap-2 font-raleway lg:gap-3 pb-2'>
						<a className='border-l-4 border-[#f92763] font-bold uppercase  pl-2 lg:pl-3' href=''>
							Home
						</a>
						<a className='border-l-4 border-[#f92763] font-bold uppercase  pl-2 lg:pl-3' href=''>
							Terms of Service
						</a>
						<a className='border-l-4 border-[#f92763] font-bold uppercase pl-2 lg:pl-3' href=''>
							Privacy Policy
						</a>
						<a className='border-l-4 border-[#f92763] font-bold uppercase  pl-2 lg:pl-3' href=''>
							FAQ
						</a>
					</div>

					<div className='text-center pt-8 lg:pt-0 lg:text-left'>
						<p>
							PL - Serwer amazingdev.pl nie jest w żaden sposób powiązany z firmą Rockstar Games, Take-Two Interactive
							ani z platformą FiveM.
						</p>
						<p>
							EN - The amazingdev.pl server is not associated with Rockstar Games, Take-Two Interactive, or the FiveM
							platform in any way.
						</p>

						<p className='pt-2 lg:pt-4 font-bold uppercase font-raleway'>
							Created by <span className='text-[#f92763]'>ValeryR</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

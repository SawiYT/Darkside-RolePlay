import React, { useState, useEffect } from 'react';
import { HomeIcon, ShopIcon, InfoIcon } from '../config/config';
import NavElement from './NavElement';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const [navbarOpacity, setNavbarOpacity] = useState(0); // Stan dla przezroczystości navbaru

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			// Ustawienie aktywnej sekcji
			if (
				scrollPosition >= document.querySelector('#about')?.offsetTop - 100 &&
				scrollPosition < document.querySelector('#info')?.offsetTop - 100
			) {
				setActiveSection('#about');
			} else if (scrollPosition >= document.querySelector('#info')?.offsetTop - 100) {
				setActiveSection('#info');
			} else {
				setActiveSection('#home');
			}

			// Ustawienie przezroczystości navbaru po przewinięciu 100vh
			if (scrollPosition > window.innerHeight) {
				setNavbarOpacity(0.8); // Przezroczystość po przewinięciu
			} else {
				setNavbarOpacity(0); // Brak przezroczystości u góry strony
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Call on mount to set the initial state
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className='fixed top-0 left-0 w-full z-50' style={{ transition: 'background-color 0.3s ease' }}>
			{/* Tło navbaru z dynamiczną przezroczystością */}
			<div
				className='relative w-full mx-auto flex justify-between items-center p-4'
				style={{
					backgroundColor: `rgba(0, 0, 0, ${navbarOpacity})`, // Dynamically change background opacity
				}}>
				<button className='lg:hidden text-white p-2' onClick={toggleMenu}>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
					</svg>
				</button>
				<div className='flex justify-between mx-auto max-w-7xl items-center w-full'>
					<div className='hidden lg:flex justify-between items-center'>
						<p className='relative flex flex-col leading-tight font-bold uppercase font-raleway mx-3 text-center text-pink-400 text-2xl'>
							<span className='tracking-wide font-black'>Darkside</span>
							<span className='text-white text-lg tracking-widest -mt-1'>RolePlay</span>
						</p>
					</div>

					<div className='hidden lg:flex justify-between items-center'>
						<NavElement content={'Home'} scrollToId={'#home'} active={activeSection === '#home'} />
						<NavElement content={'about'} scrollToId={'#about'} active={activeSection === '#about'} />
						<NavElement content={'Info'} scrollToId={'#info'} active={activeSection === '#info'} />
					</div>
				</div>

				{/* Przycisk menu w wersji mobilnej */}
				<div className={`lg:hidden fixed top-0 left-0 w-full h-full z-40 ${menuOpen ? 'block' : 'hidden'}`}>
					{/* Tło przyciemnione podczas otwartego menu */}
					<div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' onClick={toggleMenu}></div>
					<div className='flex flex-col items-center justify-center h-full z-50'>
						<NavElement
							icon={<ShopIcon width={60} height={60} />}
							content={'about'}
							closeMenu={toggleMenu}
							scrollToId={'#about'}
						/>
						<NavElement
							icon={<HomeIcon width={60} height={60} />}
							content={'Home'}
							closeMenu={toggleMenu}
							scrollToId={'#home'}
							main={true}
						/>
						<NavElement
							icon={<InfoIcon width={60} height={60} />}
							content={'Info'}
							closeMenu={toggleMenu}
							scrollToId={'#info'}
						/>
					</div>
					<button className='absolute top-4 right-4 text-white text-3xl' onClick={toggleMenu}>
						<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

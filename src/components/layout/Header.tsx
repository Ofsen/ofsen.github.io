import React from 'react';
import Nav from './Nav';

const Header: React.FC = () => {
	return (
		<header>
			<div className='text-center my-3r'>
				<p className='text-1r mb-m-0.8 text-electric font-bold'>Welcome to</p>
				<h1 className='relative font-josefin text-4r inline'>
					Ofsen's
					<span className='absolute right-m-0.8 bottom-m-2 font-allison text-red-light text-5r abyss'>Abyss</span>
				</h1>
			</div>
			<Nav />
		</header>
	);
};

export default Header;

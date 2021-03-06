import React from 'react';
// CSS
import '../../assets/css/header.css';
// Compoenents
import Nav from './Nav';

const Header = () => {
	return (
		<header id='#home'>
			<div className='Logo'>
				<h1>Ofsen's Abyss</h1>
			</div>
			<Nav />
		</header>
	);
};

export default Header;

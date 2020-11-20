import React from 'react';
// CSS
import './style.css';

const Nav = () => {
	return (
		<nav className='Nav'>
			<ul>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#stuff'>Stuff</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

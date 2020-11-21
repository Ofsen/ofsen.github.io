import React from 'react';
// Components
import { Link } from 'react-router-dom';
// CSS
import '../../assets/css/nav.css';

const Nav = () => {
	return (
		<nav className='Nav'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/stuff'>Stuff</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
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

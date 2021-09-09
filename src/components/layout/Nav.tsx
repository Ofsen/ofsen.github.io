import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Nav: React.FC<Props> = () => {
	return (
		<ul className='nav font-semibold inline-flex justify-center w-full'>
			<li>
				<Link to='/' className='active'>
					Home
				</Link>
			</li>
			<li>
				<Link to='/illustrations'>Illustrations</Link>
			</li>
			<li>
				<Link to='/code'>Code</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
			<li>
				<Link to='/peepeepoopoo' className='text-red-dark'>
					NotFound
				</Link>
			</li>
		</ul>
	);
};

export default Nav;

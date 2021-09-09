import React from 'react';

interface Props {}

const NotFound: React.FC<Props> = () => {
	return (
		<div className='container grid place-items-center m-auto h-full'>
			<div className='my-auto flex justify-center h-auto items-baseline text-9xl font-bold '>
				<h1 className='text-red-dark'>ERROR</h1>
				<h1>\\</h1>
				<h1 className='text-red-dark'>404</h1>
				<p className='text-sm font-normal'>Not Found.</p>
			</div>
		</div>
	);
};

export default NotFound;

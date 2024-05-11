import React from 'react';
import './Banner.scss'

function Banner({ title, backgroundSrc }) {
	return (
		<div className='banner'>
			<p className='banner__title'>{title}</p>
			<div className='banner__background'></div>
			<img src={backgroundSrc} alt="banner" className='banner__picture' />
		</div>
	);
};

export default Banner
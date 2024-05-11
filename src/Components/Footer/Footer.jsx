
import React from 'react';
import './Footer.scss';
import logo from '../../Assets/Pictures/footer-logo.svg';


function Footer() {

	return (
		<footer className='footer'>
			<img src={logo} alt="logo" className='footer__logo' />
			<p className='footer__text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
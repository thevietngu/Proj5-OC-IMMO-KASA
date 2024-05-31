import React, { useEffect, useRef, useState } from 'react';
import './Collapse.scss';
import collapseArrow from '../../Assets/Pictures/arrow_up.png';

function Collapse({ title, content }) {
	const [active, setActive] = useState(false);
	const collapseRef = useRef(null);

	const handleToggle = () => {
		setActive(prevActive => !prevActive);
	};

	useEffect(() => {
		const element = collapseRef.current;
		if (element) {
			element.addEventListener('click', handleToggle);
		}
		return () => {
			if (element) {
				element.removeEventListener('click', handleToggle);
			}
		};
	}, []);

	return (
		<div className={`collapse ${active && 'active'}`}>
			<div className='collapse__title'>
				{title}
				<img
					ref={collapseRef}
					className="collapse__icon"
					src={collapseArrow}
					alt='collapse arrow'
				/>
			</div>
			<div className="collapse__content">
				{content}
			</div>
		</div>
	);
};

export default Collapse;

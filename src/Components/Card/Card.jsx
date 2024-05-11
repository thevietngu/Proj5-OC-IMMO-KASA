
import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';


function Card({ id, title, cover }) {

	return (
		<Link to={`/logement/${id}`} className='card'>
			<h3 className='card__title'>{title}</h3>
			<img className='card__picture' src={cover} alt={title} />
		</Link>
	);
};


export default Card
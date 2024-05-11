
import './Error.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ErrorPage() {

	return (
		<div className="ErrorPage">
			<h1 className='ErrorPage__title'>404</h1>
			<p className='ErrorPage__infos'>Oups! La page que vous recherchez n'existe pas.</p>
			<Link to="/" className='ErrorPage__redirection'>Retourner sur la page d'accueil</Link>
		</div>);
};

export default ErrorPage

import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from 'axios';

//default header auth token
axios.defaults.headers.common['X-Auth-Token'] = '1396067cb9b04bb8ae72da3196bae9af';

import {Header} from './Header';

export const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<link rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"/>
			</Head>
			<Header/>
			<div className="container">
				{props.children}
			</div>
		</div>
	)
};
Layout.defaultProps = {
	title: 'Футбольная статистика клубов'
};
Layout.propTypes = {
	title: PropTypes.string.isRequired
};
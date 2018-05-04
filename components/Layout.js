import Head from 'next/head';
import PropTypes from 'prop-types';

export const Layout = (props) => {
	return(
		<div>
			<Head>
				<title>{props.title}</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" />
			</Head>
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
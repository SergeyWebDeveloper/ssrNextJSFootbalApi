import Link from 'next/link'

export const Header = () => {
	return (
		<nav style={{padding: '0 15px',marginBottom: '25px'}}>
			<div className="nav-wrapper">
				<Link href='/'>
					<a className="brand-logo">
						<img
							src='https://d30y9cdsu7xlg0.cloudfront.net/png/114428-200.png'
							alt="Logo"
							width='65'
						/>
					</a>
				</Link>
			</div>
		</nav>
	)
};

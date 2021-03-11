import React from 'react';
import NavTop from './NavTop';
import Sidebar from './Sidebar';
import Home from './Home';
import Footer from './Footer';

export default function App() {
	return (
		<div
			style={{
				height: '100vh',
				backgroundColor: '#04070C',
			}}
		>
			<NavTop />
			<div
				className="d-flex flex-row"
				style={{
					height: '100%',
				}}
			>
				<Sidebar />

				<div className="d-flex flex-column" style={{ width: '76%' }}>
					<Home />
					<Footer />
				</div>
			</div>
		</div>
	);
}

// Navbar
// Sidebar Nav
// Dashboard
// Footer

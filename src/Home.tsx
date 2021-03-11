import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
	return (
		<div style={{ height: '70%', backgroundColor: 'black' }}>
			<Jumbotron
				className="m-4 pt-4 pb-4"
				style={{
					width: '60%',
					backgroundColor: '#090D11',
					border: '1px solid #29333B',
				}}
			>
				<h4 style={{ color: 'white' }}>
					Discover interesting projects and people to populate your personal
					news feed.
				</h4>
				<p className="text-muted">
					Your news feed helps you keep up with recent activity on repositories
					you <span style={{ color: '#00A7FF' }}>watch</span> and people you{' '}
					<span style={{ color: '#00A7FF' }}>follow</span>.
				</p>
				<Button
					variant="outline-primary"
					style={{
						backgroundColor: '#192129',
						borderColor: '#29333B',
						fontSize: '0.8rem',
						fontWeight: 'bolder',
						color: '#00A7FF',
					}}
				>
					Explore Github
				</Button>
			</Jumbotron>
			<div className="text-muted ml-4" style={{ fontSize: '0.8rem' }}>
				<span>
					<strong>ProTip!</strong> The feed shows you events from people you{' '}
					<span style={{ color: '#00A7FF' }}>follow</span> and repositories you{' '}
					<span style={{ color: '#00A7FF' }}>watch</span>.
				</span>
				<br />
				<span className="mt-4">Subscribe to your news feed</span>
			</div>
		</div>
	);
}

import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Sidebar() {
	return (
		<div
			style={{
				width: '24%',
				height: '100%',
				borderRight: '1px solid #192129',
				background: '#090D11',
			}}
			className="d-flex flex-column p-4"
		>
			<div className="d-flex flex-row align-items-end mb-2">
				<span>Repositories</span>
				<Button variant="success" className="ml-auto" size="sm">
					New
				</Button>
			</div>
			<Form>
				<Form.Control
					placeholder="Find a repository..."
					style={{ backgroundColor: '#090D11', border: '1px solid #192129' }}
				/>
			</Form>
			<ul
				style={{
					listStyle: 'none',
					paddingLeft: '20px',
					margin: '0',
					color: '#00A7FF',
				}}
			>
				<li className="mt-1">saubun/saubuny-reddit</li>
				<li className="mt-1">saubun/egg-bot</li>
				<li className="mt-1">saubun/egg-chat</li>
				<li className="mt-1">saubun/spacex-launches</li>
				<li className="mt-1">saubun/pythonAtom</li>
				<li className="mt-1">saubun/ChatCord</li>
				<li className="mt-1">saubun/egg-board</li>
			</ul>
			<p className="text-muted">show more</p>
			<div
				style={{ borderBottom: '1px solid #192129', width: '100%' }}
				className="mb-3"
			></div>
			<p style={{ fontSize: '1.1rem', textAlign: 'left' }} className="mb-0">
				Working with a team?
			</p>
			<p className="text-muted">
				GitHub is built for collaboration. Set up an organization to improve the
				way your team works together, and get access to more features.{' '}
			</p>
		</div>
	);
}

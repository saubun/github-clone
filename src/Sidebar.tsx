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
				<span style={{ color: 'white' }}>Repositories</span>
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
			<div
				style={{
					color: '#00A7FF',
					fontWeight: 'bolder',
					fontSize: '0.9rem',
				}}
				className="m-0 ml-4"
			>
				<div className="mt-1">saubun/saubuny-reddit</div>
				<div className="mt-1">saubun/egg-bot</div>
				<div className="mt-1">saubun/egg-chat</div>
				<div className="mt-1">saubun/spacex-launches</div>
				<div className="mt-1">saubun/pythonAtom</div>
				<div className="mt-1">saubun/ChatCord</div>
				<div className="mt-1">saubun/egg-board</div>
			</div>
			<p className="text-muted mt-3" style={{ fontSize: '0.8rem' }}>
				show more
			</p>
			<div
				style={{ borderBottom: '1px solid #192129', width: '100%' }}
				className="mb-3"
			></div>
			<p
				style={{ fontSize: '1rem', textAlign: 'left', color: 'white' }}
				className="mb-0"
			>
				Working with a team?
			</p>
			<p className="text-muted">
				GitHub is built for collaboration. Set up an organization to improve the
				way your team works together, and get access to more features.{' '}
			</p>
			<Button
				variant="outline-primary"
				style={{
					backgroundColor: '#192129',
					width: '60%',
					borderColor: '#29333B',
					fontSize: '0.8rem',
					fontWeight: 'bolder',
					color: '#00A7FF',
				}}
			>
				Create an organization
			</Button>
		</div>
	);
}

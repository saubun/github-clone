import React from 'react';
import { Form, Nav, Navbar, InputGroup, Button } from 'react-bootstrap';

export default function NavTop() {
	return (
		<Navbar variant="dark" expand="lg" style={{ backgroundColor: '#0F141D' }}>
			<Navbar.Brand>
				<div
					style={{ height: '32px', width: '32px', backgroundColor: 'white' }}
					className="d-flex justify-content-center align-items-center flex-column ml-3 mr-2"
				>
					<div
						style={{ height: '16px', width: '16px', backgroundColor: 'black' }}
					></div>
				</div>
			</Navbar.Brand>
			<Form inline>
				<InputGroup>
					<Form.Control
						style={{ backgroundColor: '#090D11', border: '1px solid #192129' }}
						placeholder="Search or jump to..."
					/>
					<InputGroup.Append>
						<Button
							type="submit"
							style={{
								backgroundColor: '#090D11',
								border: '1px solid #192129',
							}}
						>
							/
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
			<Nav className="mr-auto">
				<Nav.Link>Pull Requests</Nav.Link>
				<Nav.Link>Issues</Nav.Link>
				<Nav.Link>Marketplace</Nav.Link>
				<Nav.Link>Explore</Nav.Link>
			</Nav>

			{/* Notification bell */}
			<div
				style={{ height: '20px', width: '20px', backgroundColor: 'white' }}
				className="mr-4 d-flex justify-content-center align-items-center flex-column"
			>
				<div
					style={{ height: '10px', width: '10px', backgroundColor: 'black' }}
				></div>
			</div>

			{/* Plus sign */}
			<div
				style={{ height: '20px', width: '4px', backgroundColor: 'white' }}
				className="mr-4 d-flex justify-content-center align-items-center flex-column"
			>
				<div
					style={{ height: '4px', width: '20px', backgroundColor: 'white' }}
				></div>
			</div>

			{/* Profile picture */}
			<div
				style={{
					height: '20px',
					width: '20px',
					backgroundColor: 'white',
					borderRadius: '1rem',
				}}
				className="mr-4"
			></div>
		</Navbar>
	);
}

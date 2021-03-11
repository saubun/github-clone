import React from 'react';

export default function Footer() {
	return (
		<div
			style={{
				height: '30%',
				backgroundColor: 'black',
				width: '100%',
				fontSize: '0.75rem',
			}}
			className="p-4"
		>
			<div className="d-flex flex-row justify-content-between">
				<p className="text-muted">© 2021 GitHub, Inc. </p>
				<div />
				<div className="d-flex flex-row">
					<div className="mr-5 pr-5">
						<div className="text-muted mb-2">Blog</div>
						<div className="text-muted mb-2">About</div>
						<div className="text-muted mb-2">Shop</div>
						<div className="text-muted">Contact</div>
						<div className="text-muted mb-2">Github</div>
						<div className="text-muted mb-2">Pricing</div>
					</div>
					<div className="mr-5 pr-5">
						<div className="text-muted mb-2">API</div>
						<div className="text-muted mb-2">Training</div>
						<div className="text-muted mb-2">Status</div>
						<div className="text-muted mb-2">Security</div>
					</div>
					<div className="mr-5 pr-5">
						<div className="text-muted mb-2">Terms</div>
						<div className="text-muted mb-2">Privacy</div>
						<div className="text-muted mb-2">Docs</div>
					</div>
				</div>
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}

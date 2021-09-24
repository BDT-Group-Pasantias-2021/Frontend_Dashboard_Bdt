import React from 'react';

// Components

export default function StatsCounter() {
	return (
		<div className="graficos-ind col-12 col-md-6">
			<div className="graph-container">
				<div className="graph-content">
					<div className="login-counter-container">
						<div className="standard-section-title">Cantidad de accesos</div>
						<div className="login-container">
							<div className="login-counter">5</div>
							<div className="counter-text">
								accesos entre <span>...</span> y <span>...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

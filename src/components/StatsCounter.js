import React from 'react';

// Components

export default function StatsCounter({ dateInterval }) {
	// formatear dateInterval.fechaInicio y dateInterval.fechaFin
	const fechaInicio = new Date(dateInterval.fechaInicio);
	const fechaFin = new Date(dateInterval.fechaFin);
	const fechaInicioFormateada = `${fechaInicio.getDate() + 1}/${
		fechaInicio.getMonth() + 1
	}/${fechaInicio.getFullYear()}`;
	const fechaFinFormateada = `${fechaFin.getDate() + 1}/${fechaFin.getMonth() + 1}/${fechaFin.getFullYear()}`;

	return (
		<div className="graficos-ind col-12 col-md-6">
			<div className="graph-container">
				<div className="graph-content">
					<div className="login-counter-container">
						<div className="standard-section-title">Cantidad de accesos</div>
						<div className="login-container">
							{dateInterval == {""} ? (
								<>
									<div className="login-counter">5</div>
									<div className="counter-text">
										accesos entre <span>{fechaInicioFormateada}</span> y{' '}
										<span>{fechaFinFormateada}</span>
									</div>
								</>
							) : (
								<div className="counter-text">Seleccione un intervalo de fechas</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

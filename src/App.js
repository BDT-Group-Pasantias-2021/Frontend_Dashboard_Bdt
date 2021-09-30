/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Componentes
import BarGraph from './components/BarGraph';
import StatsCounter from './components/StatsCounter';
import ExcelIcon from './assets/excel.png';
import Filter from './components/Filter';

// Styles
import './css/inicio.css';

// Values

export default function App() {
	const [dateInterval, setDateInterval] = useState({});

	const [infoPorcentajes, setInfoPorcentajes] = useState(null);
	const [cuadroInformativo, setCuadroInformativo] = useState(null);

	return (
		<main className="admin">
			<div className="admin-sections">
				<div className="graphs row">
					<h1 className="section-title col-12">Dashboard</h1>
					<StatsCounter dateInterval={dateInterval} />
					<div className="graficos-ind col-12 col-md-6">
						<Filter
							setDateInterval={setDateInterval}
							setCuadroInformativo={setCuadroInformativo}
							setInfoPorcentajes={setInfoPorcentajes}
						/>
						<div className="mid-section-row col-12">
							<div className="export-container-container">
								<div className="export-container">
									<img src={ExcelIcon} alt="" className="excel-icon" />
									<div className="section-container excel-btn">Exportar a Excel</div>
								</div>
							</div>
						</div>
					</div>
					<BarGraph titleText="Información general de accesos" />
					<BarGraph titleText="Cantidad de accesos a Email/Sms" />
				</div>
			</div>
		</main>
	);
}

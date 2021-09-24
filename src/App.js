import React from 'react';

// Componentes
import BarGraph from './components/BarGraph';
import StatsCounter from './components/StatsCounter';
import ExcelIcon from './assets/excel.png';
import Filter from './components/Filter';

// Styles
import './css/inicio.css';

// Values
/* const categories: {
	[
		'Login',
		'Canada',
		'United Kingdom',
		'Netherlands',
		'Italy',
		'France',
		'Japan',
		'United States',
		'China',
		'Germany',
	]
} */

export default function App() {
	return (
		<main className="admin">
			<div className="admin-sections">
				<div className="graphs row">
					<h1 className="section-title col-12">Dashboard</h1>
					<StatsCounter />
					<div className="graficos-ind col-12 col-md-6">
						<Filter />
						<div className="mid-section-row col-12">
							<div className="export-container-container">
								<div className="export-container">
									<img src={ExcelIcon} alt="" className="excel-icon" />
									<div className="section-container excel-btn">Exportar a Excel</div>
								</div>
							</div>
						</div>
					</div>
					<BarGraph />
					<BarGraph />
				</div>
			</div>
		</main>
	);
}

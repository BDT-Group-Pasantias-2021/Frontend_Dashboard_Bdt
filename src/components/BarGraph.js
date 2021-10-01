import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function BarGraph({ titleText, object }) {
	const [categories, setCategories] = useState([]);
	const [data, setData] = useState([]);

	// obtains the key description for every object in the array object
	useEffect(() => {
		let categoriesTemp = [];
		let dataTemp = [];

		if (object !== null) {
			if (object.length > 0) {
				for (let j = 0; j < object.length; j++) {
					if (object[0].Porcentaje !== undefined) {
						dataTemp.push(object[j].Porcentaje);
					} else {
						dataTemp.push(object[j].cantidad);
					}
				}

				for (let i = 0; i < object.length; i++) {
					if (object[0].descripcion !== undefined) {
						categoriesTemp.push(object[i].descripcion);
					} else {
						categoriesTemp.push(object[i].Descripcion);
					}
				}
			}
		}
		setData(dataTemp);
		setCategories(categoriesTemp);
	}, [object]);

	const series = [
		{
			data,
		},
	];

	const options = {
		chart: {
			type: 'bar',
			height: 590,
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ['#5BA92A'],
		xaxis: {
			categories,
		},
		title: {
			text: titleText,
			floating: false,
			offsetY: 0,
			align: 'left',
			style: {
				fontFamily: "'Nunito', sans-serif",
				fontSize: '16px',
				color: '#444',
			},
		},
	};

	return (
		<div className="graficos-ind col-12 col-md-6">
			<div className="graph-container">
				<div className="graph-content">
					{object !== null && Object.values(object).length > 0 ? (
						<div id="chart">
							<ReactApexChart options={options} series={series} type="bar" height={350} />
						</div>
					) : (
						<div className="login-counter-container">
							<div className="login-container">
								<div className="counter-text">Seleccione un intervalo de fechas</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

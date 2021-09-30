import React from 'react';
import ReactApexChart from 'react-apexcharts';


export default function BarGraph({ titleText }) {
	const series  = [
		{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
		},
	];

	const options = {
		chart: {
			type: 'bar',
			height: 350,
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
			categories: [
				
				'South Korea',
				'Canada',
				'United Kingdom',
				'Netherlands',
				'Italy',
				'France',
				'Japan',
				'United States',
				'China',
				'Germany',
			],
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
					<div id="chart">
						<ReactApexChart options={options} series={series} type="bar" height={350} />
					</div>
				</div>
			</div>
		</div>
	);
}

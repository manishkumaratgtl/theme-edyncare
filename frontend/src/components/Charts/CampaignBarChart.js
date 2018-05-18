import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartConfig from '../../constants/chart-config';

const options = {
	legend: {
		display: false
	},
	tooltips: {
		titleSpacing: 6,
		cornerRadius: 5
	},
	scales: {
		xAxes: [{
			gridLines: {
				display: false,
				color: ChartConfig.chartGridColor
			},
			ticks: {
				fontColor: ChartConfig.axesColor
			},
			barPercentage: 1.3,
			categoryPercentage: 0.5,
		}],
		yAxes: [{
			gridLines: {
				color: ChartConfig.chartGridColor,
				drawBorder: false
			},
			ticks: {
				fontColor: ChartConfig.axesColor,
				min: 100,
				max: 1000
			},
		}]
	}
};

export default class CampaignBarChart extends Component {
	render() {
		const data = {
			labels: this.props.labels,
			datasets: [
				{
					label: 'Website view',
					backgroundColor: ChartConfig.color.secondary,
					borderColor: ChartConfig.color.secondary,
					borderWidth: 1,
					hoverBackgroundColor: ChartConfig.color.secondary,
					hoverBorderColor: ChartConfig.color.secondary,
					data: this.props.websiteViews,
				},
				{
					label: 'Email Subscription',
					backgroundColor: ChartConfig.color.warning,
					borderColor: ChartConfig.color.warning,
					borderWidth: 1,
					hoverBackgroundColor: ChartConfig.color.warning,
					hoverBorderColor: ChartConfig.color.warning,
					data: this.props.emailSubscription,
				},
			]
		}
		return (
			<Bar data={data} options={options} height={170} />
		);
	}
}

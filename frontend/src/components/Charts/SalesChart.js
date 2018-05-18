/**
 * Sales Chart Component
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


// Main Component
export default class SalesChart extends Component {
    render() {
        const { labels, label, borderColor, chartdata, pointBackgroundColor, height, pointBorderColor, borderWidth } = this.props;
        const data = () => {
            return {
                labels: labels,
                datasets: [
                    {
                        label: label,
                        fill: false,
                        lineTension: 0,
                        fillOpacity: 0.3,
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        pointBorderColor: pointBorderColor,
                        pointBackgroundColor: pointBackgroundColor,
                        pointBorderWidth: 3,
                        pointRadius: 6,
                        pointHoverBackgroundColor: pointBackgroundColor,
                        pointHoverBorderColor: pointBorderColor,
                        pointHoverBorderWidth: 4,
                        pointHoverRadius: 7,
                        data: chartdata,
                    }
                ]
            }
        }
        // chart options
        const options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        min: 0
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        suggestedMin: 0,
                        beginAtZero: true
                    }
                }]
            }
        };
        return (
            <Line data={data} options={options} height={height} />
        );
    }
}

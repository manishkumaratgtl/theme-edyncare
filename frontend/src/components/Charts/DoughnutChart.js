import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from '../../constants/chart-config';

const data = {
   labels: [
      'Total Request',
      'New',
      'Pending'
   ],
   datasets: [{
      data: [250, 25, 125],
      backgroundColor: [
         ChartConfig.color.secondary,
         ChartConfig.color.warning,
         ChartConfig.color.danger
      ],
      hoverBackgroundColor: [
         ChartConfig.color.secondary,
         ChartConfig.color.warning,
         ChartConfig.color.danger
      ]
   }]
};

const options = {
   legend: {
      display: false,
      labels: {
         fontColor: ChartConfig.legendFontColor
      }
   },
   cutoutPercentage: 50
};

export default class DoughnutChart extends Component {

   render() {
      return (
         <Doughnut data={data} options={options} height={100} />
      );
   }
}
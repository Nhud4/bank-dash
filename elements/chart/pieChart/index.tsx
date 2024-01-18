'use client'

import React from 'react'
import { ArcElement, Chart as ChartJS, ChartData, ChartOptions, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  datasets: [
    {
      data: [12, 19, 13, 8],
      backgroundColor: [
        'rgba(52, 60, 106, 1)',
        'rgba(252, 121, 0, 1)',
        'rgba(24, 20, 243, 1)',
        'rgba(250, 0, 255, 1)'
      ],
      borderWidth: 4
    }
  ]
}

export const options = {
  responsive: true,
  onHover: (event, element) => {
    const canvas: any = event.native?.target
    canvas.style.cursor = element[0] ? 'pointer' : 'default'
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  cutout: '70%'
} as ChartOptions<'doughnut'>

export default function BasePieChart() {
  return <Doughnut data={data} options={options} />
}

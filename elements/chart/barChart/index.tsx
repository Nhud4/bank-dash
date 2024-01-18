'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartOptions
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

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
  layout: {
    padding: {
      top: 40
    }
  },
  scales: {
    y: {
      grid: {
        borderDash: [15]
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
} as ChartOptions<'bar'>

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      barPercentage: 0.5,
      label: 'Diposit',
      data: [12, 50, 44, 15, 70, 80, 21],
      backgroundColor: 'rgba(24, 20, 243, 1)',
      borderRadius: 10,
      borderSkipped: false
    },
    {
      barPercentage: 0.5,
      label: 'Withdraw',
      data: [15, 30, 90, 75, 46, 55, 31],
      backgroundColor: 'rgba(22, 219, 204, 1)',
      borderRadius: 10,
      borderSkipped: false
    }
  ]
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}

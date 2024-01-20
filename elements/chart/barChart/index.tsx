'use client'

import React, { HTMLProps } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartOptions,
  ChartData
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

type Props = HTMLProps<HTMLDivElement> & {
  actionComponent?: React.ReactElement
  chartData: ChartData<'bar', number[], string>
  options?: ChartOptions<'bar'>
  subtitle?: string
  title?: string
}

const BarChart: React.FC<Props> = ({ chartData }) => {
  return <Bar options={options} data={chartData} />
}

export default BarChart

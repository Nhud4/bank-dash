'use client'

import React, { HTMLProps } from 'react'
import { ArcElement, Chart as ChartJS, ChartData, ChartOptions, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

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

type Props = HTMLProps<HTMLDivElement> & {
  actionComponent?: React.ReactElement
  chartData: ChartData<'doughnut', number[], string>
  options?: ChartOptions<'doughnut'>
  subtitle?: string
  title?: string
}

const BasePieChart: React.FC<Props> = ({ chartData }) => {
  return <Doughnut data={chartData} options={options} />
}

export default BasePieChart

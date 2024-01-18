import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
  ChartOptions
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

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
  }
} as ChartOptions<'line'>

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Balance',
      data: [65, 59, 50, 81, 56, 55, 40],
      borderColor: 'rgba(24, 20, 243, 1)',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0, 0, 0, 300)
        gradient.addColorStop(0, 'rgba(45, 96, 255, 0.25)')
        gradient.addColorStop(1, 'rgba(45, 96, 255, 0.00)')
        return gradient
      },
      tension: 0.5
    }
  ]
}

export default function BaseLineChart() {
  return <Line options={options} data={data} />
}

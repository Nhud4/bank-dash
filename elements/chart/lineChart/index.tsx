import React, { HTMLProps } from 'react'
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
  ChartOptions,
  ChartData
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

type Props = HTMLProps<HTMLDivElement> & {
  actionComponent?: React.ReactElement
  chartData: ChartData<'line', number[], string>
  options?: ChartOptions<'line'>
  subtitle?: string
  title?: string
}

const BaseLineChart: React.FC<Props> = ({ chartData }) => {
  return <Line options={options} data={chartData} />
}

export default BaseLineChart

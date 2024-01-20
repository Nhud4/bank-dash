'use client'

import React from 'react'
import BaseLineChart from '@/elements/chart/lineChart'
import { ScriptableContext } from 'chart.js'

export const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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

export default function HomeLineChart() {
  return (
    <div className='flex justify-center items-center bg-white p-4 rounded-2xl h-[24rem]'>
      <BaseLineChart chartData={chartData} />
    </div>
  )
}

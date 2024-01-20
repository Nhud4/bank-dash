'use client'

import React from 'react'
import BarChart from '@/elements/chart/barChart'

export const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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

export default function HomeBarChart() {
  return (
    <div className='bg-white p-4 rounded-2xl'>
      <div className='flex justify-end items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#16DBCC] w-4 h-4 rounded-full' />
          <h1>Diposit</h1>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#1814F3] w-4 h-4 rounded-full' />
          <h1>Withdraw</h1>
        </div>
      </div>
      <BarChart chartData={chartData} />
    </div>
  )
}

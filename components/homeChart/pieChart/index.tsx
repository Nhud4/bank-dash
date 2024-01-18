'use client'

import React from 'react'
import BasePieChart from '@/elements/chart/pieChart'

export default function HomePieChart() {
  const dataLabels = [
    { labels: 'Entertainment', color: '#343C6A' },
    { labels: 'Bill Expense', color: '#FC7900' },
    { labels: 'Others', color: '#1814F3' },
    { labels: 'Investment', color: '#FA00FF' }
  ]
  return (
    <div className='bg-white p-6 rounded-2xl'>
      <div className='flex justify-center'>
        <div className='w-[90%]'>
          <BasePieChart />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-3'>
        {dataLabels.map((item, key) => (
          <div key={key} className='flex items-center space-x-2'>
            <div style={{ backgroundColor: item.color }} className='w-4 h-4 rounded-full' />
            <h1>{item.labels}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

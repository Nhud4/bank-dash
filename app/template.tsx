import React from 'react'
import NavigationMenu from '@/components/menu'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <NavigationMenu />
      <div className='col-span-4 w-full'>{children}</div>
    </div>
  )
}

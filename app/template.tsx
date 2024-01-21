'use client'

import React, { useState } from 'react'
import NavigationMenu from '@/components/menu'
import Header from '@/components/header'

export default function Template({ children }: { children: React.ReactNode }) {
  const [expand, setExpand] = useState(true)
  return (
    <div>
      <NavigationMenu expand={expand} onClick={() => setExpand(!expand)} />
      <div
        className={[
          'transition-all duration-500 flex-1 px-0',
          expand ? 'ml-[17rem]' : 'ml-[5rem]'
        ].join(' ')}
      >
        <Header expand={expand} />
        <div className='px-5 pb-4 pt-24'>{children}</div>
      </div>
    </div>
  )
}

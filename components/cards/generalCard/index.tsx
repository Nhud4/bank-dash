import React, { FC, HTMLAttributes } from 'react'
import Image from 'next/image'

type Props = HTMLAttributes<HTMLDivElement> & {
  src: any
  title: string[] | string
  value: string[] | string
  color: string[] | string
}

const GeneralCard: FC<Props> = ({ src, title, value, color }) => {
  return (
    <div className='flex justify-center items-center space-x-3 bg-white rounded-2xl p-3'>
      <div className={`p-4 rounded-full bg-[${color}]`}>
        <Image src={src} alt='icon' width={30} height={30} />
      </div>
      <div>
        <h1 className='text-base font-normal text-[#718EBF]'>{title}</h1>
        <p className='text-[25px] font-semibold text-[#232323]'>{value}</p>
      </div>
    </div>
  )
}

export default GeneralCard

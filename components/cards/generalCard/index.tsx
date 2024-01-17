import React, { FC, HTMLAttributes } from 'react'
import Image from 'next/image'

type Props = HTMLAttributes<HTMLDivElement> & {
  src: any
  title: string
  value: string
  color: string
  type: string | ''
}

const GeneralCard: FC<Props> = ({ src, title, value, color, type }) => {
  return (
    <div className='flex justify-center items-center space-x-3 bg-white rounded-2xl p-3'>
      <div style={{ background: color }} className={`p-4 rounded-full`}>
        <Image src={src} alt='icon' width={30} height={30} />
      </div>
      {type === 'flip' ? (
        <div>
          <h1 className='text-xl font-semibold text-[#232323]'>{title}</h1>
          <p className='text-base font-normal text-[#718EBF]'>{value}</p>
        </div>
      ) : (
        <div>
          <h1 className='text-base font-normal text-[#718EBF]'>{title}</h1>
          <p className='text-xl font-semibold text-[#232323]'>{value}</p>
        </div>
      )}
    </div>
  )
}

export default GeneralCard

'use client'

import React, { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  label: string
  placeholder: string
  value: string
}

const PasswordInput: FC<Props> = ({ label, placeholder, value }) => {
  return (
    <div>
      <label className='text-[13px]'>{label}</label>
      <div className='bg-white border border-[#DFEAF2] rounded-xl py-2 px-3 mt-2'>
        <input type='password' placeholder={placeholder} className='text-[#718EBF]' value={value} />
      </div>
    </div>
  )
}

export default PasswordInput

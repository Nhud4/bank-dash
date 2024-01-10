'use client'

import React, { FC, HTMLAttributes } from 'react'
import { BlueCreditCard } from './blueCreditCard'
import { WhiteCreditCard } from './whiteCreditCard'

type Props = HTMLAttributes<HTMLDivElement> & {
  type: string[] | string
}

const CreditCard: FC<Props> = ({ type }) => {
  return <>{type === 'blue' ? <BlueCreditCard /> : <WhiteCreditCard />}</>
}

export default CreditCard

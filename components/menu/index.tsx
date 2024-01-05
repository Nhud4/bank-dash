'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BankLogo from '@/public/assets/images/bank.png'
import HomeIcon from '@/public/assets/icons/home.svg'
import TransactionsIcon from '@/public/assets/icons/transfer.svg'
import AccountsIcon from '@/public/assets/icons/user.svg'
import InvestmentsIcon from '@/public/assets/icons/economic-investment.svg'
import CreditIcon from '@/public/assets/icons/credit-card.svg'
import LoansIcon from '@/public/assets/icons/loan.svg'
import ServicesIcon from '@/public/assets/icons/service.svg'
import SettingIcon from '@/public/assets/icons/settings-solid.svg'
import HomeIconActive from '@/public/assets/icons/home-1.svg'
import TransactionsIconActive from '@/public/assets/icons/transfer-1.svg'
import AccountsIconActive from '@/public/assets/icons/user-1.svg'
import InvestmentsIconActive from '@/public/assets/icons/economic-investment-1.svg'
import CreditIconActive from '@/public/assets/icons/credit-card-1.svg'
import LoansIconActive from '@/public/assets/icons/loan-1.svg'
import ServicesIconActive from '@/public/assets/icons/service-1.svg'
import SettingIconActive from '@/public/assets/icons/settings-solid-1.svg'
import Image from 'next/image'
import styles from './style.module.css'

export default function NavigationMenu() {
  const pathname = usePathname()
  const [isHovering, setIsHovered] = useState(false)
  const [hoverUrl, setHoverUrl] = useState('')
  const onMouseEnter = (value: React.SetStateAction<string>) => {
    setIsHovered(true)
    setHoverUrl(value)
  }
  const onMouseLeave = () => setIsHovered(false)
  const hoverMenu = (values: React.SetStateAction<string>) => {
    return isHovering && values === hoverUrl
  }
  const menu = [
    { label: 'Dashboard', url: '/', activeIcon: HomeIconActive, inactiveIcon: HomeIcon },
    {
      label: 'Transactions',
      url: '/transactions',
      activeIcon: TransactionsIconActive,
      inactiveIcon: TransactionsIcon
    },
    {
      label: 'Accounts',
      url: '/accounts',
      activeIcon: AccountsIconActive,
      inactiveIcon: AccountsIcon
    },
    {
      label: 'Investments',
      url: '/investments',
      activeIcon: InvestmentsIconActive,
      inactiveIcon: InvestmentsIcon
    },
    {
      label: 'Credit Cards',
      url: '/credit-cards',
      activeIcon: CreditIconActive,
      inactiveIcon: CreditIcon
    },
    { label: 'Loans', url: '/loans', activeIcon: LoansIconActive, inactiveIcon: LoansIcon },
    {
      label: 'Services',
      url: '/services',
      activeIcon: ServicesIconActive,
      inactiveIcon: ServicesIcon
    },
    { label: 'Setting', url: '/setting', activeIcon: SettingIconActive, inactiveIcon: SettingIcon }
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLogo}>
        <Image src={BankLogo} alt='logo' width={36} height={36} />
        <h1>BankDash.</h1>
      </div>
      {menu.map((item, index) => {
        const hover = hoverMenu(item.url)
        return (
          <div key={index} className={styles.wrapperMenu}>
            <div
              className={
                pathname === item.url || hover ? styles.borderActive : styles.borderInactive
              }
            />
            <div
              className={styles.menu}
              onMouseEnter={() => onMouseEnter(item.url)}
              onMouseLeave={onMouseLeave}
            >
              {pathname === item.url || hover ? (
                <Image src={item.activeIcon} alt='icon' />
              ) : (
                <Image src={item.inactiveIcon} alt='icon' />
              )}
              <Link
                href={item.url}
                className={pathname === item.url || hover ? styles.activeMenu : styles.inactiveMenu}
              >
                {item.label}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

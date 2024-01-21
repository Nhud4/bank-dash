'use client'

import React, { useState, FC, HTMLAttributes } from 'react'
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
import MenuIcon from '@/public/assets/icons/menu-open.svg'
import Image from 'next/image'
import styles from './style.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  onClick: Function
  expand: boolean
}

const NavigationMenu: FC<Props> = ({ onClick, expand }) => {
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
    <div
      className={[
        'transition-all duration-500',
        expand ? styles.wrapper : styles.wrapperHidden
      ].join(' ')}
    >
      <div className='flex justify-between items-center px-4 h-20'>
        {expand ? (
          <div className={styles.wrapperLogo}>
            <Image src={BankLogo} alt='logo' width={36} height={36} />
            <h1>BankDash.</h1>
          </div>
        ) : null}
        <div
          className={[
            'flex justify-center items-center cursor-pointer',
            !expand ? 'w-20' : ''
          ].join(' ')}
          onClick={onClick}
        >
          <Image
            src={MenuIcon}
            alt='menu-icon'
            width={25}
            height={25}
            className={['transition-all duration-500', !expand ? 'rotate-180' : 'rotate-0'].join(
              ' '
            )}
          />
        </div>
      </div>
      {menu.map((item, index) => {
        const hover = hoverMenu(item.url)
        return (
          <div key={index} className={styles.wrapperMenu}>
            <div
              className={[
                styles.border,
                pathname === item.url || hover ? 'bg-[#2D60FF]' : 'bg-white',
                'transition-all duration-500',
                !expand ? 'mr-5' : 'mr-9'
              ].join(' ')}
            />
            <Link
              href={item.url}
              onMouseEnter={() => onMouseEnter(item.url)}
              onMouseLeave={onMouseLeave}
            >
              <div className={['transition-all duration-500', styles.menu].join(' ')}>
                {pathname === item.url || hover ? (
                  <Image src={item.activeIcon} alt='icon' priority={true} width={25} height={25} />
                ) : (
                  <Image
                    src={item.inactiveIcon}
                    alt='icon'
                    priority={true}
                    width={25}
                    height={25}
                  />
                )}
                <p
                  className={[
                    pathname === item.url || hover ? styles.activeMenu : styles.inactiveMenu,
                    !expand ? 'hidden' : ''
                  ].join(' ')}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default NavigationMenu

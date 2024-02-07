'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import { useTheme } from "next-themes"
import { BurgerMenu } from '../BurgerMenu'


export const Nav = () => {
  const {theme, setTheme } = useTheme()
  const [themeIcon, setThemeIcon] = useState('carbon:sun')
  const [iconColor, setIconColor] = useState('#000')
  const [burger,setBurger] = useState(false)
  function toggleTheme(){
    if (theme === 'dark') {
      setTheme('light');
      setThemeIcon('carbon:sun');
      setIconColor('000')
    } else {
      setTheme('dark');
      setThemeIcon('carbon:moon');
      setIconColor('#fff');
    }
  }
  function toggleBurger(){
    setBurger(!burger)
  }

  return (
    <nav className='flex justify-between  md:mx-auto my-8 max-w-3xl items-center  mx-4 '>
      <Logo />
          <Icon onClick={()=>toggleTheme()} icon={themeIcon} className="hidden md:block cursor-pointer h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" style={{ color: iconColor }}/>
      <ul className='md:flex gap-4 hidden'>
        <li><Link href='https://www.linkedin.com/in/dejan-mari%C4%87-52a7a51b6/'><Icon icon="carbon:logo-linkedin" width="32" height="32" style={{ color: iconColor }} /></Link></li>
        <li><Link href='https://www.github.com/maricd7'><Icon icon="carbon:logo-github" width="32" height="32" style={{ color: iconColor }} /></Link></li>
        <li><Link href='https://medium.com/@dejanmaric259'><Icon icon="carbon:logo-medium" width="32" height="32" style={{ color: iconColor }} /></Link></li>
      </ul>
      <Icon onClick={()=>{toggleBurger()}} className='md:hidden' icon="carbon:menu" width="24" height="24"  style={{color: iconColor}} />
      {burger ? <BurgerMenu themeIcon={themeIcon} toggleTheme={toggleTheme}  toggleBurger={toggleBurger} iconColor={iconColor}/> : console.log('desktop')} 
    </nav>
  )
}

'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from '../Logo'

export const Nav = () => {
  const [darkMode,setDarkMode] = useState(false);
  const [themeIcon, setThemeIcon] = useState('carbon:sun')

  function toggleDarkMode(){
    setDarkMode(!darkMode)
    themeIcon === 'carbon:moon' ? setThemeIcon('carbon:sun') : setThemeIcon('carbon:moon')
  }
  return (
    <nav className='flex justify-between mx-auto my-8 max-w-3xl items-center'>
        <Logo/>
        <Icon onClick={()=>toggleDarkMode()} className='cursor-pointer' icon={themeIcon} width="32" height="32"  style={{color: '#000'}} />
        <ul className='flex gap-4'>
            <li><Link href='https://www.linkedin.com/in/dejan-mari%C4%87-52a7a51b6/'><Icon icon="carbon:logo-linkedin" width="32" height="32"  style={{color: '#000'}} /></Link></li>
            <li><Link href='https://www.github.com/maricd7'><Icon icon="carbon:logo-github" width="32" height="32"  style={{color: '#000'}} /></Link></li>
            <li><Link href='https://medium.com/@dejanmaric259'><Icon icon="carbon:logo-medium" width="32" height="32"  style={{color: '#000'}} /></Link></li>
        </ul>
    </nav>
  )
}

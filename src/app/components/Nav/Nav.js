'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className='flex justify-between mx-96	my-8'>
        <h2 className='font-bold font-2xl'>Dejan Maric</h2>
        <ul className='flex gap-4'>
            <li><Link href='https://www.linkedin.com/in/dejan-mari%C4%87-52a7a51b6/'><Icon icon="carbon:logo-linkedin" width="48" height="48"  style={{color: '#000'}} /></Link></li>
            <li><Link href='https://www.github.com/maricd7'><Icon icon="carbon:logo-github" width="48" height="48"  style={{color: '#000'}} /></Link></li>
            <li><Link href='https://medium.com/@dejanmaric259'><Icon icon="carbon:logo-medium" width="48" height="48"  style={{color: '#000'}} /></Link></li>
        </ul>
    </nav>
  )
}

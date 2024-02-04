import Link from 'next/link'
import React from 'react'

export const HeroLinks = () => {
  return (
    <div className='flex flex-col mx-96 gap-8  justify-center mt-8'>
        <Link href='./projects' className='text-fullSize text-slate-950 font-black hover:text-slate-700'>PROJECTS</Link>
        <Link href='./contact' className='text-fullSize text-slate-950 font-black hover:text-slate-700'>CONTACT</Link>
        <Link href='./about' className='text-fullSize text-slate-950 font-black hover:text-slate-700'>ABOUT ME</Link>
    </div>
  )
}

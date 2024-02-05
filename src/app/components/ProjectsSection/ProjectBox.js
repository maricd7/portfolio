import Image from 'next/image'
import React from 'react'
import { Paragraph, Subheading } from '../common'
import Link from 'next/link'

export const ProjectBox = ({name,paragraph,technologies,image}) => {
  console.log('deki', typeof(image))
  return (
    <div className='rounded-lg mt-8 flex gap-4'>
        <Image className='rounded-lg' src={image} width={440} height={160} alt='SwiftSail Project Cover'/>
        <div>
          <Subheading text={name}/>
          <Paragraph text={paragraph}/>
          <div className='flex gap-2 mt-2 '>
           {technologies.map((tech,index)=>(
            <span className='px-2 py-1 bg-slate-400 rounded-lg'>{tech}</span>
           ))}
          </div>
          <div className='flex gap-4 mt-8'>
            <Link className='bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded' href='https://github.com/maricd7/portfolio'>Live Demo</Link>
            <Link className='bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded' href='https://github.com/maricd7/portfolio'>CodeBase</Link>
          </div>
        </div>
    </div>
  )
}

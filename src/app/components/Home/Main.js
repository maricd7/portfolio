import React from 'react'
import { Summary } from '../Summary'
import { Projects } from '../ProjectsSection'

export const Main = () => {
  return (
    <div className='flex flex-col items-center'>
        <Summary/>
        <Projects/>
    </div>
  )
}

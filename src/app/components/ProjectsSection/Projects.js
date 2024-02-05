import React from 'react'
import { Paragraph, Subheading } from '../common'
import { ProjectBox } from './ProjectBox'

export const Projects = () => {
  return (
    <div>
        <Subheading text='My Side Projects'/>
        <Paragraph text='I really enjoy building side projects on my spare time. Experimenting with various technologies.'/>
        <ProjectBox/>
    </div>
  )
}

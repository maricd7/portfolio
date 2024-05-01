import React from 'react'
import { Paragraph, Subheading } from '../common'
import { ProjectBox } from './ProjectBox'
import {ProjectsData} from '../../Data/ProjectsData';


export const Projects = () => {
  return (
    <div className='mx-4 md:mx-0 max-w-3xl'>
        <Subheading text='My Side Projects'/>
        <Paragraph text='I really enjoy building side projects on my spare time. Experimenting with various technologies.'/>
        {ProjectsData.map((project,index)=>(
        <ProjectBox key={index} name={project.name}  text={project.paragraphTxt} technologies={project.technologies} image={project.image} github={project.github} live={project.live}/>
        ))}
    </div>
  )
}

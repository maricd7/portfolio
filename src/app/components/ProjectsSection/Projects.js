import React from 'react'
import { Paragraph, Subheading } from '../common'
import { ProjectBox } from './ProjectBox'
import {ProjectsData} from '../../Data/ProjectsData';
import { json } from 'stream/consumers';


export const Projects = () => {
  console.log(ProjectsData[0].image, 'lool')
  return (
    <div className='mx-4 md:mx-0'>
        <Subheading text='My Side Projects'/>
        <Paragraph text='I really enjoy building side projects on my spare time. Experimenting with various technologies.'/>
        {ProjectsData.map((project,index)=>(

        <ProjectBox key={index} name={project.name}  text={project.paragraphTxt} technologies={project.technologies} image={project.image}/>
        ))}
    </div>
  )
}

import React from 'react'
import './Project.css'
import mywork_data from '../../assets/mywork_data.js'
import theme_pattern from '../../assets/theme_pattern.svg'
const Project = () => {
  return (
    <div className="projects" id='project-scroll'>
        <div className="title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project">
      {mywork_data.map((items,index)=>{
       return <div key={index}className="project-container">
        
        <img src={items.w_img} alt="" />
       </div>
      })}
      </div>
    </div>
  )
}

export default Project
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projectData = [
        {
            imgurl:"https://docs.github.com/assets/cb-137715/images/help/repository/os-repo-with-topics.png",
            name:"Example 1",
            text:"I built a Todo-List application utilizing Node.js, Express, MongoDB, and EJS. It enables CRUD operations and seamless interaction with cloud databases.",
            liveLink:"/",
            sourceCode:"/"
        }
    ]
    return (
        <div id='projects' className='container mx-auto  items-center py-2 bg-gray-900 max-w-screen-2xl'>
            <div className='flex justify-center items-center font-black text-5xl py-2 ' style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 134, 96) 63%) text rgb(255, 255, 255)', webkitTextFillColor: 'transparent' }}>
                Projects
            </div>
            <div className='cont flex justify-center items-center my-5 flex-wrap'>
                {projectData.map((el,key)=>{
                    return (
                        <div key={key}>
                            <ProjectCard {...el}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects

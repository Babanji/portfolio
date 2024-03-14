import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow  mx-2 my-4 sm:mb-0'>
            <div>
                <img className='rounded-t-lg' src={props.imgurl} alt="project" />
                <div className='p-4'>
                    <h5 className="text-white font-black md:text-3xl text-left">{props.name}</h5>
                    <p className="my-2 font-normal text-gray-400 ">{props.text}</p>
                    <div className="btn flex justify-start my-4">
                        <a href={`${props.liveLink}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer group relative flex gap-1.5 px-4 py-1 bg-white text-[#000000] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md mr-1">Live Demo</a>
                        <a href={`${props.sourceCode}`} target="_blank" rel="noopener noreferrer" className="ml-1 cursor-pointer group relative flex gap-1.5 px-4 py-1 border text-white border-white rounded-3xl hover:bg-opacity-70 hover:text-gray-300 transition duration-200 ease-in-out font-semibold shadow-md">Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

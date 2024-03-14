import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    const experienceData = [
        {
            position:"Summer Intern regex software services",
            duration:"June 2023 - Present",
            text:""
        },
        {
            position:"Intern, SISTMR AUSTRALIA, Jaipur",
            duration:"Unknown",
            text:"Analyzed problems and worked with teams to develop solutions Interacted with customers by phone, email, or in-person to provide information, Completed research, compiled data, updated spreadsheets, and produced timely reports.Sorted and organized files, spreadsheets, and reports"
        }
    ]
    return (
        <div id='experience' className='container mx-auto items-center p-4 bg-gray-900 max-w-screen-2xl'>
            <h1 className="flex justify-center items-center text-white font-black text-5xl py-2 mb-4" style={{ background: "linear-gradient(rgb(91, 173, 255) 39%, rgb(19, 115, 209) 85%) text rgb(91, 173, 255)", webkitTextFillColor: "transparent" }}>
                Experience
            </h1>
            {experienceData.map((el,key)=>{
                return (
                    <div key={key}>
                        <ExperienceCard {...el}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience

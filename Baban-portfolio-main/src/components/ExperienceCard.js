import React from 'react'

const ExperienceCard = (props) => {

    return (
        <div className='container mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-sm  rounded-lg overflow-hidden mb-4 '>
            <div className="p-4 lg:flex lg:justify-between md:flex md:justify-between">
                <p className="lg:text-2xl sm:text-xl font-bold text-white">
                    {props.position}
                </p>
                <p className="text-gray-400">
                    {props.duration}
                </p>
            </div>
            <p className="px-4 pb-2 text-gray-400">
                {props.text}
            </p>
        </div>
    )
}

export default ExperienceCard

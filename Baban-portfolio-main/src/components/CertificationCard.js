import React from 'react'

const CertificationCard = (props) => {
    return (
        <>
            <div className="container mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-sm  rounded-lg overflow-hidden mb-4 ">
                <div className="p-4 lg:flex lg:justify-between md:flex md:justify-between">
                    <p className="lg:text-xl sm:text-lg font-bold text-white">{props.name}
                    </p>
                    <p className="text-gray-400">
                        {props.issueDate}
                    </p>
                </div>
                <p className="px-4 pb-2 text-gray-400">
                    {props.organisation}
                </p>
            </div>
        </>
    )
}

export default CertificationCard

import React from 'react'
import CertificationCard from './CertificationCard'

const Certification = () => {
    const certificationData = [
        {
            name: "Red Hat Certified System Administrator (RHCSA)",
            issueDate: "August 2023 - August 2026",
            organisation: "Red Hat"
        },
        {
            name: "CCNA: Introduction to Networks",
            issueDate: "July 2023 - Present",
            organisation: "Cisco"
        },
        {
            name: "CCNA: Switching, Routing, and Wireless Essentials), cisco",
            issueDate: "July 2023",
            organisation: "Cisco"
        },
        {
            name: "[CCNA: Enterprise Networking. Security, and Automation, cisco",
            issueDate: "June 2023",
            organisation: "Cisco"
        }
    ]
    return (
        <div id='certification' className='container mx-auto items-center p-4 bg-gray-900 max-w-screen-2xl'>
            <h1 class="flex justify-center items-center text-white font-black text-5xl py-2 mb-4" style={{ background: "linear-gradient(rgb(167, 207, 223) 21%, rgb(35, 83, 138) 100%) text", webkitTextFillColor: "transparent" }}>
                Certification
            </h1>
            {certificationData.map((el, key) => {
                return (
                    <div key={key}>
                       <CertificationCard {...el}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Certification

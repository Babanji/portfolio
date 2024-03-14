import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className="container mx-auto flex justify-center items-center pt-10 text-center bg-gray-900 max-w-screen-2xl">
                <div className="cont flex justify-center items-center flex-col">
                    <img className="w-40" src="/ai.png" alt="Avatar" />
                    <div className="text-white pt-4 font-black md:text-3xl">
                        I am<span className="ml-2 pt-4" style={{WebkitTextFillColor: '#FF8660'}}>Baban Mulchandani</span>
                    </div>
                    <p className="py-2 text-lg text-gray-400">
                        System Administrator | System Engineer<br />
                        Cloud Engineer | Network Engineer
                    </p>
                    <div className="btn flex justify-center my-4">
                        <a href="https://wa.me/9588924964" target="_blank" rel="noopener noreferrer" className="cursor-pointer group relative flex gap-1.5 px-4 py-2 bg-white text-[#000000] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md mr-1">
                            Get in Touch
                        </a>
                        <a href="/baban.pdf" download="" target="_blank" rel="noreferrer" className="ml-1 cursor-pointer group relative flex gap-1.5 px-4 py-2 border text-white border-white rounded-3xl hover:bg-opacity-70 hover:text-gray-300 transition duration-200 ease-in-out font-semibold shadow-md">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

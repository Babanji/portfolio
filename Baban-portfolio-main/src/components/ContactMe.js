import React from 'react'

const ContactMe = () => {
    return (
        <div id='contact' className='container mx-auto items-center p-4 bg-gray-800 max-w-screen-2xl'>
            <section className="bg-gray-800">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                        Let's Talk
                    </h2>
                    <form action="https://formspree.io/f/xwkgqjdk" method="POST" className="space-y-8">
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium  text-white ">Your Name</label>
                            <input type="text" id="text" name="text" className="shadow-sm bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Baban Mulchandani" required="" fdprocessedid="2rkakl" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium  text-white ">Your email</label>
                            <input type="email" id="email" name="email" className="shadow-sm bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 " placeholder="goodbaban@gmail.com" required="" fdprocessedid="iwlrdu" />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" name="message" className="block mb-2 text-sm font-medium  text-white">Your message</label>
                            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500  placeholder-gray-400 " placeholder="Leave a comment...">
                            </textarea>
                        </div>
                        <button type="submit" formtarget="_blank" className="py-3 px-5 text-sm font-medium text-center text-black rounded-full bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" fdprocessedid="wyb7l4">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactMe

import React from 'react'

const TechStack = () => {

    return (
        <div className='container mx-auto flex justify-center items-center py-1 text-center bg-gray-900 max-w-screen-2xl'>
            <div className='container mx-auto max-w-lg  p-4'>
                <div className='cont flex justify-center items-center flex-col'>
                    <div className="text-gray-400 lg:text-4xl font-bold  ">Tech Stacks</div>
                    <div className='cont flex justify-center items-center my-5'>
                        <div className='mx-2 my-2'>
                             <img src="/icons8-redhat-144.png" alt="redhat" />
                        </div>
                        <div className='mx-2 my-2'>
                            <img src="/icons8-amazon-web-services-144.png" alt="aws" />
                        </div>
                        <div className='mx-2 my-2'>
                             <img src="/ccna.png" height={144} width={144} alt="ccna" />
                        </div>
                    </div>
                    <div className='cont flex justify-center items-center my-5'>
                        <div className='mx-2 my-2'>
                             <img src="/icons8-wordpress-144.png" alt="wordpress" />
                        </div>
                        <div className='mx-2 my-2'>
                            <img src="/icons8-linux-96.png" height={144} width={144} alt="aws" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack

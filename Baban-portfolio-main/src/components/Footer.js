import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto bg-gray-800 text-white pb-4 flex flex-col items-center'>
      <div className="mt-4">© 2024 BabanMulchandani. All rights reserved.</div>
      <div className="flex mt-4">
        <a href="https://www.instagram.com/babantech_/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img className="w-5" src="/icons8-instagram-96.png" alt="instagram"  />
        </a>
        <a href="https://github.com/Babanji" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img className="w-5" src="/icons8-github-96.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/baban-mulchandani-607976214/" target="_blank" rel="noopener noreferrer" className="mr-4">
        <img className="w-5" src="/icons8-linkedin-96.png" alt="instagram"  />
        </a>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='w-full h-[60px] flex items-center justify-end px-3 '>

      <button type="button" className='text-white flex  gap-5 items-center justify-center font-semibold'>
      Md Kaif Manzar
        <FaUserCircle size={30}/>
      </button>
    </div>
  )
}

export default Navbar

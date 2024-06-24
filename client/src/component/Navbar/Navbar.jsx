import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-evenly h-[70px] bg-[#ffffff]'>
        <div className='flex gap-8 items-center justify-center'>
          <h2 className='text-4xl font-serif font-bold text-[#5333ec]'>Quick Note</h2>
          <a href="#" className='font-serif '>Home</a>
        </div>
        <div>
          <input type="text" placeholder='Search Notes' className='w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md'/>
        </div>
        <div>
          <button className='border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-3 hover:bg-[#5333ec] hover:text-white transition-all rounded-md'>Sign in</button>
        </div>
      </div>
        <hr className='bg-[#5333ec] h-1 my-2'/>
    </>
  )
}

export default Navbar
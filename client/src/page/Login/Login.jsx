import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import './src/assets/notes.jpg'

function Login({signUp,setSignUp}) {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const setFunc = () =>{
    console.log();
    if(signUp==true){
      setSignUp(false)
      navigate('/login')
    } else {
      setSignUp(true)
      navigate('/signup')
    }
  }


  const submitHandler = (event) =>{
    event.preventDefault()
  }

  return (
    <>
     <div className='flex h-[100%] my-0 '>
      <div className='w-[60%]'>
        <img src="./src/assets/notes.jpg" alt="" />
      </div>
      <div className='w-[40%] flex flex-col justify-center items-center'>
        <div className='flex flex-col '>
          <h2 className='text-[#5333ec] font-bold text-4xl mb-5'>{signUp?"Sign Up": "Login"}</h2>
          <form onSubmit={submitHandler}>
            <div className='flex flex-col gap-3 '>
              {signUp?
              <div className='flex flex-col gap-3'>
                <input type="text" placeholder='username' className='w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md outline-none' required/>
                <input type="tel" placeholder='mobile no' className='w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md outline-none' required/>
              </div>
              :<></>}
              <input type={signUp?'email':'text'} id='email' placeholder={signUp?"enter email":"enter email or mobile no"} className='w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md outline-none' required />
              <div className='flex gap-[5rem] items-center w-[20vw] border-2 border-solid border-[#5333ec] text-[#5333ec] py-1 px-2 rounded-md outline-none'>

              <input type={showPassword?'text':'password'} id='password' placeholder='enter password' className='outline-none'  />
              
              {showPassword?<FaEyeSlash className='cursor-pointer' onClick={()=>{setShowPassword(showPassword?false:true)}}/>:<FaEye className='cursor-pointer' onClick={()=>{setShowPassword(showPassword?false:true)}}/>}
              

              </div>
              <button className='border-2 border-solid border-[#5333ec] text-white py-1 px-3 bg-[#4621ff] hover:bg-[#3745c4] hover:text-[#b2caef] transition-all rounded-md' type='submit'>Submit</button>
            </div>
          </form>
          <p>{signUp?"have an account?":"don't have a account?"}   <span className='text-[#5333ec] cursor-pointer' onClick={setFunc}>{signUp?"login":"signup"}</span></p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Login
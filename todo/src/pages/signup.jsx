import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { signUpUser } from '../services/auth';

function SignUpPage({}) {
  const [payload, setPayload]  = useState({  email:'', username:'', password:''});
  
  const navigate = useNavigate()

  async function handleSignUp() {
    try {
       if (!payload?.email){
        alert('Email Required')
        return
       }
       if (!payload?.username){
        alert('user_name Required')
        return
       }
       if (!payload?.password){
        alert('password Required')
        return
      }
       await signUpUser(payload);
      navigate('/signin')
    }
    catch (e) {
      alert(e?.response?.data?.message)
    }
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-100'>
      <div className='bg-white p-10 rounded-md shadow-xl'>

      <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>User Name</label>
            <input className='border rounded-md p-2 focus:border-black focus:outline-none' value={payload?.username} onChange={(e) => setPayload((prev) => ({...prev, username:e.target.value}))}/>
        </div>

        <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>Email</label>
            <input className='border rounded-md p-2 focus:border-black focus:outline-none' value={payload?.email} onChange={(e) => setPayload((prev) => ({...prev, email:e.target.value}))}/>
        </div>


        <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>Password</label>
            <input className='border rounded-md p-2 focus:border-black focus:outline-none' value={payload?.password} onChange={(e) => setPayload((prev) => ({...prev, password:e.target.value}))}/>
        </div>

        <div className='bg-black text-center text-white mt-3 p-2 rounded-md hover:border-black border hover:bg-white hover:text-black cursor-pointer' onClick={handleSignUp}>Sign up</div>

        <div className='mt-3'>
            Don't have an account please <span onClick={() => navigate('/signin')} className='underline cursor-pointer'>Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
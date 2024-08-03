import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signInUser } from '../services/auth';

function SignInPage({}) {
  const [payload, setPayload] = useState({email:'', password:''});

  const navigate = useNavigate()
 
  async function handleSignIn() {
    try {
      if (!payload.email) {
        alert('email is required')
        return
      }
      if (!payload.password) {
        alert('password is required');
        return;
      }
      const response =  await signInUser(payload);
      localStorage.setItem('token', response.token);
      navigate('/')
    }
    catch (e) {
      console.log('errr', e)
      alert(e?.response?.data?.message)
    }
  }
  

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-100 '>
      <div className='bg-white p-10 rounded-md shadow-xl'>
       <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>Email</label>
            <input className='border rounded-md p-2 focus:border-black focus:outline-none' value={payload?.email} onChange={(e) => setPayload((prev) => ({...prev, email:e.target.value}))}/>
        </div>

        <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>Password</label>
            <input className='border rounded-md p-2 focus:border-black focus:outline-none' value={payload?.password} onChange={(e) => setPayload((prev) => ({...prev, password:e.target.value}))}/>
        </div>

        <div className='bg-black text-center text-white mt-3 p-2 rounded-md hover:border-black border hover:bg-white hover:text-black cursor-pointer' onClick={handleSignIn}>Sign In</div>

        <div className='mt-3'>
            Don't have an account please <span onClick={() => navigate('/signup')} className='underline cursor-pointer'>Sign up</span>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
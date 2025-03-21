import React, { useState } from 'react'

const Login = () => {
    const [state,setState] = useState('Sign Up')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const onSubmitHandler =async(event)=>{
        event.preventDefault()
    }
  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
            <p className='text-2xl font-semibold'>{state === 'Sign Up'? 'Create Account':"Login"}</p>
            <p>Please {state === 'Sign Up'? 'Sign Up':"Log in"} to book an appointment </p>
            {
                state === 'Sign Up'? <div className='w-full'>
                <p>Fullname:</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required></input>
            </div>:null
            }
           
            <div className='w-full'>
                <p>Email:</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setEmail(e.target.value)} value={email} required></input>
            </div>
            <div className='w-full'>
                <p>Password:</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setPassword(e.target.value)} value={password} required></input>
            </div>
            <button className='bg-primary text-white w-full py-2 rounder-md text-base'>{state === 'Sign Up'? 'Create Account':"Log in"}</button>
            {
                state ==="Sign Up"?<p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
                :<p>Create a new Account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
            }
        </div>
    </form>
  )
}

export default Login
import contactMutation from "../gql/contact";
import { useMutation } from "@apollo/client";

import {useState} from 'react'

const Contact = () => {
    const [email,setEmail]=useState()
    const [msg,setMsg]=useState()
    const [notification,notify]=useState()
    const [send,{loading}]=useMutation(contactMutation)

    let spinner = (loading
        ? (
          <svg role="status" className="inline mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          )
        : '' )

    const handleContact=async(e)=>{
        e.preventDefault()

        await send({variables:{
            email:email,
            message:msg
          }})

        notify(
            <>
                <p className='text-green-600 inline-block'>Sent</p>
                <p className='text-red-600 mt-1 font-semibold'>*Please check your email for more details</p>
            </>
            )
    }
  return (
    <div id="contact" className="">
        <h1  className="border font-semibold w-fit px-1 rounded text-3xl  border-r-4 border-b-4 border-black">Contact</h1>
        <form onSubmit={handleContact} className='my-7 px-3 lg:w-1/2 md:w-5/6'>
            <div className='w-5/6 flex flex-col-reverse relative'>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="font-mono pt-0.5 peer ... border-b-2 
                    focus:outline-none w-full "
                    placeholder=' '
                />
                <label 
                htmlFor="email"
                className='
                rounded px-1 text-xs font-mono ml-0 absolute 
                peer-placeholder-shown:top-1.5 -top-3.5 left-2
            text-white bg-black font-black duration-300 ease-in-out 
                peer-placeholder-shown:text-base
                peer-placeholder-shown:-left-1
                peer-placeholder-shown:font-extralight
            peer-placeholder-shown:text-gray-300
                peer-placeholder-shown:border-none
                peer-placeholder-shown:bg-transparent
                '
                >E-Mail</label>
            </div>

            <div className='w-full flex flex-col-reverse relative mt-5'>
                <textarea
                    type="text"
                    id="msg"
                    rows='4'
                    autoComplete="off"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    required
                    className="font-mono pt-0.5 peer ... border-2 
                    focus:outline-none w-full rounded"
                    placeholder=' '
                />
                <label 
                htmlFor="msg"
                className='
                rounded px-1 text-xs font-mono ml-0 absolute 
                peer-placeholder-shown:top-2 -top-2.5 left-2
            text-white bg-black font-black duration-300 ease-in-out 
                peer-placeholder-shown:text-base
                peer-placeholder-shown:left-0
                peer-placeholder-shown:font-extralight
            peer-placeholder-shown:text-gray-300
                peer-placeholder-shown:border-none
                peer-placeholder-shown:bg-transparent
                '
                >Message</label>
            </div>
            <button 
            className='mt-5 w-fit font-black hover:bg-black/5 bg-black/10 inline-block mr-2 hover:bg-white hover:border-black hover:text-black duration-300 border-2 border-transparent bg-black text-white px-1.5 rounded-full'>
            
            Send</button>
            {spinner}
            {notification}
        </form>
        
    </div>
  )
}

export default Contact
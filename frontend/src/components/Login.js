import React from 'react'
import { FaSpotify } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='w-screen h-screen'>
        <div className="absolute inset-0 bg-[#010606] text-white flex items-center justify-center p-4">
            <div className="w-full md:w-375 p-4">
                <div>
                    <FaSpotify
                        color="#1DB954"
                        fontSize="4rem"
                        className='flex flex-col ml-[40%] items-center justify-center mb-4'
                     />
                    <div className="mt-4 text-2xl font-bold flex items-center justify-center">
                        Login to Spotify
                     </div> 
                     <div className="text-lg text flex-row pt-4 ml-2">
                        <p>You must login to your Spotify account</p>
                        <p>to search for albums, artists, or songs</p>
                     </div>
                     <button className="bg-[#1DB954] py-2 px-8 mt-4 text-lg text-[#010606] font-bold absolute ml-[6%] items-center rounded-full">Login</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
import React from 'react'

const VideoTitle = ({title, overview}) => {
    console.log(title, overview);
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black'>
    <h1 className='text-6xl font-bold'> {title}</h1>
    <h1 className='py-6 text-lg w-1/3'>{overview}</h1>
    <div>
        <button className='bg-white text-black p-4 px-12 text-lg mx-2 rounded-lg hover:bg-white/80 
  transition-all 
  duration-300 cursor-pointer'>▶️ Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>ℹ️ More Info</button>
    </div>
    
    </div>
  )
}

export default VideoTitle
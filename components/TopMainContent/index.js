import React from 'react'
import Image from 'next/image'
import StudioG from '../../public/assets/images/Studio-G.png'

const TopMaincontent = () => {
  return (
    <div className=' max-w-4xl mx-auto text-white gap-5 p-5 bg-[#121212] grid md:grid-cols-2 lg:grid-cols-2 rounded-2xl items-center mt-10'>
        <div className='flex flex-col justify-center items-center'>
            <p className='font-thin p-2'>Grupos reducidos </p>
            <div className=' text-2xl font-bold p-3'>
                <h3 className=' text-4xl text-center'>Nos adaptamos ofreciendo espacio, material y metodología.</h3>
            </div>
            <div className=' p-2'>
                <button className='rounded-full py-2 px-4 text-[#267AFA]'>Contactanos</button>
            </div>
        </div>
        <div className='px-5 py-9 flex justify-center'>
            <Image className='px-5 lg:px-0' src={StudioG} alt='logo studio-g' width={200} height={"auto"} />
        </div>
    </div>
  )
}

export default TopMaincontent
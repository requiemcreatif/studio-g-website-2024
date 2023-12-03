import React from 'react'

const Banner = () => {
  return (
    <div className=' flex flex-col justify-center items-center max-w-3xl mx-auto mt-16 text-white gap-5 p-5 bg-black m-5'>
        <h1 className=' text-2xl font-bold p-2'>Studio-G <span className='text-[#D38A23]'>Vigo</span> </h1>
        <h1 className=' text-6xl font-bold p-2 text-center'>Centro Deportivo</h1>
        <p className=' text-center font-thin p-2 text-[#B4B4B6]'>
        Tu centro de entrenamiento familiar donde podrás mejorar tu salud con diferentes tipos de entrenamientos.
        </p>
        <p className=' text-center text-lg'>
        Reserva tu clase de prueba gratis.
        </p>
        <div className=' p-2'>
            <button className=' bg-[#D38A23] rounded-full py-1 px-4 uppercase text-sm'>Contactar</button>
        </div>
    </div>
  )
}

export default Banner
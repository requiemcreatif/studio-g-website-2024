import Image from 'next/image'
import LocalStudio from '../../public/assets/images/local-studio.jpg'

const MainContent = () => {
  return (
    <div className=' text-white font-thin grid lg:grid-cols-2 md:grid-cols-2 max-w-4xl gap-5 mt-5 mb-5'>
        <div className=' bg-[#121212] rounded-lg relative'>
            <div className=' absolute p-6 '>
                <p className=' uppercase pb-3 font-extralight text-sm'>Entrenamiento</p>
                <h3 className='text-2xl font-bold pb-3'> Funcional</h3>
            </div>
            <div className=' absolute bg-[#267AFA] h-full w-full rounded-lg opacity-20 hover:opacity-25'>
               
            </div>
            <Image className=' object-cover rounded-lg' src={LocalStudio} alt='logo studio-g' width={450} height={400} priority />
        </div>
        <div className=' bg-[#121212] rounded-lg pt-6 px-6'>
            <p className=' uppercase pb-3 font-extralight text-sm'>Disciplina</p>
            <h3 className='text-2xl font-bold pb-3'> Entrenamiento personal</h3>
            <p>
            El objetivo de esta sesión es individual ajustándonos a 
            las necesidades específicas, ya sea con el
            objetivo de prevención o recuperación de una 
            lesión, mejora de condición física, así como adaptar su
            entrenamiento a un enfoque de rendimiento de alguna modalidad deportiva.
            </p>
            <div className=' p-2'>
                <button className=' text-[#267AFA] font-bold py-4 uppercase text-xs'>Leer mas</button>
            </div>
        </div>
    </div>
  )
}

export default MainContent
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import pav from '../assets/pavs.jpg'

const Home = () => {
  return (
   
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       {/* container */}
       
       

       
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
           <p className='text-white'>Hi, My name is</p>
           <h1 className='text-3xl sm:text-5xl font-bold text-[#2897aa]'>Pavani Adusumalli</h1>
           <h2 className='text-1xl sm:text-2xl  text-white'>Your favourite Software Developer</h2>
           <p className='text-[#88a0b0] py-4 max-w-[700px]'>I am a Full-Stack Developer specializing in building and 
             designing execptional web applications. Currently living in PA,USA 
             with a Master's Degree in Computer Science.</p>
             <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover: bg-[#2897aa] hover:border-pink-600 '><Link to="work" smooth={true} duration={500}   >
      View Work
    </Link>
                    <span className='hover:rotate-90 duration-300  '>
                    <HiArrowNarrowRight className='ml-3 '/> 
                    </span>
                </button>
             </div>


       </div>
      

    </div>
  )
}

export default Home
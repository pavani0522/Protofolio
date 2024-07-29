
import React from 'react'

import pa from '../assets/pa.png'
import web from '../assets/pweb1.png'
import backend from '../assets/backend.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen  bg-[#0a192f] text-gray-300'>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2897aa] '>Work</p>
                <p className='py-6'> Some recent projects</p>

            </div>
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div style={{backgroundImage: `url(${pa})`}} className='shadow-lg shadow-gray-900 hover:scale-110  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-lg font-bold text-white tracking-wider'>
                                Fullstack Application
                                
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/pavani0522">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#2897aa] text-white font-bold text-lg'>Find out more</button>
                                </a>
                            </div>
                        </div>
                    
                </div>
            
            
                <div  style={{backgroundImage: `url(${web})`}}
                className='shadow-lg shadow-gray-900 group container hover:scale-110  duration-500 rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-lg font-bold text-white tracking-wider'>
                                React js Application
                                
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/pavani0522/Student-Management">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#2897aa] text-white font-bold text-lg'>Find out more</button>
                                </a>
                            </div>
                        </div>
                    
                </div>
                <div  style={{backgroundImage: `url(${backend})`}}
                className='shadow-lg shadow-gray-900 group container hover:scale-110  duration-500 rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-lg font-bold text-white tracking-wider'>
                                Job App Mgmt Systems
                                
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/pavani0522/JobApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#2897aa] text-white font-bold text-lg'>Find out more</button>
                                </a>
                            </div>
                        </div>
                    
                </div>
                </div>
            </div>

         </div>
        
        
  )
}

export default Work
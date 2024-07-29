import React from 'react'
import java1 from '../assets/java1.png'
import springboot from '../assets/sb1.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import hibernate from '../assets/hibernate.png'
import mongo from '../assets/mongo.png'
import docker from '../assets/doc1.png'
import aws from '../assets/aws.png'
import aws1 from '../assets/aws1.png'




const Skills = () => {
  return (
    <div>
    <div name='Skills' className='bg-[#0a192f] text-gray-300'>
        {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#2897aa]'>Skills</p>
            <p className='py-4'> //These are few of the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#ebaa5b] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={java1} alt="java icon" /> 
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#6ac952] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={springboot} alt="Springboot icon" /> 
                <p className='my-5'>SpringBoot</p>
            </div>
            <div className='shadow-md shadow-[#4299ac] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={react} alt="React icon" /> 
                <p className='my-6'>REACT</p>
            </div>
            <div className='shadow-md shadow-white hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={hibernate} alt="Hibernate icon" /> 
                <p className='my-4'>HIBERNATE</p>
            </div>
            <div className='shadow-md shadow-[#3a6095] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={python} alt="Python icon" /> 
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#c6cf56] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={javascript} alt="javascript icon" /> 
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#439f62] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={mongo} alt="Mongo icon" /> 
                <p className='my-3'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#418996] hover:scale-110  duration-500 '>
                <img className='w-20 mx-auto' src={docker} alt="docker icon" /> 
                <p className='my-5'>DOCKER</p>
            </div>
            
        </div>

      </div>

      </div>
      <div name='Certifications' className='bg-[#0a192f] text-gray-300'>
        {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#2897aa]'>Certifications</p>
            <p className='py-4'>With an interest in Cloud Development, the AWS certifications don't come too far behind! </p>
        </div>
        <div className='w-full grid  sm:grid-cols-4 gap-5 text-center py-8'>
            <div className=' shadow-[#040c16] hover:scale-110  duration-500 '>
                <img className='w-15 mx-24' src={aws1} alt="aws icon" /> 
                
            </div>
            <div className=' shadow-[#040c16] hover:scale-110  duration-500 '>
                <img className='w-15 mx-36' src={aws} alt="aws icon" /> 
                
            </div>
            </div>
            </div>
            </div>





    </div>
  )
}

export default Skills
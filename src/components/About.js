import React from 'react'
import Refs from './Refs'

const About = () => {
  return (
    <div id='about' className='mt-5'>
        <h1 className="border font-semibold w-fit px-1 rounded text-3xl mt-1">About</h1>
        <p className='text-xl font-semibold p-3'>i'm detail oriented and flexable developer who can help bring your ideas to life.</p>
        <div className='p-3'>
          <div className='mb-5'>
            <div className='flex justify-center flex-wrap gap-12 '>
              <div className='text-xl font-semibold w-52'>
                <h1>Adaptive </h1>
                <p className='text-base font-light'>having an ability to change to suit changing conditions so i'll fit in any position that job requires.</p>  

              </div>
              <div className='text-xl font-semibold w-52'>
                <h1>Passionate </h1>
                <p className='text-base font-light'>i do love my job so i'm putting all of my efforts to hit the ground to achive goals.</p>  

              </div>
              <div className='text-xl font-semibold w-52'>
                <h1>Responsible </h1>
                <p className='text-base font-light'>able to consciously make decisions, conduct behaviors that seek to improve oneself and/or help others.</p>  

              </div>
              <div className='text-xl font-semibold w-52 '>
                <h1>Fast Learner </h1>
                <p className='text-base font-light'>capable of understanding new information at a rapid pace.</p>  

              </div>
              <div className='text-xl font-semibold w-52'>
                <h1>Team Player </h1>
                <p className='text-base font-light'>cares more about helping a group or team to succeed than about individual success.</p>  

              </div>
              <div className='text-xl font-semibold w-52'>
                <h1>Problem Solver </h1>
                <p className='text-base font-light'>a thinker who focuses on the problem as stated and tries to synthesize information and knowledge to achieve a solution.</p>  

              </div>
              
            </div>
        </div>

        <div className='flex items-baseline'>
          <p className='text-xl font-semibold mb-5 '>i've a good command of programming fundmentals:</p>
          
        </div>
        <Refs/>

        <ol className='ml-5 list-disc flex flex-wrap gap-12 justify-center'>
            <li className='text-xl font-semibold w-52'>Data Structures and algorithems</li>
            <li className='text-xl font-semibold w-52'>Object Oriented Programming</li>
            <li className='text-xl font-semibold w-52'>Design patterns</li>
            <li className='text-xl font-semibold w-52'>SOLID Principle</li>
            <li className='text-xl font-semibold w-52'>DRY Principle</li>
        </ol>
        </div>
    </div>
  )
}

export default About
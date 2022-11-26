import React from 'react'

const Services = () => {
  return (
    <div id='services' className='mt-10'>
        <h1 className="border font-semibold w-fit px-1  text-3xl mt-1 border-r-4 border-b-4 border-black">Services</h1>
        <div className='p-5'>
            <p className='text-2xl '>How can i help?</p>
            <p className='text-lg '>I'm <strong>3D </strong>engine that gonna
            <strong> Design</strong>,
            <strong>Develop</strong>,
            and
            <strong> Deploy</strong> .</p>

            <>
            <div className='flex  flex-wrap gap-12 '>
              <div className='text-xl font-semibold w-52'>
                <h1 className=' w-fit'>Design:</h1>
                <ul className='ml-5 text-base font-light list-disc'>
                    <li>database</li>
                    <li>ui/ux</li>
                </ul>  
              </div>
              <div className='text-xl font-semibold w-52'>
                <h1 className=' w-fit'>Develop:</h1>
                <ul className='ml-5 text-base font-light list-disc'>
                    <li>clean code</li>
                    <li>unit testing</li>
                </ul>  
              </div>
              <div className='text-xl font-semibold w-52'>
                <h1 className=' w-fit'>Deploy:</h1>
                <ul className='ml-5 text-base font-light list-disc'>
                    <li>your product</li>
                    <li>future features</li>
                </ul>  
              </div>
            </div>
            </>
        </div>
    </div>
  )
}

export default Services
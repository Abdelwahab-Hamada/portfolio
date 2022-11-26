import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='absolute  w-fit z-50 self-center top-2 backdrop-blur-xl p-1 flex justify-center rounded-full'>
        <Nav/>
    </div>
  )
}

export default Header
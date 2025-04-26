import React from 'react'
import FirstSection from './FirstSection'
import RightSection from './RightSection'

function FullSection() {
  return (
    <div>
      <div className='md:flex justify-center md:mt-15 '>
        <FirstSection />
        <RightSection />
      </div>
    </div>
  )
}

export default FullSection

import React from 'react'
import FirstSection from './FirstSection'
import RightSection from './RightSection'

function FullSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-20 py-10">
      <FirstSection />
      <RightSection />
    </div>
  )
}

export default FullSection

import React from 'react'
import { assets } from '../../assets/assets'
import CIrcle from './CIrcle'
import AutoScalingSection from './p'

const Ai = () => {
  return (
    <div
      className=" hidden w-full h-screen py-16 md:flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.bg_ai})` }}
    >
        <AutoScalingSection/>
    </div>
  )
}

export default Ai

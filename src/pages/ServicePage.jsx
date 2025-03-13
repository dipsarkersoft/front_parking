import React from 'react'
import { Service } from '../components/Service.jsx'
import { Footer } from './Footer.jsx'
import { Adds } from '../components/utils/Adds.jsx'
import { Pricing } from '../components/Pricing.jsx'

export const ServicePage = () => {
  return (
    <div>


        <Service/>
         

<Pricing/>
       <Adds/>
        <Footer/>
    </div>
  )
}

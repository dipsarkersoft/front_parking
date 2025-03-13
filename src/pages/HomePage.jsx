import React from 'react'
import { HeroCom } from '../components/HeroCom.jsx'
import {ReviewCom} from '../components/ReviewCom.jsx'
import { Footer } from './Footer.jsx'
import { Adds } from '../components/utils/Adds.jsx'
import { Pricing } from '../components/Pricing.jsx'
import { Featurex } from '../components/Featurex.jsx'
import { ImageGalary } from '../components/ImageGalary.jsx'

export const HomePage = () => {
  return (
   <>
   <HeroCom/>

  
 
   <ReviewCom/>

   

   <Pricing/>
<ImageGalary/>
   <Featurex/>

   <Adds/>
   <Footer/>
   
   </>
  )
}

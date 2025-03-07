import React from 'react'
import { HeroCom } from '../components/HeroCom.jsx'
import {ReviewCom} from '../components/ReviewCom.jsx'
import { Footer } from './Footer.jsx'
import { Adds } from '../components/utils/Adds.jsx'

export const HomePage = () => {
  return (
   <>
   <HeroCom/>

  
 
   <ReviewCom/>

   <Adds/>

   <Footer/>
   
   </>
  )
}

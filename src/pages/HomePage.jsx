import React from 'react'
import { HeroCom } from '../components/HeroCom.jsx'
import {ReviewCom} from '../components/ReviewCom.jsx'
import { Footer } from './Footer.jsx'

export const HomePage = () => {
  return (
   <>
   <HeroCom/>

   <ReviewCom/>

   <Footer/>
   
   </>
  )
}

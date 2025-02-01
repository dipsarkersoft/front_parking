import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { createCategory } from '../api/allapi';

export const CategoryCreate = () => {

    const [categoryname, setCategoryname] = useState('');
    const [price_p_h, setPricePH] = useState('');
    const [total_slots, setTotalSlots] = useState('');
    const [available_slots, setAvailableSlots] = useState('');
    const token=localStorage.getItem('token')

  
    const handleSubmit =async (e) => {
      e.preventDefault();
     
     
      if (!categoryname) {
        toast.error("categoryname Required")
      
      }
      if (!price_p_h || isNaN(price_p_h)) {
        toast.error("Price Per Hour mUST be Nubmver")
      }
      if (!total_slots || isNaN(total_slots)) {
        toast.error("Total Slot mUST be Nubmver")
      }
      if (!available_slots || isNaN(available_slots)) {
        toast.error("Available Slot mUST be Nubmver")
      }
      
      const body={
        'name':categoryname,
        price_p_h,total_slots,available_slots
      }
      const data= await createCategory(token,body)

      console.log(data)
      setCategoryname('');
      setPricePH('');
      setTotalSlots('');
      setAvailableSlots('');
  
     
    };


  return (
    <div>



<div className="container d-flex justify-content-center align-items-center  mt-3">
      <div className="card col-md-5 ">
        <div className="card-header">
          <h3>Category  Form</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="categoryname" className="form-label">Category Name</label>
              <input
                type="text"
                className='form-control'  
                id="categoryname"
                value={categoryname}
                onChange={(e) => setCategoryname(e.target.value)}
              />
             
            </div>
            <div className="mb-3">
              <label htmlFor="price_p_h" className="form-label">Price per Hour</label>
              <input
                type="text"
                className="form-control" 
                id="price_p_h"
                value={price_p_h}
                onChange={(e) => setPricePH(e.target.value)}
              />
             
            </div>
            <div className="mb-3">
              <label htmlFor="total_slots" className="form-label">Total Slots</label>
              <input
                type="text"
                className="form-control" 
                id="total_slots"
                value={total_slots}
                onChange={(e) => setTotalSlots(e.target.value)}
              />
             
            </div>
            <div className="mb-3">
              <label htmlFor="available_slots" className="form-label">Available Slots</label>
              <input
                type="text"
                className="form-control" 
                id="available_slots"
                value={available_slots}
                onChange={(e) => setAvailableSlots(e.target.value)}
              />
           
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

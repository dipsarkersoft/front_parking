import React, { useState } from 'react'
import { allCategoryAPI } from '../api/allapi.js'


export const Service = () => {

    const [allCat,setAllCat]=useState([])


    const AllCategory=async()=>{

        const data=await allCategoryAPI()
        setAllCat(data)
        console.log(data)

    }

    useState(()=>{

        AllCategory()
    },[])


  return (
    <div className="container mt-4">
    <h2 className="mb-3">Vehicle Categories All list and Price </h2>

 

    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price per Hour (TK)</th>
          <th>Total Slots</th>
          <th>Available Slots</th>
        </tr>
      </thead>
      <tbody>
        {allCat.map((category, index) => (
            <tr key={category.id} >
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>TK {category.price_p_h}</td>
              <td>{category.total_slots}</td>
              <td>{category.available_slots}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

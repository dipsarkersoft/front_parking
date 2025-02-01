import React, { useEffect, useState } from 'react'
import { allParkingView, getCategoryByid } from '../api/allapi.js'
import { useAuth } from '../contex/useAuth.jsx'
import dateFormat from"dateformat"
import { useNavigate } from 'react-router-dom'

export const AllParkingList = () => {

    const token=localStorage.getItem('token')
    const [res,setRes]=useState([])

    const navigate=useNavigate()
   

    const{user} =useAuth()

    const AllPark=async()=>{

        const {data}=await allParkingView(token)
        setRes(data)
        
       

    }

    const handleGetCar=async(id)=>{
        navigate(`getCar/${id}`)
    }

    const handleReview=async(id)=>{
        console.log(id)
        
    }

    const handleDelete=async(id)=>{
        
        console.log(id)
        
    }



    useEffect(() => {
      AllPark();
    }, [window.location.pathname]);


    




    useEffect(()=>{

        AllPark(token)
    
    },[])

    


  return (
    <div>
        <div className="container mt-4">
      <h2>Parking Records</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Car Name</th>
          
            <th>Start Park</th>
            <th>End Park</th>
            <th>Total Price (TK )</th>
            <th>Status</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {res.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.car_name}</td>
             
              <td>{dateFormat(record.start_park)}</td>
              <td>{record.end_park ? dateFormat(record.start_park) : "Ongoing"}</td>
             
              <td>TK {record.total_price}</td>
              <td>
                <span className={`badge ${record.is_complete ? "bg-success" : "bg-warning"}`}>
                  {record.is_complete ? "Completed" : "In Progress"}
                </span>
              </td>
              <td>{
              user ?


              <>

              <td>
              {
              record.is_complete?

              <>
               <button className="btn btn-success btn-sm me-2" onClick={() => handleReview(record.id)}>
                  Review
                </button>

                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(record.id)}>
                  Delete
                </button>
              </> 
              :

               <>
                <button className="btn btn-success btn-sm me-2" onClick={() => handleGetCar(record.id)}>
                  GetCar
                </button>

                

               </>}

               
                
              </td>   

              </>

              :
              <>
              </>
                
                }
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  )
}

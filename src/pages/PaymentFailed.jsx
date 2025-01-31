import React from 'react'
import '../assets/css/Payment.css'
import { Link } from 'react-router-dom'

const PaymentFailed = () => {
    
  return (
    <div className="status-page failed-page container d-flex flex-column align-items-center justify-content-center">
    <div className="alert alert-danger text-center" role="alert">
      <h1 className="display-4">Failed!</h1>
      <p className="lead">Something went wrong. Please try again.</p>
    </div>
    <Link to="/home" className="btn btn-danger mt-3">
      Retry
    </Link>
    <Link to="/" className="btn btn-secondary mt-2">
      Go to Homepage
    </Link>
  </div>
  )

}

export default PaymentFailed
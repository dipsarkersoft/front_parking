import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Footer } from './Footer';

export const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    

    const handleSubmit = (e) => {


      e.preventDefault(); 

      if(!name ||!email ||!message){
        toast.error("All Fields Required")
        return
    }
    else{

    //   console.log('Name:', name);
    //   console.log('Email:', email);
    //   console.log('Message:', message);
    toast.success("Thanks For Submit")
    setName('');
    setEmail('');
    setMessage('');
}  
    };



  return (
    <div className="">
    <div className="container-fluid  contact py-5">
      <div className="container py-5">
        <div className="p-5 contactPG  rounded">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                <h1 className="TXT">Get in touch</h1>
                <p className="mb-4">
                We are dedicated to bringing you the best mangoes from the tropics. Enjoy the freshest, ripest, and juiciest mangoes delivered right to your door.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="h-100 rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: '400px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7">
            <form onSubmit={handleSubmit}>
    
      <input
        type="text"
        className="w-100 form-control border-0 py-3 mb-4"
        placeholder="Your Name"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

     
      <input
        type="email"
        className="w-100 form-control border-0 py-3 mb-4"
        placeholder="Enter Your Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />


      <textarea
        className="w-100 form-control border-0 mb-4"
        rows="5"
        cols="10"
        placeholder="Your Message"
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      ></textarea>


      <button
        className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
            </div>
            <div className="col-lg-5">
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <FaMapMarkerAlt size={32} className="text-primary me-4" />
                <div>
                  <h4>Address</h4>
                  <p className="mb-2">Rajshahi, Bangladesh </p>
                </div>
              </div>
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <FaEnvelope size={32} className="text-primary me-4" />
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-2">sarkerdip005@gmail.com</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded bg-white">
                <FaPhoneAlt size={32} className="text-primary me-4" />
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-2">+8801303053626</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
 
<Footer/>
</div>

  );
};


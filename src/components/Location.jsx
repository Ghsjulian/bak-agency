import React from 'react'
import location from "../assets/images/location.png"



const Location = ({data}) => {
  return (
    <div data-aos="zoom-in" className="section">
    <h2>See Our Location</h2>
      <div className="location">
       <img src={location} />
      </div>
    </div>
  )
}

export default Location
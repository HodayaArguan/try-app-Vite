import React from 'react'
import CarMode from './CarMode'

const Car = ({ name, model, color, year }) => {
  return (
    <>
      <h2>Car details: </h2>
      <h3> name: {name} </h3>
      <h3>mpdel: {model}
      </h3>
      <h3>color: {color}
      </h3>
      <h3>year: {year}
      </h3>
      <CarMode/>


  
    
    </>
  )
}

export default Car
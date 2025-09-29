import React from 'react'

const CourseDetails = (props) => {


  return (
    <>
     <div>CourseDetails</div>
     <div>
        <h2>Name: {props.curse.Name}</h2>
        <h2>Lessons:{props.curse.Lessons}</h2>
        <h2>Teacher:{props.curse.Teacher}</h2>
     </div>
    </>
   
  )
}

export default CourseDetails
import React from 'react'
import CourseDetails from './CourseDetails'

const PersonDetails = () => {

    const curse=
    [
        {Name:"Java", Lessons:10, Teacher:"Chana"},
        {Name:"React", Lessons:5, Teacher:"Zippy"}
    ]
  return (
    <>

        <div>PersonDetails</div>
        <h2>Name:Hodaya Arguan</h2>
        <h2>Age:19.5</h2>
        <h2>Teacher:Zippy Naddel</h2>

        {curse.map(c=>(
            <CourseDetails key={c.Name} curse={c}/>
        ))}

        

    </>

  )
}

export default PersonDetails
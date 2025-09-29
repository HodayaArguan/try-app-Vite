import React from 'react'
import CourseDetails from './CourseDetails'

const PersonDetails = () => {

    const curse=[{Name:"Java", Lessons:10, Teacher:"Chana"},
        {Name:"React", Lessons:5, Teacher:"Zippy"}
    ]
  return (
    <>

        <div>PersonDetails</div>
        <h1>Name:Hodaya Arguan</h1>
        <h1>Age:19.1</h1>

        {curse.map(c=>(
            <CourseDetails key={c.Name} curse={c}/>
        ))}

        

    </>

  )
}

export default PersonDetails
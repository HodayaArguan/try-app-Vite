import React from 'react'

type Curse={
    Name:string
    Lessons:number
    Teacher:string
}

type CourseDetailsProps={
    curse:Curse
}

const CourseDetails:React.FC<CourseDetailsProps> = (props) => {
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
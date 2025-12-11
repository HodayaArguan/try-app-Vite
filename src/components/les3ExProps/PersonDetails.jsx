import React from "react"
import CourseDetails from "./CourseDetails"

const PersonDetails = () => {
    const course1 = "react"
    const course2 = "node.js"
    const courses = [
        { Name: "react", Mark: 100 },
        { Name: "node.js", Mark: 100 }
    ]
    return (
        <>
            {<h1>Name:Hodaya</h1>}
            {<h1>Age:19</h1>}
            <CourseDetails course={courses} />

        </>
    )

}
export default PersonDetails
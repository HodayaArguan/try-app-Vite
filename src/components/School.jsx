import React from 'react'
import StudentDetails from './StudentDetails'

const School = () => {
 let students=[
    {name:"Michal", id:111, class:14,avg:98 },
    {name:"Hodaya", id:222, class:14,avg:100 },
    {name:"Mira", id:333, class:13,avg:85 },
    {name:"Tehila", id:444, class:12,avg:92}

 ]
 const exit=()=>{
    console.log("השער נפתח")
 }
  return (
    <>
    <h1>School</h1>

    {students.map(s=>
    <StudentDetails key ={s.id} name={s.name} id={s.id} class={s.class} avg={s.avg}  exit={exit} />

   )
    }
    
    </>
  )
}

export default School

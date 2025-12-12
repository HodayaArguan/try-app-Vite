import React from 'react'
import FormToAddTask from './FormToAddTask'
import AllTask from './AllTask'

const Task = ({task}) => {
    // מה המטרה של הקומפוננטה הזוו?
    //בקומפונניטה הזו אני רוצה שזה יהיה התצוגה הראשית ומשם לעבור לשאאר הקומפוממטות
    //אני קצת מסתבכת... :(
    const tasks=[
        
    ]
    const [date,setDate]=useState(new Date().toLocaleTimeString())
    const [id,setId]=useState(uuidv4())
    const newTask={date,id}
    tasks.map(t=>(
        <AllTask
        task={t}
        />
    ))
    
    const handleCreate=()=>{
        <AllTask
        Date={date}
        iD={id}

        />
    }
    const handleToDoList=(e)=>{
        e.preventdefualt
    }
  return (
    <>
      <button onClick={handleCreate }> Create task</button>
      <button onSubmit={handleToDoList}>ToDo List</button>
    </>
  )
}

export default Task

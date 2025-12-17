import React, { useState } from 'react'
import FormToAddTask from './FormToAddTask'
import AllTask from './AllTask'

const Task = () => {

  const [tasks, setTasks] = useState([])
  const [showNewTask, setShowNewTask] = useState(false)

  const handleCreate=()=>{
    setShowNewTask(true)
  }

  return (
    <>
      {showNewTask?(
        <FormToAddTask
        setShowNewTask={setShowNewTask} insertTasks={setTasks}
        />
      ):(
        <>
        <button onClick={handleCreate}> Create task</button>
        <AllTask
        tasks={tasks} setTasks={setTasks} 
         />
         </>
       
      )}
      
    
    </>
  )
}

export default Task
  // const handleToDoList=(e)=>{
  //     e.preventdefualt
  // }
    // מה המטרה של הקומפוננטה הזוו?
  //בקומפונניטה הזו אני רוצה שזה יהיה התצוגה הראשית ומשם לעבור לשאאר הקומפוממטות
  //אני קצת מסתבכת... :(
  //
  // const [date,setDate]=useState(new Date().toLocaleTimeString())
  // const [id,setId]=useState(uuidv4())
  // const newTask={date,id}
  // tasks.map(t=>(
  //     <AllTask
  //     task={t}
  //     />
  // ))
    {/* <button onSubmit={handleToDoList}>ToDo List</button> */}
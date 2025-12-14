import React, { useState } from 'react'
import FormToAddTask from './FormToAddTask'
import AllTask from './AllTask'

const Task = () => {
  // מה המטרה של הקומפוננטה הזוו?
  //בקומפונניטה הזו אני רוצה שזה יהיה התצוגה הראשית ומשם לעבור לשאאר הקומפוממטות
  //אני קצת מסתבכת... :(
  //
  const [tasks, setTasks] = useState([])
  const [showNewTask, setShowNewTask] = useState(false)



  // const [date,setDate]=useState(new Date().toLocaleTimeString())
  // const [id,setId]=useState(uuidv4())
  // const newTask={date,id}
  // tasks.map(t=>(
  //     <AllTask
  //     task={t}
  //     />
  // ))

  const handleCreate=()=>{
    setShowNewTask(true)
  }
  // const handleToDoList=(e)=>{
  //     e.preventdefualt
  // }
  return (
    <>
      {showNewTask}?{
        <FormToAddTask
          setShowNewTask setTasks
        />
      }:{(
        <button onClick={handleCreate}> Create task</button>,
        <AllTask
        showNewTask={showNewTask} setShowNewTask={setShowNewTask}
        />
      )}
      
      {/* <button onSubmit={handleToDoList}>ToDo List</button> */}
    </>
  )
}

export default Task

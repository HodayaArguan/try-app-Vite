import React from 'react'

const TaskDetails = ({task, setTasks}) => {
  const {HeadLine,Describe,id,date,isComplete}=task
  const handleCompleteTask=()=>{
    setTasks((prev)=>
      prev.map((t)=>t.id===id?{...t,isComplete:true}:t)
    )
  }

  return (
    <div style={isComplete?{textDecoration:"line-through", color:"red"}:{color:"green"}}>
      <input type="checkbox" checked={isComplete} 
      onChange={handleCompleteTask}/>
      <h2>{HeadLine}: </h2>
      <h3>Describe: {Describe}</h3>
      <h3>Created at: {date}</h3>
    </div>
  )
}

export default TaskDetails

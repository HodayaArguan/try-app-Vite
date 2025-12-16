import React from 'react'
import TaskDetails from './TaskDetails'

const AllTask = (showNewTask,setShowNewTask, tasks) => {
  handleSubmit=()=>{
    <TaskDetails showNewTask={showNewTask}/>
    setShowNewTask(false)
 
  }


  return (
    <>
    {/* //עבור כל קומפוננטה חיצונית נציג את הפרטים בלי מאפ כי הקומפוננטה החיצונית תציג כל ]עם אתץ הנוכחית */}
    <button onClick={handleSubmit}>AllTask</button>
    <TaskDetails tasks={tasks}/>
      
    </>
  )
}

export default AllTask

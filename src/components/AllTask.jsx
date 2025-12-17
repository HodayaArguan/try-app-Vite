import React from 'react'
import TaskDetails from './TaskDetails'

const AllTask = ({tasks, setTasks}) => {



  return (
    <>
    {/* //עבור כל קומפוננטה חיצונית נציג את הפרטים בלי מאפ כי הקומפוננטה החיצונית תציג כל ]עם אתץ הנוכחית */}
    {tasks?.map((task)=>(
      <TaskDetails 
      key={task.id}
      task={task}
      setTasks={setTasks}

      />
   ) )}
    
      
    </>
  )
}

export default AllTask

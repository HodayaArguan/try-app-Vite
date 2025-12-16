import React from 'react'

const TaskDetails = ({tasks}) => {
  

  return (
    <div>
      {map(t=>{
        const {HeadLine, Describe, id, date}=tasks
       return(
       <h2>headLine:{t.HeadLine}</h2>,
       <h2>describe:{t.Describe}</h2>,
       <h2>id:{t.id}</h2>,
       <h2>date:{t.date}</h2>
      )
     })}

    </div>
  )
}

export default TaskDetails

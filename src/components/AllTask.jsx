import React from 'react'

const AllTask = ({newTask}) => {
    const tasks=[
        
    ]
    tasks.push({newTask})

  return (
    <>
    //עבור כל קומפוננטה חיצונית נציג את הפרטים בלי מאפ כי הקומפוננטה החיצונית תציג כל ]עם אתץ הנוכחית
      {tasks.map((t,ind)=>{
        <h1>task {ind+1} Details: </h1>,
        <h2>headLine:{t.headLine}</h2>,
        <h2>describe:{t.describe}</h2>,
        <h2>id:{t.id}</h2>,
        <h2>date:{t.date}</h2>

      })}
      
    </>
  )
}

export default AllTask

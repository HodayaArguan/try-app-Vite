import React from 'react'

const StudentDetails = (props) => {  
      const adjective=()=>{
        if (props.avg>90){   
               console.log("תלמיד מצטיין")
        }
        if (props.avg<60){   
            console.log("טעון שיפור ")
     }
         
    }
    const ex=()=>{
        adjective()
        props.exit();
        console.log("Student name: "+ props.name)
        console.log("Exiting time: "+ new Date().toLocaleTimeString())
    }

  return (
    <>
    <h2>{props.name} details: </h2>
    <p>
      Name: {props.name} Id: {props.id} Class: {props.class} Avg: {props.avg}
      
    </p>  
    <button style={{color:"white", background:"green"}} onClick={ex } >EXIT</button>



  


    </>
  )
}

export default StudentDetails

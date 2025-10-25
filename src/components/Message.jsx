import React, { useState } from 'react'

const Message = () => { 
    const [message, setMessage] = useState("")
    const handleInputChange =(e)=>{
        setMessage(e.target.value)
    }

  return (
    <>
    <h1>Message</h1>
    <form >
        <input type="text" placeholder='Insert username' onChange={handleInputChange}/>
        <input type="email" placeholder='Insert email' onChange={handleInputChange} />

    </form>
    <h2>My details are: {message}</h2>


    </>
  )
}

export default Message
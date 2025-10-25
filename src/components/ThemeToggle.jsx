import React, { useState } from 'react'

const ThemeToggle = () => {
  const [isDark , setIsDark] = useState(true)
  const handleThemeToggle = ()=>{
    setIsDark(!isDark)
  }

  return (
    <>
   
    <h1>{isDark?"dark":"light" }</h1>
    <button onClick={handleThemeToggle}>Change theme toggle</button>
    
    </>
  )
}

export default ThemeToggle
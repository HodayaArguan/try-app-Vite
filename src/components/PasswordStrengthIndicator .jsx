import React, { useState } from 'react'

const PasswordStrengthIndicator  = () => {
const [password, setPassword] = useState("")
const hansleStrengthPassword=(e)=>{
    if(e.target.value.length<6)
        setPassword("🔴 סיסמא חלשה")
    else if(e.target.value.length<10)
        setPassword("🟡 סיסמא בינונית")
    else if(e.target.value.length>10)
        setPassword("🟢 סיסמא חזקה")
}

  return (
    <>
    <h1>PasswordStrengthIndicator</h1>
    <input type="password" onChange={hansleStrengthPassword} />
    <h2>{password}</h2>

    </>
  )
}

export default PasswordStrengthIndicator 
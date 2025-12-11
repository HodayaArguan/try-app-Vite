import React from 'react'

const PersonalDetails = () => {
    const handleTyping = (e) => {
        console.log("typing...", e.target.value)
    }
    const handleSubmit = () => {
        alert("הקובץ נשלח בהצלחה(:")
    }
    return (
        <>
            PersonalDetails

            <form action="form">
                <input onChange={handleTyping} type="text" placeholder='insert your name' /><br />
                <input onChange={handleTyping} type="tel" name="tel" id="" placeholder='insert your phone' /><br />
                <input onChange={handleTyping} type="email" name="email" placeholder='insert your email' /><br />
                <input onChange={handleTyping} type="number" name="age" placeholder='insert your age' /><br />
                <input onChange={handleTyping} type="date" name="birthDate" /><br />
                <button onClick={handleSubmit} type='submit'>Submit</button>
            </form>
        </>
    )
}

export default PersonalDetails
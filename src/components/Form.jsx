const Form=()=>{
    const handleText=(e)=>{
        console.log("typing...   text"+ e.target.value)

    }
    const handleNumber=(e)=>{
        console.log("typing...  number "+ e.target.value)

    }  
      const handleEmail=()=>{
        console.log("typing...  email "+ e.target.value)

    }
    const handleClickSubmit=()=>{
        alert("הטופס נשלח בהצלחה ");
    }
   
    return(
    <>
    <form>
    <input onChange={handleText} type="text" placeholder="Insert name"/><br />
    <input onChange={handleNumber} type="number" placeholder="Insert age"/><br />
    <input onChange={handleEmail} type="email" placeholder="Insert email"/><br />
    <button onClick={handleClickSubmit} type="submit">Click me</button>
    </form>
    </>

    
)
}

export default Form
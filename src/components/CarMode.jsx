import React, { useState ,} from 'react'

const CarMode = ( {mode, km ,setKm, setMode}) => {
    
    const hadleChandeMode=()=>{
        setMode(!mode)
    }
    const handleChangeKm=(e)=>{
        setKm(e.target.value)
    }
  return (
    <div>
        
        {mode&&<><h3>drive</h3> <h3>km: {km}</h3> <input type="number" onChange={handleChangeKm} /></>||<h3>stop</h3>}
        <br />
        <button onClick={hadleChandeMode}>Change mode </button>

    </div>
  )
}

export default CarMode
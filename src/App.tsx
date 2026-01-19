import React from 'react'
import { useState } from 'react'
import PersonDetails from './components/PersonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonDetails/>
    </>
  )
}

export default App
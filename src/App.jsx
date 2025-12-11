import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonDetails from './components/les3ExProps/PersonDetails'
import Books from './components/les3ExReneringList/Books'
import PersonalDetails from './components/les4EventsHandlers/PersonalDetails'
import School from './components/les4EventsHandlers/propsEventsRendering/School'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <PersonDetails/> */}
      {/* <Books/> */}
      {/* <PersonalDetails/> */}
      <School/>
    </>
  )
}

export default App

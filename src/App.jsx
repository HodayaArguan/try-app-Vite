import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './parent.jsx'
import Child1 from './child1.jsx'
import Child2 from './child2.jsx'
import GrandChild from './GrandChild.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parent/>
      <Child1/>
      <Child2/>
      <GrandChild/>
    </>
  )
 
}



export default App

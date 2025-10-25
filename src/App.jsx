import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './components/ThemeToggle'
import Message from './components/Message'
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThemeToggle/> */}
      {/* <Message/> */}
      <PasswordStrengthIndicator/>
    </>
  )
}

export default App

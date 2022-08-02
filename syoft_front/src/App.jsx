import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Register } from './components/Register'
import { AllRoute } from './components/AllRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AllRoute/>
    </div>
  )
}

export default App

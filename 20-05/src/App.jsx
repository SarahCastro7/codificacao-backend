import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const carregarFrutas  = async () => {
    try {
      const res = await fetch ('http://localhost:5174/frutas')
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <button onClick={carregarFrutas}>Carregar Frutas</button>
  </div>
  )
}

export default App

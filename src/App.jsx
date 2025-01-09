import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChessGame from './ChessGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChessGame />
    </>
  )
}

export default App

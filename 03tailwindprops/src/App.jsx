import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="React Series"/>
      <Card username="Tarnished"/>

      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    </>
  )
}

export default App

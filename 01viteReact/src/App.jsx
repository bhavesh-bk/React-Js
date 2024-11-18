import { useState } from 'react'

import Chai from './chai.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chai/>
    <h1>Heading</h1>
    <h2>Another one</h2>
    </>
  )
}

export default App

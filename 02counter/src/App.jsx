import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 10


  const addValue = () => {
    console.log('value added', counter);
    counter = counter + 1; 
    if(counter <= 20){
      setCounter(counter) 
    } else {
      setCounter(counter = 20) 
    }
    
    
  }
  const removeValue = () => {
    console.log('value removed', counter);
    counter = counter - 1; 
    if(counter >= 0){
      setCounter(counter) 
    } else {
      setCounter(counter = 0) 
    }
   
    
  }

  return (
    <>
      <h1>React with hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
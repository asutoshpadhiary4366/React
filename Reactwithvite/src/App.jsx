import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter]=useState(0)
const addvalue=()=>{
if(counter<20){
  setCounter(counter+1)
}
}
const removevalue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
}
  return (
    <>
    <div className='button'>{counter}</div>
      <button className='button' onClick={addvalue}>Add VAlue</button>
      <button className='button' onClick={removevalue}>Substract Value</button>
    </>
  )
}

export default App

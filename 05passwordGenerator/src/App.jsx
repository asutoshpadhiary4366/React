import { useCallback, useEffect,useRef } from "react"
import { useState } from "react"



function App() {
const[password,setPassword]=useState('')
const[length,setLength]=useState(8)
const[character,setCharacter]=useState('')
const[number,setNumber]=useState('')

const passwordRef = useRef(null)
const passwordGenerator=useCallback(()=>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number)str+="0123456789"
  if(character)str+="!@#$%^&*(){}[]?"
  for (let i = 0; i < length; i++) {
   let char= Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
},[number,length,character,setPassword])
useEffect(()=>{
  passwordGenerator();
},[length,number,character,passwordGenerator])
const copyText = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)})
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      placeholder="password"
      readOnly
      value={password}
      className="outline-none w-full py-1 px-3"
      ref={passwordRef}
      />
       <button  onClick={copyText} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className="text-sm gap-x-2 flex">
      <div className="gap-x-1 cursor-pointer items-center">
        <input type="range" 
        min={8}
        max={100}
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length: {length}</label>
       
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        defaultChecked={number}
        id="numberInput"
        onChange={() => {
            setNumber((prev) => !prev);
        }}
        />
        <label >Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        defaultChecked={character}
        id="chracterInput"
        onChange={() => {
            setCharacter((prev) => !prev);
        }}
        />
        <label >Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App

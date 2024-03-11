import { useState } from "react"


function App() {
 
const [color,setColor]=useState("olive")
const changeHandler =(color)=>{
  
}
  return (
      <div className="w-full h-screen duration-200 " 
      style={{backgroundColor:color}}
      ><div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor('white') }style={{backgroundColor:"white"}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black">White</button>
          <button onClick={()=>setColor('red') }style={{backgroundColor:"red"}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
          <button onClick={()=>setColor('blue') }style={{backgroundColor:"blue"}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Blue</button>
          <button onClick={()=>setColor('orange') }style={{backgroundColor:"orange"}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Orange</button>
          <button onClick={()=>setColor('green') }style={{backgroundColor:"green"}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Green</button>
        </div>
      </div>
        
      </div>
  )
}

export default App

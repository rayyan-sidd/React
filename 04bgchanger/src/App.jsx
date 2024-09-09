import { useState } from "react"

function App() {
  const [color, setColor] = useState("grey")

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full ">
            <button 
            onClick={()=>setColor("#ff000090")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg opacity-60" style={{backgroundColor: "red", }}>
              Red
            </button>
            <button 
            onClick={()=>setColor("lightgreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lightgreen"}}>
              Green
            </button>
            <button 
            onClick={()=>setColor("lightblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lightblue"}}>
              Blue
            </button>
            <button 
            onClick={()=>setColor("#f06d0680")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg opacity-50" style={{backgroundColor: "orange"}}>
              Orange
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default App

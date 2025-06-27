import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive");

  return (
    <>
    <div className="w-full h-screen " style={{backgroundColor: color}}>
      <p className=" fixed bottom-60 text-4xl font-bold flex justify-center inset-x-0 ">Click the button to change background color</p>
     <div className="fixed bottom-30 flex flex-wrap justify-center inset-x-0 ">
      <div className="flex flex-wrap justify-center bg-white  rounded-3xl gap-3 h-15 shadow-lg">
        <button onClick={()=>setColor("red")} className="bg-red-600 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Red</button>
        <button onClick={()=>setColor("blue")} className="bg-blue-800 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Blue</button>
        <button onClick={()=>setColor("yellow")} className="bg-yellow-400 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Yellow</button>
        <button onClick={()=>setColor("green")} className="bg-green-700 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Green</button>
        <button onClick={()=>setColor("Purple")} className="bg-purple-600 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Purple</button>
        <button onClick={()=>setColor("orange")} className="bg-orange-400 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Orange</button>
        <button onClick={()=>setColor("brown")} className="bg-amber-800 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Brown</button>
        <button onClick={()=>setColor("Pink")} className="bg-pink-300 w-25 text-center rounded-3xl m-1 border-4 shawor-lg font-bold ">Pink</button>
      </div>
     </div>
    </div>

    </>
  )
}

export default App

// inset-x-0:use to set position from left and right equal to 0;
//h-screen:to set the height of viewport
//inline CSS writen: style{{}};

//note: After this Lecture-9 see -> useMemo -> useCallback -> useEffect -> useRef -> Lecture-10
import { useState } from 'react'
import Ankit from './Aman.jsx'
import './App.css'          

function App() {
  return (                                                             
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Ankit   username="Khushi" Arr={[1,2,3]} myobj={{age: 23}}  fun={()=>"MCA"}/>                                                      
      <Ankit   username="Mammy" Arr={[4,5,6]} myobj={{age: 25}}   fun={()=>"BCA"} />
    </>
  )
}
     
export default App

// note: we passed the props(properties), string is directly passed but Array,Object,function passed inside of {}, like passes variable
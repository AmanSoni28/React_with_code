//memo is a tool(Higher-Order Component) in React that helps your component not re-render if its props didn’t change.
// 📦 Why use it?
// When a parent component re-renders, its child also re-renders — even if nothing changed.
//memo stops that if the props are the same.

import { memo, useState } from 'react'
import './App.css'


const ChildComponent=memo((props)=> {      //ChildComponent not re-render untill the value of prop is change
  console.log("child re-render");
  return (
  <div>
    Name:{props.Name}  
  </div> 
  )
})

function App() {
const [count,setCount]=useState(0);

  return (
   <>
   <div>Count : {count} </div>
   <button onClick={()=>setCount(count+1)}  >Increase</button>
   <br/>
   <div>
   <ChildComponent Name="AMAN"/>
   </div>
   </>
  )
}

// 🔍 What happens here?
// Even if you click the button 10 times, ChildComponent won’t re-render, see in inspect of this page, "child re-render" print only once.
// Why? Because the Name prop is always "AMAN" — it didn't change.
// So memo helps save time and memory by avoiding unnecessary work.
// ChildComponent re-render when Name will be change.

// <--------------------------------------->
// import { memo,useState } from 'react'
// import './App.css'

// const ChildComponent=memo((props)=> {      
//   console.log("child re-render");
//   return (
//   <div>
//     Name:{props.Name} 
//   </div> 
//   )
// })

// function App() {
// const [count,setCount]=useState(0);
// const [add,setAdd]=useState(0);

// const Addition=()=> {
//   console.log("Hello good evening")
//   setAdd(add+2);
// }

//   return (
//    <>
//    <div>Count : {count} </div> 
//    <button onClick={()=>setCount(count+1)}  >Increase</button>
//    <br/><br/>
//    <div>
//    <ChildComponent Name="AMAN"  Addition={Addition}/>
//    </div>
//    <br/>
//    <div>Add:{add}</div>
//    <button onClick={Addition}>Add-button</button>
//    </>
//   )
// }

//here when we click the increase button then count increase so State change then App function re-render, here ChildComponent also re-rebder even we not change the props(Name and Addition function).
//because in every render all functions are re-create so Addtion function also re-create and ChildComponent understand this is new Addition function means props change so ChildComponent re-render.
// <---------------------------------------------------------------------->
//To stop re-ceate Addition function we use 'useCallback' Hook 
//useCallback Hook does not re-create function till the dependencies is not change,when dependencies is change then it is re-create the function.

// import { memo, useCallback, useState } from 'react'
// import './App.css'

// const ChildComponent=memo((props)=> {      
//   console.log("child re-render");
//   return (
//   <div>
//     Name:{props.Name} 
//   </div> 
//   )
// })

// function App() {
// const [count,setCount]=useState(0);
// const [add,setAdd]=useState(0);

// const Addition= useCallback(()=> {       //Frezz and does not re-create Addtion function  till the props(add) is not change
//   console.log("Hello good evening")
//   setAdd(add+2)
// },[add])


//   return (
//    <>
//    <div>Count : {count} </div> 
//    <button onClick={()=>setCount(count+1)}  >Increase</button>
//    <br/><br/>
//    <div>
//    <ChildComponent Name="AMAN"  Addition={Addition}/>
//    </div>
//    <br/>
//    <div>Add:{add}</div>
//    <button onClick={Addition}>Add-button</button>
//    </>
//   )
// }

//here when we click increase button then count increase State change App function re-render but ChildComponent does not re-render because using useCallback Addition function frizz and not re-create, so there is no any change in ChildComponent, so memo not render ChildComponent
//when we click Add-button then Addition function run and print "Hello good evening" in console and 'add' inceasees by 2, means add change, also State change so App function re-render, because add change so Addition function re-create so ChildComponent also re-render

export default App

// <----------------------------Notes----------------------------->
// 🧠 What is useCallback?
// useCallback is a React hook that helps you save a function so that it doesn’t get recreated every time your component re-renders.

// ✅ Why use it?
// In React, functions are recreated on every render. This can cause problems when you pass them to child components, especially if those components are using memo() (which stops re-renders if props don’t change).

// useCallback helps by returning the same function unless its dependencies change.

// Syntext:
// const cachedFn = useCallback(fn, dependencies)                //useCallback have a function and  dependencies  
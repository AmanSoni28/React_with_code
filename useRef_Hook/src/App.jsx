// The useRef hook in React is used to store a value that doesn’t cause re-renders when it changes.

// ✅ Simple Definition:
// useRef gives you a container to hold a value that survives re-renders but doesn't cause the component to re-render when the value changes.

// 📦 Syntax:
// const myRef = useRef(initialValue);

// myRef.current holds the actual value.
// <------------------------------------------------------------------------>
// useRef commonlly use in two case
// 1.Storing values between renders (without causing re-render)

import { useState } from 'react'
import './App.css'

function App() {
    const [count,setCount]=useState(0);
   let Val=0;
  function handleClick (){
    setCount(count+1);
    Val=Val+1;
    console.log("value of val:", Val);
  }

  return (
    <>
      <div>Count:{count}</div>
      <button onClick={handleClick}>increase</button>
    </>
  )
}

//here when we clicks button 10 time count is increases but value of val is always 1, because  when we click button count update as well as Val also updated Val=1 but count update and State change so App function re-render, so Val re-initialize with 0 in every render 
//To persists the value of Val across the re-render, we use useRef Hook 
//note : when variable of useRef change no any re-render perform

// import { useState, useRef } from 'react'
// import './App.css'

// function App() {
//    const [count,setCount]=useState(0);   
//    let Val=useRef(0);                         //useRef return a object and Val.current holds the actual value
//   function handleClick (){
//     setCount(count+1);
//     Val.current++;
//      console.log("hello", Val.current);
//   }
//   return (
//     <>
//       <div>Count:{count}</div>
//       <button onClick={handleClick}>increase</button>
//     </>
//   )
// }

//now when we click button count update ,state change App function re-render but useRef persists the value of Val 

// 2.Accessing a DOM element (MOST IMP)
// You can use useRef to directly access a DOM node 

// import {useRef} from 'react'

// function App() {
//   const inputRef = useRef();        //create reference of input element

//   function focusInput() {
//     inputRef.current.style.backgroundColor="red";     //using the refrence of 'input' element directlly change the DOM of 'input' element,  
//   }                                                   //here change the backgroungColor of input element

//   return (
//     <>
//       <input ref={inputRef} />                               {/*Link the refecence with input element*/}
//       <button onClick={focusInput}>Change BG</button>
//     </>
//   );
// }

//now we can access the 'input' element using 'inputRef'
//when we Click the button backgroung of input element will be 'red'

export default App


// <----------------------Notes-------------------------->
// 🧠 Key Points:
// Feature                           	useRef
// Triggers re-render?	              ❌ No
// Value persists across re-renders?	✅ Yes
// Used for DOM access?             	✅ Common
// Used for storing previous values?	✅ Useful

// this Lecture cover by love Babbar =https://www.youtube.com/watch?v=gtHKKZJ9W-Q&t=729s
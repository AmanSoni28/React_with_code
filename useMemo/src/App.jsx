import { useState } from 'react'
import './App.css'

function App() {
 
  const [Count,setCount]=useState(0);
  const [input,setInput]=useState(0);

  function expensiveTask(num){
    console.log("hello")
    for(let i=0;i<=1000000000;i++)
    {}
    return num*2;
  }

  const doubleValue=expensiveTask(input);

  return (
   <>
     <button onClick={()=>setCount(Count+1)}>Increase</button>
     <div> Count:{Count}</div>
     <input type="number" 
     placeholder=' number' 
     value={input} 
     onChange = {(e)=>setInput(e.target.value)}/>
     <div>Double:{doubleValue}</div>
   </>
  )
}                      

export default App

// note: when we click increase button then count change and state of count also change, so whole page is re-render, then expensiveTask function is also run and take time, here we not perform any changes in expensiveTask function, even then expensiveTask function run and takes time in every render. but when we use Memo hook on expensiveTask function then Memo memorized the previous result of expensiveTask function and if we do not change the value of dependency of Memo then expensiveTask function run only one time and again directly return the perivious memorized value.
// note: Memo function run when the value of dependency change.
// 'hello' print every time in console.

// import { useMemo, useState } from 'react'
// import './App.css'

// function App() {
 
//   const [Count,setCount]=useState(0);
//   const [input,setInput]=useState(0);

//   function expensiveTask(num){
//     console.log("hello")
//     for(let i=0;i<=1000000000;i++)
//     {}
//     return num*2;
//   }

//   const doubleValue=useMemo(()=>expensiveTask(input),[input]);

//   return (
//    <>
//      <button onClick={()=>setCount(Count+1)}>Increase</button>
//      <div> Count:{Count}</div>
//      <input type="number" 
//      placeholder=' number' 
//      value={input} 
//      onChange = {(e)=>setInput(e.target.value)}/>
//      <div>Double:{doubleValue}</div>
//    </>
//   )
// }                      

// export default App

//now when click increase button then count increase immediatelly because when click increase button without any changing the value of dependency of expensiveTask function, expensiveTask function does not run, Memo directlly return thr previous result of expensiveTask function 
//expensiveTask function run when we change the dependency(input) value .
// 'hello' print once when we click button and print agein when input value change.

// <------------------------Notes-------------------------------->
//This lecture learn after the Lecture-9
//https://www.youtube.com/watch?v=MXs2qqWcGHo => this lecture cover by love Babbar.

// 🧠 What is useMemo?
// useMemo is a React Hook that helps you avoid unnecessary work by remembering the result of a calculation between renders.

// 🛠️ Why use it?
// Sometimes in your component, you have a slow or expensive calculation. If that calculation runs every time your component re-renders — even if the inputs didn’t change — it can hurt performance.

// useMemo helps by caching (or "memoizing") the result so React doesn’t have to redo the work unless needed.

// 📝 Syntax:
// const memoizedValue = useMemo(() => {
//   return expensiveCalculation(a, b);
// }, [a, b]);

// 🔁 How it works:
// React runs the function () => expensiveCalculation(a, b) only when a or b change.

// Otherwise, it returns the previous result (saved in memory).
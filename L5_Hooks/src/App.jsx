import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 
function App() {
     let DefaultLike=15;
     let like=()=>{
       DefaultLike++;
       console.log(DefaultLike)
     }

     let Dislike=()=>{
      DefaultLike--;
      console.log(DefaultLike);
     }
  return (
    <>
    <h1>Total Likes : {DefaultLike}</h1>
    <h2>click the button to like or dislike this page now likes {DefaultLike} </h2>
    <button onClick={like} >Like </button>
    <button onClick={Dislike}>Dislike</button>
    </>
  )
}                                   */

// using Above code we increase and Decrease DefaultLike run and see in 'inspect' but DefaulLike does not change in graphicaly(UI)
//To show graphicaly(UI) change we introduce Hooks, beacase UI updation control by react

  function App() {
     
    let [DefaultLike,setDefaultLike]=useState(15)        //useState is a Hook in React that allows functional components to store and manage state (data that can change over time). it is return two array values, a variable and a function which is manage the variable
                                                         //here 'DefaultLike' is variable and 'setDefaultLike' is method(function) which is responsible to update 'DefaultLike' variable
     let like=()=>{
      if(DefaultLike<20)
       setDefaultLike(DefaultLike+1)
     }

     let Dislike=()=>{
      if(DefaultLike>0)
      setDefaultLike(DefaultLike-1)
     }
  return (
    <>
    <h1>Total Likes : {DefaultLike}</h1>
    <h2>click the button to like or dislike this page now likes {DefaultLike} </h2>
    <button onClick={like} >Like </button>                                                   
    <button onClick={Dislike}>Dislike</button>           <br/>
    <footer>Range: 0-20</footer>
    </>
  )
}  
// or
 /*
function App() {  
    let [DefaultLike,setDefaultLike]=useState(15)        
  return (
    <>
    <h1>Total Likes : {DefaultLike}</h1>
    <h2>click the button to like or dislike this page now likes {DefaultLike} </h2>
    <button onClick={()=>{if(DefaultLike<20) setDefaultLike(DefaultLike+1)}} >Like </button>
    <button onClick={()=>{if(DefaultLike>0) setDefaultLike(DefaultLike-1)}}>Dislike</button>           <br/>
    <footer>Range: 0-20</footer>
    </>
  )
}                  */

export default App


// Note : At a same time we can easily change the State in multiple placese
//onClick Attribute take a function, when button click execute the function



// <----------------------lecture-8 (Most Imp React Interview Question )--------------------------->
// Question - Create a react page where will be two button for increament and decreament , When clicked on first -> increase and clicked on second -> decrease the values. 
// After that, what if , in the condition you will repeate the condition 4 time .
/*
  function App() {
     
    let [DefaultLike,setDefaultLike]=useState(15)       
                                              
     let like=()=>{
      if(DefaultLike<20)
       setDefaultLike(DefaultLike+1)                         
       setDefaultLike(DefaultLike+1)
       setDefaultLike(DefaultLike+1)
       setDefaultLike(DefaultLike+1)                          //when click like button like increase by 1 not 4
     }

     let Dislike=()=>{
      if(DefaultLike>0)
      setDefaultLike(DefaultLike-1)
     }
  return (
    <>
    <h1>Total Likes : {DefaultLike}</h1>
    <h2>click the button to like or dislike this page now likes {DefaultLike} </h2>
    <button onClick={like} >Like </button>                                                   
    <button onClick={Dislike}>Dislike</button>           <br/>
    <footer>Range: 0-20</footer>
    </>
  )
}                                 */

// run and see on this web page
// 1.Here, each setDefaultLike(DefaultLike + 1) is based on the same state value of DefaultLike before updates occur.
// 2.React does not immediately update DefaultLike after each line; instead, it schedules an update.
// 3.Since all four updates use the same DefaultLike value, only the last update takes effect.
// result - when you click like button then increase by 1 not 4 .
// but

/*
  function App() {
     
    let [DefaultLike,setDefaultLike]=useState(15)       
                                              
     let like=()=>{
      if(DefaultLike<20)
       setDefaultLike((DefaultLike)=>DefaultLike+1)                           //'set' function have callback function
       setDefaultLike((DefaultLike)=>DefaultLike+1)                         
       setDefaultLike((DefaultLike)=>DefaultLike+1)                         
       setDefaultLike((DefaultLike)=>DefaultLike+1)                           //now when click like button like increase by 4
     }

     let Dislike=()=>{
      if(DefaultLike>0)
      setDefaultLike(DefaultLike-1)
     }
  return (
    <>
    <h1>Total Likes : {DefaultLike}</h1>
    <h2>click the button to like or dislike this page now likes {DefaultLike} </h2>
    <button onClick={like} >Like </button>                                                   
    <button onClick={Dislike}>Dislike</button>           <br/>
    <footer>Range: 0-20</footer>
    </>
  )
}                                  */

// 1.Here, each 'callback' function receives the previous state value (DefaultLike), which ensures that every update is based on the latest state.
// 2.React batches these updates, but since each one correctly references the previous state, the DefaultLike updates sequentially (0 → 1 → 2 → 3 → 4).
// 3.This ensures that DefaultLike increases by 4 instead of just 1
// result - here you will get the increament of 4.
// The useEffect hook lets you run some code (a "side effect") after the component renders.

// ✅ Simple Definition:
// useEffect is used when you want to do something after the component has been displayed on the screen — like fetching data, updating the DOM, or setting up timers.

// 📦 Syntax:
// useEffect(() => {
//   // Your code here (side effect)
// }, [dependencies]);


import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

// variation 1:
// run on every render
useEffect(()=>{
    alert("Learning useEffect");
})


// variation 2:
// run only first render
// useEffect(()=>{
//     alert("Learning useEffect");
// },[])


// variation 3:
// run when count update
// useEffect(()=>{
//     alert("Learning useEffect");
// },[count])

  return (
    <>
      <div>Count:{count}</div>
      <button onClick={()=>setCount(count+1)} >count Increase</button>
    </>
  )
}

// <--------------------------------------------------------------->

// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [count,setCount]=useState(0);
//   const [sub,setSub]=useState(100);


// // variation 4:
// // multiple dependency,run when count or sub update
// // useEffect(()=>{
// //     alert("Learning useEffect");
// // },[count,sub])

// // variation 5:
// //add a cleanup function
// // useEffect(()=>{
// //   alert("Count updatted")
// //   return ()=>{
// //     alert("count is unmounted fron UI");     //when we click count increase button then previous count is unmounted from UI and count update
// //   }
// // },[count])


//   return (
//     <>
//       <div>Count:{count}</div>
//       <button onClick={()=>setCount(count+1)} >count Increase</button>
//       <br/><br/>
//       <div>value:{sub}</div>
//       <button onClick={()=>setSub(sub-1)} >subtract Value</button>
//     </>
//   )
// }

// <--------------------------Application---------------------------->
// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
// const [data,setData]=useState("");
// const [loading,setLoading]=useState(true);

// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>response.json())
// .then(response =>{
//   setData(response)
//   setLoading(false)
// });
// },[]);      //runs only one time

// return (
//   <div>
//   {loading ? (                  //conditional operator,when loading 'true' then show Loading... and when loading 'False'en show data of API
//     <h1>Loading...</h1>
//   ):(
//    <ul>
//     {data.map((post) =>(
//       <li>{post.title}</li>
//     ))}
//    </ul>
//   )}
//   </div>
// )
// }

//when page render starting value of loading is true therfore show Loading..., and when data fetch and setLoading set false value loading then show data of API.
export default App;

// Note:this lecture cover by love Babbar = https://www.youtube.com/watch?v=_NZ5kb68IpA

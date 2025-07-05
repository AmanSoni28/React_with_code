// import { useState } from "react"
// import { useEffect } from "react"

// export default function Github(){
//     const [data,setData]=useState();

//     useEffect(()=>{
//      fetch("https://api.github.com/users/amansoni28")
//     .then((res)=>res.json())
//     .then((res)=>{
//         console.log(res);
//         setData(res);
//     })

//     },[data]);

//   return(
//         <><div className=" flex  bg-gray-500 h-50 mx-40 p-4 text-4xl">
//             <img src={data?.avatar_url}/> 
//             <div> Follower : {data?.followers}</div>
//         </div>
//         </>
//     )
// }

// or

// <++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// Above way when we click Github then rendring start after that useEffect run then data fetching start.

// for fetch the data in faster way React router give 'Loader function' (see in main.jsx file)
// now when we hover Githut data fetching is started, and when we click github then rendring start, that means data is fetch before rendring the Github page. By this we fetch the data faster

import { useLoaderData } from "react-router-dom";

export default function Github(){
  const data = useLoaderData();

    return(
        <><div className=" flex  bg-gray-500 h-50 mx-40 p-4 text-xl text-white">
            <img src={data?.avatar_url}/> 
            <ul className="m-2"> 
                <li>Name : {data?.name}</li>
                <li>Follower : {data?.followers}</li>
                <li>Following : {data?.following}</li>
                <li>Bio : {data?.bio}</li>
                  
            </ul> 
        </div>
        </>
    )
}

export const GithubInfoLoader=async()=>{                    // GithubInfoLoader is loader function in 'main.jsx file'
const res=await fetch("https://api.github.com/users/amansoni28");
return (await res).json();
}






// <++++++++++++++++++++++++ Notes ++++++++++++++++++++++++++++>
// 📌 What is a Loader in React Router?
// A Loader is a function you attach to a route that fetches or prepares the data before the component renders. This ensures that your component has the required data ready as soon as it's displayed.

// 🔍 What is useLoaderData in React Router?
// useLoaderData is a React hook provided by React Router v6.4+ that allows you to access the data returned by a route’s loader function.
// It is used inside route components to retrieve the data that was fetched before the component rendered.

// 📌 Basic Flow:
// 1️⃣ You define a loader function on a route.
// 2️⃣ You access the returned data using useLoaderData() inside the corresponding component.

// ⚙ How Does It Work?
// | Loader function | Fetches the data before rendering. |
// | useLoaderData() hook | Reads the resolved loader data. |
// | Automatic Error Boundaries | If the loader fails, React Router can show an error UI (errorElement). |

// 🚀 Benefits of useLoaderData:
// ✅ No need for useState + useEffect for initial data.
// ✅ Faster perceived performance: the data is ready when the route renders.
// ✅ Better error and loading management.


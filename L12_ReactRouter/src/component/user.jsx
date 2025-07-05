import { useParams } from "react-router-dom"

export default function User(){                
    const {id}=useParams()          // getting "id" from URL
    return(
        <>
        <div className="bg-gray-600 text-4xl h-40 flex items-center justify-center ">{id}</div>
        </>
    )
}

// 🔑 What is useParams?
// 👉 useParams is a React Router hook that lets you get the values from the URL.
// ✅ It is used when the URL has dynamic parts (called route parameters).

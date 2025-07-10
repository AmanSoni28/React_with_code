import UserContext from "../context/UserContext";
import { useState,useContext } from "react";

function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext)         //takes 'setUser' from 'UserContext'
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})                 //set the value in setUser Function
    }
    return(
<div >
<h2>Login</h2>
<input type="text" placeholder="username" value={username} onChange={ (e)=>setUsername(e.target.value) } />
{" "}
<input type="text" placeholder="password"value={password} onChange={ (e)=>setPassword(e.target.value) }/>
<button onClick={handleSubmit}>Submit</button>
</div>
    )
}
export default Login



// <+++++++++++++++Notes+++++++++++++++>
// useComtext() is a Hook, use to access the valueof Context directly.
// <+++++++++++by chatGPT+++++++++++++>
// useContext() is a React Hook that allows functional components to consume values from a Context API Provider directly.
// It's the easiest way to access global context values inside any child component.
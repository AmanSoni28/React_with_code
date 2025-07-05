import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
 const [length,setLength]=useState(8);
 const [lower,setLower]=useState(false);
 const [upper,setUpper]=useState(false);
 const [num,setnum]=useState(false);
 const [char,setchar]=useState(false);
 const [pass,setpass]=useState("");                    //we not set any default password


 const passGenerator= useCallback(()=>{                //useCallback to optimize the code
    let password="";
    let str="";
    if(upper) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lower) str+="abcdefghJklmnopqrstuvwxyz";
    if(num) str+="0123456789";
    if(char) str+="!@#$%^&*:,/?~><";

    for(let i=0;i<length;i++){
      let ranId=Math.floor(Math.random()*str.length+1);
      password+=str.charAt(ranId);
    }

    setpass(password);

  }                                                        
  ,[length,num,char,upper,lower,setpass]);

   useEffect(()=>{                                  
    passGenerator()},
    [length,num,char,lower,upper,setpass]                          //re-render when change in dependencies
)

 const passwordRef=useRef(null);                                   //create the reference of clipboard

  const copyPassword=useCallback(()=>{
     passwordRef.current?.select();                                //select the current value
    //  passwordRef.current?.setSelectionRange(2,6);               //use to set selection range
      window.navigator.clipboard.writeText(pass);                  //for copy the text on clipboard
      alert("Password Copy SuccessFully From Clipboard");
    },[pass])


  return (
    <>
      <div  className="bg-slate-800 mx-auto  text-4xl rounded-3xl mt-30  bg- w-140 h-100 py-4 border-slate-600 border-1">

        <h1 className='text-center text-white text-5xl mb-2 font-bold'>Password Generator</h1>
        <h5 className='text-center text-white text-xl mb-2 font-light'>Create secure passwords with style</h5>
        
        <div className=' flex justify-center rounded-2xl overflow-hidden border-1 mx-20 h-10 my-6 w-100'>
           <input type="text" value={pass} placeholder="  password" className="outline-none bg-white  text-xl w-full" ref={passwordRef} readOnly></input>              
           <button className='bg-gray-900 px-2 text-xl font-semibold hover:bg-gray-800 text-white'  onClick={copyPassword} >Copy</button>
        </div>
          
        <div className=' flex text-xl gap-x-10 text-white ml-20'>  
         <div className='items-center text-xl mx-6 my-5'>
           <label className='ml-20'>Password Length : {length}</label> <br/>
             <input type="range"  min={8} max={100}  value={length}  className='cursor-pointer w-80 ml-2' onChange={(e)=>setLength(e.target.value)} ></input>
         </div>
         </div>

         <div className='flex text-xl gap-x-20 text-white ml-30 mb-4'>  
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultCheck={upper}  onChange={()=>{setUpper((prev)=>!prev)}} ></input>
          <label>UpperCase</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultCheck={lower}  onChange={()=>{setLower((prev)=>!prev)}} ></input>
          <label>LowerCase</label>
         </div>
        </div>

        <div className='flex text-xl gap-x-24 text-white ml-30'>  
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultCheck={num} onChange={()=>{setnum((prev)=>!prev)}} ></input>
          <label>Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"  defaultCheck={char}  onChange={()=>{setchar((prev)=>!prev)}} ></input>
          <label>Symbols</label>
         </div>
        </div>
       
     </div>
    </>
  )
}

export default App

// <---------------------------------------------Note------------------------------------>
//line 60, className='cursor pointer': when we hover on range slider arrow pointer convert curson pointer,  value={length}: set the input value, when we not use then initially range slider in middle

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createElement} from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>            
  </StrictMode>  
)

// <------------------------Create and pass function in main.jsx---------------------------->

/*
function Intro(){
      return (
        <>
          <h1>I Am Aman Soni </h1>
          <h2>I Am A MCA Student</h2>
        </>
      )
}

createRoot(document.getElementById('root')).render(    
      <Intro/>                                               //note: without StrictMode we use both(<Intro/> or Intro()) but with StrictMode we use only(<Intro/>)
      Or    
      // Intro()
)                                               */

// <----------------------------------------------------->
/*
const ReactElement={                             
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },                               
    children: "Click to visit google"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
       {ReactElement}                                      
  </StrictMode>                                     // Not working, Because React Render not understand 'ReactElement', ReactElement we craete for our CunstomRender 
)                    */                             //React Create Object some different way          

// <-----------------In which form Original React Convert our html tag------------------>
/*
const Name="Ankit";
const Aman= createElement(
  "a",                                                 //tag type
  {href:"https://google.com",target:"_balnk"},         //properties inside of object
  "Clich here to visit google",                        //text
  Name                                                 //Variable         
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {Aman}                  
  </StrictMode>      
)                              */


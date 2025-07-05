import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/home.jsx'
import About from './component/about.jsx'
import Contact from './component/contact.jsx'
import { Route } from 'react-router-dom'
import User from './component/user.jsx'
import Github,{GithubInfoLoader} from './component/github.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([                    // createBrowserRouter is method and have array
//   {
//     path: "/", element: <App/>,
//     children:[
//       { path:"", element:<Home/>  },                   //initialy Home take the place od Outlet
//       { path:"about", element:<About/> },              //when '/about' then About take the place od Outlet
//       { path:"contact", element:<Contact/> }           //when '/about' then Contact take the place od Outlet
//     ]
//   }
// ])

// or
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:id" element={<User/>} />
      {/* <Route path="github" element={<Github/>} /> */}
      <Route loader={GithubInfoLoader} path="github" element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />                     
  </StrictMode>,
)


// <++++++++++++++++++++++++Notes++++++++++++++++++++++++++++++++>
//by me
// when we use React Router then need 'ReactProvider' and reactprovider have a 'prop'(router) 
//router is create using the  createBrowserRouter function


//by chatGPT
/*🚀 What is RouterProvider?
RouterProvider is a React component from React Router used to inject the router configuration (including routes, loaders, actions, etc.) into your React application.

It’s the new way introduced in React Router v6.4+ for handling routing.

🛠 Basic Usage:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
💡 Key Points:
Feature	                           Explanation
createBrowserRouter           	Creates the router object with routes.
RouterProvider	                Provides the router object to your entire React app.
Declarative Routing	          Routes are now defined in JavaScript, not JSX.
Supports Loaders/Actions	      Needed for Data APIs like loaders, actions, etc.

🧩 When to Use RouterProvider?
✅ When using React Router v6.4+ features:

Loaders (for data fetching)
Actions (for form submissions)
Error handling (error boundaries)

✅ When you prefer route objects over <Route> JSX components.

🌐 Before (Old Way):
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
🔄 After (New Way):
<RouterProvider router={router} />

👉 Think of RouterProvider as the engine that powers your app’s navigation using the route configuration you pass to it.*/



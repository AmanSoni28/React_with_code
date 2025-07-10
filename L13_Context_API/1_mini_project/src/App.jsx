import UserContextProvider from "./context/UserContextProvider"
import Login from "./component/login"
import Profile from "./component/profile"

function App() {
  return (
     <UserContextProvider >                           
      <Login/>                                
      <Profile/>
    </UserContextProvider>
  )
}
                                              
export default App

// <+++++++++++++++++++++++ Notes ++++++++++++++++++++++++++>
//wrap both <Login /> and <Profile /> inside the <UserContextProvider> within the App component.
//App is linked with Context using the UserContextProvider
//<Login/> and <Profile/> is passed automatically as the children prop to 'UserContextProvider'.
//By rendering children inside UserContextProvider, both components (Login and Profile) can access the context values using the useContext hook.



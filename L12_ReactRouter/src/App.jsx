import Header from './component/header.jsx'
import Footer from './component/footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>     
    <Footer/>
    </>
  )
}

export default App

//Now only Outlet is chnge, Header and Footer are same

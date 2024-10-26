
import Home from './components/Home'
import Pagination from './components/Pagination'
import Product from './components/Product'
import Header from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProductPage from './pages/ProductPage'
import {createBrowserRouter, redirect,RouterProvider} from "react-router-dom"
import MainUserLayout from './pages/MainUserLayout'
import router from '../router'



function App() {

  return (
    <>
    {/* <Header/> */}
    {/* <RegisterPage/> */}
    {/* <LoginPage/> */}
    {/* <LandingPage/> */}
    {/* <ProductPage/> */}
    {/* <Pagination/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App

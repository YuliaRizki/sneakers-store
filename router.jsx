import { createBrowserRouter, redirect } from "react-router-dom";
import MainUserLayout from "./src/pages/MainUserLayout";
import ProductPage from "./src/pages/ProductPage";
import LoginPage from "./src/pages/LoginPage"
import RegisterPage from "./src/pages/RegisterPage";
import EditProduct from "./src/pages/EditProduct";
import CreateProduct from "./src/pages/CreateProduct";
import Category from "./src/pages/Category";


const router = createBrowserRouter([
    {
     
      children : [
        {
          path:"/login",
          element : <LoginPage/>,
        },
     
      ],
      loader : () => {
        if (localStorage.getItem("access_token")){
          return redirect("/")
        }
        return null
      }
    }, 
    {
      loader:() => {
        if(!localStorage.getItem("access_token")){
          return redirect("/login")
        }
        return null
      },
      element : <MainUserLayout/>,
      children :[
        {
          element : <ProductPage/>,
          path:"/"
        },
        {
          element : <RegisterPage/>,
          path : "/add-user"
        },
        {
          element: <EditProduct/>,
          path: "update/:id"
        },
        {
          element: <CreateProduct/>,
          path: "/create"
        },
        {
          element: <Category/>,
          path: "/categories"
        }
      
      ]
    },
    
  ])

  export default router

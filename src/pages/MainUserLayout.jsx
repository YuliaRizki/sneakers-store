import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"



export default function MainUserLayout () {
    return (
        <>
        <Sidebar/>
        <main className="flex-1 ml-[250px]">

        <Outlet/>
        </main>
        </>
    )
}
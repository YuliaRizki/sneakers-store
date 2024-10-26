import Home from "../components/Home";
import Navbar from "../components/Navbar";

export default function LandingPage() {
    return(
        <div className="flex flex-col min-h-screen bg-orange-100">
            <Navbar/>
            <Home/>
        </div>
    )
}
import { Link } from "react-router-dom"
export default function Navbar () {
    return (
      <div className="mb-20">
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
        <div className="container mx-auto p-3 sm:px-6 lg:px-8"> 
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex space-x-5 flex-1">
              <Link to={'/'}>
                <h1 className="text-2xl font-graphik">HOME</h1>
              </Link>
              <Link to={'/create'}>
                <h1 className="text-2xl font-graphik">ADD PRODUCT </h1>
              </Link>
              <Link to={'/add-userc'}>
                <h1 className="text-2xl font-graphik">ADD STAFF</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    )
}
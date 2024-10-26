import { useState } from "react"
import { API_SERVER } from "../helpers/http-server"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()
    
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await API_SERVER.post("/login", {
                email, 
                password
            })
            console.log(res, "PLISLAAA BANGGGGG");
            
            localStorage.setItem("access_token", res.data.access_token)
            console.log(res.data, "BANG PULANG BANG");
            navigate("/")
        } catch (error) {
            console.log(error.message);            
        }
    }
    return (
        <section>
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen">
                <div className="shadow-2xl w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-opacity-50 dark:bg-rose-300-opacity-50 dark:border-rose-300 w-full">
                    <div className="p-6space-y-4 md:space-y-6 sm:p-8">
            <div>
                <img src="https://i.pinimg.com/originals/c2/eb/f3/c2ebf33dce9875fc6f9ce7b4692c0881.gif" 
                className="rounded-2xl" alt="" />
            </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-lg font-medium text-black dark:text-black"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white border border-red-700 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-400 dark:border-red-700 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange= {(e) => setEmail(e.target.value)}
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-black "
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-white border border-red-700 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-400 dark:border-red-700 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value= {password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 hover:bg-yellow-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                           
                        </form>
                    </div>
                </div>
            </div>
         </div>
        </section>
    //     <div className="font-[sans-serif] bg-white md:h-screen min-h-screen flex flex-col flex-grow">
    //     <div>
    //     </div>
    //     <div className="grid md:grid-cols-2 items-center gap-auto h-full bg-orange-100">
    //       <div className="max-md:order-1 p-4 bg-gray-50 h-full bg-orange-100 ">
    //         <img
    //           src="https://i.pinimg.com/originals/9c/fe/05/9cfe058bca1a126d663c736a70adc4f1.gif"
    //           className="lg:max-w-[90%] w-full h-full object-contain block mx-auto object-cover rounded-2xl"
    //           alt="login-image"
    //         />
    //       </div>
    //       <div className="flex items-center p-6 h-full w-full">
    //         <form className="max-w-lg w-full mx-auto">
    //           <div className="mb-12">
    //             <h3
    //               className="text-black md:text-5xl text-7xl font-extrabold text-left"
    //               style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    //             >
    //               Sign-In Here!
    //             </h3>
    //           </div>
  
              
    //           <div className="mt-6">
    //             <label className="text-gray-800 text-xm block mb-2"
    //             style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    //             >Email
    //             </label>
    //             <div className="relative flex items-center">
    //               <input
    //                 name="email"
    //                 type="text"
    //                 required=""
    //                 className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
    //                 placeholder="Enter email"
    //               />
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="#bbb"
    //                 stroke="#bbb"
    //                 className="w-[18px] h-[18px] absolute right-2"
    //                 viewBox="0 0 682.667 682.667"
    //               >
    //                 <defs>
    //                   <clipPath id="a" clipPathUnits="userSpaceOnUse">
    //                     <path d="M0 512h512V0H0Z" data-original="#000000" />
    //                   </clipPath>
    //                 </defs>
    //                 <g
    //                   clipPath="url(#a)"
    //                   transform="matrix(1.33 0 0 -1.33 0 682.667)"
    //                 >
    //                   <path
    //                     fill="none"
    //                     strokeMiterlimit={10}
    //                     strokeWidth={40}
    //                     d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
    //                     data-original="#000000"
    //                   />
    //                   <path
    //                     d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
    //                     data-original="#000000"
    //                   />
    //                 </g>
    //               </svg>
    //             </div>
    //           </div>
    //           <div className="mt-6">
    //             <label className="text-gray-800 text-sm block mb-2"
    //             style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
    //               Password
    //             </label>
    //             <div className="relative flex items-center">
    //               <input
    //                 name="password"
    //                 type="password"
    //                 required=""
    //                 className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
    //                 placeholder="Enter password"
    //               />
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="#bbb"
    //                 stroke="#bbb"
    //                 className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
    //                 viewBox="0 0 128 128"
    //               >
    //                 <path
    //                   d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
    //                   data-original="#000000"
    //                 />
    //               </svg>
    //             </div>
    //           </div>
    //           <div className="mt-12">
    //             <button
    //               type="button"
    //               className="font-serif w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-amber-400 hover:bg-yellow-700 text-black focus:outline-none"
    //               style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    //             >
    //               Sign-In Now
    //             </button>
    //             <p className="text-sm mt-6 text-gray-800">
    //               Don't have an account?{""}
    //               <a
    //                 href="/Login"
    //                 className="text-blue-500 font-semibold hover:underline ml-1"
    //               >
    //                 Sign-up here
    //               </a>
    //             </p>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    )
}
export default function Home() {
  return (
    <section className="flex h-screen w-screen">
      {/* Left Section with Background Image */}
      <div className="w-1/2 h-full bg-[url('https://i.pinimg.com/originals/b0/2a/fe/b02afee73ed991585be7b9b5ef460b8f.gif')] bg-cover bg-left bg-no-repeat  bg-blend-multiply">
      </div>
      
      {/* Right Section with Jumbotron Content */}
      <div className="w-1/2 h-full flex items-center justify-center bg-orange-100">
        <div className="px-4 max-w-screen-md text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl">
            Step Into Style, Walk with Confidence
          </h1>
          <p className="mb-8 text-lg font-normal text-slate-950 lg:text-xl sm:px-16 lg:px-10">
            "Here at S.C.A.R.P.E, we make your everyday walk effortless and stylish. Our carefully crafted footwear blends comfort, quality, and cutting-edge design, ensuring that each step you take feels as good as it looks. Whether you're striding through the city or relaxing on a weekend stroll, S.C.A.R.P.E shoes are designed to support your journey, wherever it leads."
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-500 hover:bg-rose-700 focus:ring-1 focus:ring-rose-300"
            >
              Get Product
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/ProductPage"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border bg-yellow-500 border-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

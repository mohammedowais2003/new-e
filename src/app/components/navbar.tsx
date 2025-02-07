
import React from "react"




export function NavBar() {
  

  return (


    <div>
      <header className="text-white body-font bg-yellow-400" >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl"><p className="text-green-600 font-extrabold">CAR CENTER</p><p></p></span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href="http://localhost:3001/">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900" href="http://localhost:3001/blog">Blog</a>
    </nav>

  </div>
</header>
    </div>
  )


}



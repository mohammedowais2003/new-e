
import React from "react"




export function NavBar() {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false)
  const [,setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false) // Close the menu when switching to desktop size
      }
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="bg-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo or brand (optional, add if needed) */}
        <div className="flex items-center">
          {/* Logo can be added here */}
        </div>
=======
  

  return (
>>>>>>> 5bef5c62bdafe7841f4a0228e7412ce84ea499f8


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



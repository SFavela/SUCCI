import Navbar from "@/components/Navbar"
import Image from "next/image"
import "./globals.css"
import "./styles/homepage.css"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="banner">
        </div>
      </div>
    </div>
  )
}

export default HomePage
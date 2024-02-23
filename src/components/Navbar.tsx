import Image from "next/image"
import logo from ''
import  Link from 'next/link'

function Navbar() {
    return (
        <div className="navbar">
            <Image src={logo}></Image>
        </div>
    )
}

export default Navbar
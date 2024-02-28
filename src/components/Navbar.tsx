"use client"

import Image from "next/image"
import '../app/styles/navbar.css'
import SideBar from "./sidemenu"
import Searchbar from "./searchbar"

function Navbar() {
    return (
        <div className="navbar">
            
            <Image src={require("../../public/assets/Logo-UJED 1.png")} width={220} height={87} alt=""/>
            <div className="serchbar">
                <Searchbar/>
            </div>
            <div className="boton">
                <SideBar/>
            </div>
        </div>
    )
}

export default Navbar
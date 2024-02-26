import Image from "next/image"
import "../app/styles/navbar_dash.css"
import Link from "next/link";

function Navbar_dashboard() {
    return (
        <div className="navbar">
            <Image src={require("../../public/assets/Logo-UJED 1.png")} alt="Logo" width={220} height={87}/>
            <h1>Areas certificadas</h1>
            <Link href="/"><button className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-white hover:text-white border-2 border-white
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent">
                Salir
            </button></Link>

        </div>
    )
}

export default Navbar_dashboard;
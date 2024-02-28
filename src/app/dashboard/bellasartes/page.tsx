"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./iba.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Instituto de Bellas Artes</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/iba/iba/MANUAL DE ORGANIZACION INSTITUTO DE BELLAS ARTES UJED.docx" download>Manual de Organización</a></p>
        </div>
        </div>
	</div>
    </body>
  )
}

export default page
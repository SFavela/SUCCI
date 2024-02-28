"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./abogado.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Abogado General</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/abogado/abogado-gral/MANUAL DE ORGANIZACION  ABOGADO GENERAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/abogado/abogado-gral/MANUAL DE PROCEDIMIENTOS ABOGADO GENERAL.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
	</div>
    </body>
  )
}

export default page
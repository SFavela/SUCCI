"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./fts.css"



function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Facultad de Trabajo Social</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/fts/fts/MANUAL DE ORGANIZACION FACULTAD DE TRABAJO SOCIAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="./" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
	</div>
    </body>
  )
}

export default page
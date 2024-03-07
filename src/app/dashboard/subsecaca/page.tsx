"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./sub-sec-aca.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Subsecretaría General Académica</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/1OvCaGjAfCMU9GSjVEbGuEcS3gGTCG_Mu/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                <p className="card__description"><a href="./" download>Manual de Procedimientos</a></p>
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
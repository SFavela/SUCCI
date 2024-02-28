"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./sec-gral.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Secretaría General</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/sec-gral/MANUAL DE ORGANIZACION DE SECRETARIA GENERAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/sec-gral/MANUAL DE PROCEDIMIENTOS DE SECRETARIA GENERAL.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Vinculación Institucional</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/vinculacion/MANUAL DE ORGANIZACION DIRECCION DE VINCULACION INSTITUCIONAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="./" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Transformación Digital</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/transformacion/MANUAL DE ORGANIZACION DIRECCION DE TRANSFORMACION DIGITAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/transformacion/MANUAL DE PROCEDIMIENTOS DIRECCION DE TRANSFORMACION DIGITAL.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Centro de Negocios</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/centro-negocios/MANUAL DE ORGANIZACION DE LA DIRECCION DE CENTRO DE NEGOCIOS.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/centro-negocios/MANUAL DE PROCEDIMIENTOS DE DIRECCION DE CENTRO DE NEGOCIOS.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Servicios Escolares</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/servicios-escolares/MANUAL DE ORGANIZACION DIRECCION DE SERVICIOS ESCOLARES.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/servicios-escolares/MANUAL DE PROCEDIMIENTOS DE LA DIRECCION DE SERVICIOS ESCOLARES.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección General de Bibliotecas</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/bibliotecas/MANUAL DE ORGANIZACION DIRECCION GENERAL DE BIBLIOTECAS.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/secretaria-gral/bibliotecas/MANUAL DE PROCEDIMIENTOS DIRECCION GENERAL DE BIBLIOTECAS.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
	</div>
    </body>
  )
}

export default page
import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./rectoria.css"

function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Rectoría</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/rectoria/rectoria/MANUAL DE ORGANIZACION DE RECTORIA.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/rectoria/rectoria/MANUAL DE PROCEDIMIENTOS DE RECTORIA.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Comunicación Social</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/rectoria/comunicacion-social/MANUAL DE ORGANIZACION DIRECCION DE COMUNICACION SOCIAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/rectoria/comunicacion-social/MANUAL DE PROCEDIMIENTOS DIRECCION DE COMUNICACION SOCIAL.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Investigación y Posgrado Institucional</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/rectoria/investigacion/MANUAL DE ORGANIZACION DIRECCION INSTITUCIONAL DEE POSGRADO E INVESTIGACION.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/rectoria/investigacion/MANUAL DE PROCEDIMIENTOS DIIRECCION INSTITUCIONAL DE POSGRADO E INVESTIGACION.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
	</div>
    </body>
  )
}

export default page
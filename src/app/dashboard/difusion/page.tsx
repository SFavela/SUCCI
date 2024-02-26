import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./difusion.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Dirección de Difusión Cultural</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/direccion/MANUAL DE ORGANIZACION DIRECCION DE DIFUSION CULTURAL.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/direccion/MANUAL DE PROCEDIMIENTOS DIRECCION DE DIFUSION CULTURAL.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Editorial UJED</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/editorialujed/MANUAL DE ORGANIZACION EDITORIAL UJED.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/editorialujed/MANUAL DE PROCEDIMIENTOS EDITORIAL UJED.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Librería UJED</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/libreriaujed/MANUAL DE ORGANIZACION LIBRERIA.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/libreriaujed/MANUAL DE PROCEDIMIENTOS LIBRERIA UJED.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Museo Regional UJED</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/museoregional/MANUAL DE ORGANIZACION DE MUSEO REGIONAL DGO UJED.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/museoregional/MANUAL DE PROCEDIMIENTOS MUSEO REGIONAL DGO UJED.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
        <div className="card">
            <p className="card__title">Radio UJED</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/radioujed/MANUAL DE ORGANIZACION RADIO UNIVERSIDAD.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/radioujed/MANUAL DE PROCEDIMIENTOS DE RADIO UNIVERSIDAD.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
        <div className="card">
            <p className="card__title">TV UJED</p>
            <div className="card__content">
                <p className="card__description"><a href="../../docs/loggin/difusion/tvujed/MANUAL DE ORGANIZACION DE TV-UJED.docx" download>Manual de Organización</a></p>
                <p className="card__description"><a href="../../docs/loggin/difusion/tvujed/MANUAL DE PROCEDIMIENTOS DE TV UJED.docx" download>Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./" download>FODA</a></p>
                <p className="card__description"><a href="./" download>Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./" download>Otros</a></p>            </div>
        </div>
	</div>
    </body>
  )
}

export default page
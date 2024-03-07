import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./rectoria.css"

function RectoriaPage() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Rectoría</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/1pbex2vjxBHsCjEz5heEsEcQCO5Ddd6Px/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                <p className="card__description"><a href="https://docs.google.com/document/d/19zEx_FBvl168A9NQskOh_qFn3hJMbakj/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./">FODA</a></p>
                <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./">Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Comunicación Social</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/19EaFKngy41N31W0MVhnqtIL8cfOp7sxc/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                <p className="card__description"><a href="https://docs.google.com/document/d/1Y5pNIcoX8rSCLY7mweUk_jNoaaiqN4yw/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./">FODA</a></p>
                <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./">Otros</a></p>
            </div>
        </div>
        <div className="card">
            <p className="card__title">Dirección de Investigación y Posgrado Institucional</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/1DUeV1WXtXTogh9s7NQc1kRBmH0z7-lX_/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                <p className="card__description"><a href="https://docs.google.com/document/d/1HKHQjq7gmQOtJbNkI9lXwL9Vc1yWVOZv/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./">Otros</a></p>
            </div>
        </div>
	</div>
    </body>
  )
}

export default RectoriaPage
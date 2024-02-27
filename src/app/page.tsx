import Navbar from "@/components/Navbar"
import "./globals.css"
import "./styles/homepage.css"
import Link from "next/link"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="banner">
        <img src="/assets/UJED_FOTO-1.png" alt="banner"/>
        <div className="txt">
            <h1>Sistema Universitario de Calidad y Control Interno SUCCI</h1>
        </div>
    </div>
    <div className="rector">
        <img src="/assets/foto-rector.png"alt="rector"/>
        <div className="texto">
            <h1>Nuestra Universidad debe estar en constante evolución para adaptarse a los cambios del entorno, mediante 
                una cultura de innovación que le permita enfrentar los retos del futuro. Por ello, cuenta con un Sistema Universitario 
                de Calidad y Control Interno, el cual tiene a bien como propósito primordial conducir las actividades correspondientes hacia 
                el logro de los objetivos y metas Institucionales; obtener información confiable y oportuna, y cumplir con el marco jurídico 
                aplicable. </h1>
                <p>Este espacio tiene como objetivo ser una herramienta
                    electrónica que facilite la Administración de Gestiónde Calidad y Control Interno de nuestra Institución</p>
        </div>
    </div>
    <div className="separador"></div>
    <div className="eventos"> 
        <h1>Eventos Importantes</h1>
        <div className="contenedor-img">
            <div className="cont">
                <div className="img">
                    <img src="/assets/DSC_0005 (1).jpg"alt=""/>
                    <div className="text">
                        <h1>COCODI lleva su 2da Sesion  Ordinaria</h1>
                        <p>El pasado 25 de noviembre el Comité de Control y Desempeño Institucional llevó a cabo su 2da sesión Ordinaria</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <img src="/assets/img.jpg"alt=""/>
                    <div className="text">
                        <h1>Reunion de Equipos de Auritoriales</h1>
                        <p>El día 12 de noviembre se llevó a cabo reunión de Auditores Internos de calidad dónde se dio a conocer el Plan Específico de Auditoría Interna y la formación de equipos.</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <img src="/assets/IMG_8788.jpg" alt=""/>
                    <div className="text">
                        <h1>Control Interno brinda Capacitacion sobre Matriz de Riesgos</h1>
                        <p>El Control Interno ha capacitado a las áreas del Sistema de Gestión de Calidad en la Matriz de Administración de Riesgos, proporcionando sesiones específicas para cada área y dando a conocer la matriz al inicio del proceso.</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <img src="/assets/img_2.png"width={300}height={400}alt=""/>
                    <div className="text">
                        <h1>Se lleva a cabo Auditoria Interna de Calidad 2021</h1>
                        <p>El 16 de noviembre dio inicio la Auditoría Interna al Sistema de Gestión de Calidad de la UJED considerando 51 áreas que se encuentran dentro del alcance, concluyendo el 3 de diciembre.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="contraloria-gnrl">
        <h1>Contraloria General</h1>
        <p>Recibe separador de libros con código QR del Código de Ética y Código de Conducta...</p>
        <button type="button">Ver mas</button>
    </div>
    <div className="separador"></div>
    <div className="galeria">
        <h1>Nuestra Galería</h1>
        <div className="fotos">
            <img src="/assets/DSC_0046.PNG" width={640}height={350}alt=""/>
            <img src="/assets/DSC_0171.PNG" width={640}height={350}alt=""/>
            <img src="/assets/IMG_8487.jpg" width={350}height={640}alt=""/>
            <div className="fotos-2">
                <img src="/assets/IMG_6105.jpg" width={446}height={263}alt=""/>
                <img src="/assets/DSC_0015.jpg" width={446}height={263} alt=""/>
            </div>
            <img src="/assets/DSC_0087.jpg" width={473}height={552}alt=""/>
        </div>
    </div>
    <div className="separador"></div>
    <div className="banner">
        <img src="/assets/image 10.png" width={1438}height={360}alt=""/>
        <div className="txt">
            <h1>Página Institucional</h1>
            <button type="button" className="pi-butt"><a href="https://www.ujed.mx/">Ver mas</a></button>
        </div>
    </div>
    <div className="suger">
        <div className="titulo">
            <h1>¿Tienes alguna sugerencia?</h1>
            <p>¡Escribe tus sugerencias de mejora en nuestro buzón de quejas! #somosUJED</p>
            <button type="button"><Link href="/views/buzon">Ver mas</Link></button>
        </div>
        <div className="buzon">
            <img src="/assets/Buzon 1.png"width={201}height={247}alt=""/>
        </div>
    </div>

    <div className="codigos">
        <div className="conducta">
            <img src="/assets/1.png"width={350}height={200} alt="cond"/>
            <a href="/docs/inicio/Codigo-de-Conducta-UJED.pdf" download={'Codigo-de-Conducta-UJED.pdf'}>Código de Conducta</a>
        </div>
        <div className=" etica">
            <img src="/assets/2.png"width={350}height={200} alt="et"/>
            <a href="/inicio/Codigo-de-Etica-UJED.pdf" download={"Codigo-de-Etica-UJED.pdf"}>Código de Ética</a>
        </div>
        <div className="lineamientos">
            <img src="/assets/3.png"width={350}height={200} alt="lin"/>
            <a href="/docs/inicio/Politicas-y-lineamientos-de-E-R.pdf" download={'Politicas-y-lineamientos-de-E-R.pdf'}>Políticas y lineamientos</a>
            <a href="/docs/inicio/reglamento-E-R-AprobadoUJED.pdf" download={'reglamento-E-R-AprobadoUJED.pdf'}>Entrega Recepción</a>
        </div>
    </div>
      </div>
    </div>
  )
}

export default HomePage
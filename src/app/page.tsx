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
                    <img src="/assets/img_2.png"/>
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
            <img src="/assets/DSC_0046.PNG"/>
            <img src="/assets/DSC_0171.PNG"/>
            <img src="/assets/IMG_8487.jpg"/>
            <div className="fotos-2">
                <img src="/assets/IMG_6105.jpg"/>
                <img src="/assets/DSC_0015.jpg"/>
            </div>
            <img src="/assets/DSC_0087.jpg"/>
        </div>
    </div>
    <div className="separador"></div>
    <div className="banner">
        <img src="/assets/image 10.png"/>
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
            <img src="/assets/Buzon 1.png"/>
        </div>
    </div>

    <div className="codigos">
        <div className="conducta">
            <img src="/assets/1.png"/>
            <a href="https://drive.google.com/file/d/17A05Id1CN8s71KhEfwF8mren6LOMU5ks/view?usp=drive_link">Código de Conducta</a>
        </div>
        <div className=" etica">
            <img src="/assets/2.png"/>
            <a href="https://drive.google.com/file/d/1eigZkcdQiOlgVw36wPH30dBDv_thlPC5/view?usp=drive_link">Código de Ética</a>
        </div>
        <div className="lineamientos">
            <img src="/assets/3.png"/>
            <a href="/https://drive.google.com/file/d/10EHomzU8HWdPcWg9CP6sqyx5XVWTbu94/view?usp=drive_link">Políticas y lineamientos</a>
            <a href="https://drive.google.com/file/d/1h7fquuMK1kFE50f9zh-Bx3aCEjH3jDpa/view?usp=drive_link">Entrega Recepción</a>
        </div>
    </div>
      </div>
    </div>
  )
}

export default HomePage
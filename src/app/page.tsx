import Navbar from "@/components/Navbar"
import "./globals.css"
import "./styles/homepage.css"
import Image from "next/image"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="banner">
        <Image src={require("../../public/assets/UJED_FOTO 1.png")} width={1440} height={385} alt="banner"/>
        <div className="txt">
            <h1>Sistema Universitario de Calidad y Control Interno SUCCI</h1>
        </div>
    </div>
    <div className="rector">
        <Image src={require("../../public/assets/foto-rector.png")} width={263} height={384} alt="rector"/>
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
                    <Image src={require("../../public/assets/DSC_0005 (1).jpg")} width={300} height={400} alt=""/>
                    <div className="text">
                        <h1>COCODI lleva su 2da Sesion  Ordinaria</h1>
                        <p>El pasado 25 de noviembre el Comité de Control y Desempeño Institucional llevó a cabo su 2da sesión Ordinaria</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <Image src={require("../../public/assets/img.jpg")} width={300} height={400} alt=""/>
                    <div className="text">
                        <h1>Reunion de Equipos de Auritoriales</h1>
                        <p>El día 12 de noviembre se llevó a cabo reunión de Auditores Internos de calidad dónde se dio a conocer el Plan Específico de Auditoría Interna y la formación de equipos.</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <Image src={require("../../public/assets/IMG_8788.jpg")} width={300}height={400}alt=""/>
                    <div className="text">
                        <h1>Control Interno brinda Capacitacion sobre Matriz de Riesgos</h1>
                        <p>El Control Interno ha capacitado a las áreas del Sistema de Gestión de Calidad en la Matriz de Administración de Riesgos, proporcionando sesiones específicas para cada área y dando a conocer la matriz al inicio del proceso.</p>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="img">
                    <Image src={require("../../public/assets/img_2.png")}width={300}height={400}alt=""/>
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
            <img src="../../public/assets/DSC_0046.JPG"/>
            <img src="../../public/assets/DSC_0171.JPG"/>
            <Image src={require("../../public/assets/IMG_8487.jpg")} width={350}height={640}alt=""/>
            <div className="fotos-2">
                <Image src={require("../../public/assets/IMG_6105.jpg")} width={446}height={263}alt=""/>
                <Image src={require("../../public/assets/DSC_0015.jpg")} width={446}height={263} alt=""/>
            </div>
            <Image src={require("../../public/assets/DSC_0087.jpg")} width={473}height={552}alt=""/>
        </div>
    </div>
    <div className="separador"></div>
    <div className="banner">
        <Image src={require("../../public/assets/image 10.png")} width={1438}height={360}alt=""/>
        <div className="txt">
            <h1>Página Institucional</h1>
            <button type="button" className="pi-butt"><a href="https://www.ujed.mx/">Ver mas</a></button>
        </div>
    </div>
    <div className="suger">
        <div className="titulo">
            <h1>¿Tienes alguna sugerencia?</h1>
            <p>¡Escribe tus sugerencias de mejora en nuestro buzón de quejas! #somosUJED</p>
            <button type="button"><a href="./Buzon/Index.html">Ver mas</a></button>
        </div>
        <div className="buzon">
            <Image src={require("../../public/assets/Buzon 1.png")}width={201}height={247}alt=""/>
        </div>
    </div>

    <div className="codigos">
        <div className="conducta">
            <Image src={require("../../public/assets/1.png")}width={350}height={200} alt="cond"/>
            <h1><a href="../../public/docs/inicio/Codigo-de-Conducta-UJED.pdf">Código de Conducta</a></h1>
        </div>
        <div className=" etica">
            <Image src={require("../../public/assets/2.png")}width={350}height={200} alt="et"/>
            <h1><a href="./docs/inicio/Codigo-de-Etica-UJED.pdf">Código de Ética</a></h1>
        </div>
        <div className="lineamientos">
            <Image src={require("../../public/assets/3.png")}width={350}height={200} alt="lin"/>
            <h1><a href="./docs/inicio/Politicas-y-lineamientos-de-E-R.pdf">Políticas y lineamientos</a></h1>
            <h1><a href="./docs/inicio/reglamento-E-R-AprobadoUJED.pdf">Entrega Recepción</a></h1>
        </div>
    </div>
      </div>
    </div>
  )
}

export default HomePage
import Navbar from "@/components/Navbar"
import "../../globals.css"
import "../../styles/identidad.css"
import Image from "next/image"


function page() {
  return (
    <div>
      <Navbar/>
      <div className="container">
            <div className="banner">
            <img src="/assets/Identidad_banner 1.png"/>
            <div className="txt">
              <h1>Identidad</h1>
            </div>
          </div>
          <div className="contenedor">
            <div className="mision">
              <h1>Misión</h1>
              <p>Promover el mejoramiento de la gestión institucional, con un enfoque preventivo, correctivo y con apego a la legalidad; coadyuvando a la elevación de sus niveles de eficiencia, eficacia y efectividad, así mismo, impulsando la mejora continua de los procesos administrativos, así como de los servicios públicos que se ofrecen, a través de la detección de áreas de oportunidad, para que contribuya al logro de la misión de la institución.</p>
            </div>
            <span className="linea"></span>
            <div className="vision">
              <h1>Visión</h1>
              <p>Para el 2024, contar con un Sistema Integral Universitario de Calidad y Control Interno consolidado y reconocido por los universitarios, promoviendo el adecuado manejo de los riesgos y del establecimiento de controles, reforzando la transparencia de la gestión institucional de la UJED, así como el desempeño honesto, eficaz y eficiente de quien la conforma, que permita ser una administración moderna, con programas educativos acreditados y procesos certificados nacionales e internacionales que contribuyan al logro de la visión de la Institución.</p>
            </div>
          </div>
          <div className="separador"></div>
          <div className="politica">
            <img src="/assets/IMG_3833.JPG"/>
            <div className="pltc">
              <h1>Política de calidad</h1>
              <p>La Universidad Juárez del Estado de Durango acorde a su dirección estratégica está comprometida a ofrecer servicios académicos, de investigación, administrativos y culturales, de forma eficiente, oportuna, transparente y con objetivos de calidad definidos que contribuyan a satisfacer las necesidades y expectativas de nuestros usuarios y partes interesadas integrando sus procesos en un Sistema Universitario de Calidad y Control Interno, a través de la normatividad institucional aplicable y de la mejora continua soportada en la Norma ISO 9001 vigente y en el Marco Integrado de Control Interno (MICI).</p>
            </div>
          </div>
          <div className="separador"></div>
          <div className="objetivos">
          <div className="obj">
            <h1>Objetivos</h1>
            <h2>1. Proporcionar una seguridad razonable en el logro de objetivos y metas de la Institución dentro de las siguientes categorías:</h2>
            <p>I. Operación: Eficacia, eficiencia y economía de las operaciones, programas y proyectos, mediante la promoción de la estandarización y actualización de los procesos y sus controles procurando mejores resultados en cuanto a la calidad del servicio educativo.</p>
            <p>II. Información: Confiabilidad, veracidad, transparencia y oportunidad, de la información financiera, presupuestaria y de operación.</p>
            <p>III. Cumplimiento: Observancia del marco legal, reglamentario, normativo y administrativo aplicable a las Instituciones.</p>
            <h2>2. Fortalecer la competencia laboral del personal de la UJED.</h2>
            <h2>3. Fortalecer la vinculación institucional a través de acciones pertinentes de la difusión, extensión de los servicios, la cultura, el arte y el deporte.</h2>
            <h2>4. Incrementar la satisfacción de los usuarios en relación al servicio que ofrecen los procesos del Sistema Integral Universitario de Calidad y Control Interno.</h2>
          </div>
        <img src="/assets/DSC_0086.JPG"/>
          </div>
          <div className="separador"></div>
          <div className="valores">
            <h1>Valores institucionales</h1>
            <p>Los valores institucionales que debe preservar, cultivar y definir a cada universitario y que están presentes en la toma y ejecución de decisiones en el quehacer cotidiano, entre los que ratifica y promueve están:</p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="front">
                <img src="/assets/compromiso.png"/>
                <div className="texto-valor">
                  <h1>Compromiso</h1>
                </div>
              </div>
              <div className="back">
                <h1>Cumplir responsabilidades con cuidado y atención, llevar a cabo tareas y deberes con precisión, y ser cauteloso al tomar decisiones y actuar.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/IMG_0083.JPG"/>
                <div className="texto-valor">
                  <h1>Dignidad</h1>
                </div>
              </div>
              <div className="back">
                <h1>Integridad personal que implica autorespeto y respeto hacia los demás, evitando la degradación personal, lástima o humillación, así como la corrupción propia y ajena.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets//gratitud.png"/>
                <div className="texto-valor">
                  <h1>Gratitud</h1>
                </div>
              </div>
              <div className="back">
                <h1>La gratitud va más allá de decir gracias; implica reconocer cómo otros nos permiten crecer y contribuir a algo mayor.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/honestidad.png"/>
                <div className="texto-valor">
                  <h1>Honestidad</h1>
                </div>
              </div>
              <div className="back">
                <h1>Honestidad, objetividad, sinceridad y respeto hacia otras opiniones, además de coherencia entre pensamiento y acción.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/Humildad.png"/>
                <div className="texto-valor">
                  <h1>Humildad</h1>
                </div>
              </div>
              <div className="back">
                <h1>Autoconocimiento, aceptación de defectos y aprendizaje constante a partir de las experiencias.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/igualdad.png"/>
                <div className="texto-valor">
                  <h1>Igualdad</h1>
                </div>
              </div>
              <div className="back">
                <h1>Igualdad y dignidad para todas las personas, sin importar su origen étnico, orientación sexual, religión, condición social, discapacidad u otros factores.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/prudencia.png"/>
                <div className="texto-valor">
                  <h1>Prudencia</h1>
                </div>
              </div>
              <div className="back">
                <h1>Evaluar y gestionar riesgos, mostrando prudencia, cautela y moderación cuando se trata con personas desconocidas o situaciones inciertas.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/respeto.png"/>
                <div className="texto-valor">
                  <h1>Respeto</h1>
                </div>
              </div>
              <div className="back">
                <h1>Respetar a los demás, valorar la convivencia pacífica y tratar a otros como desearíamos ser tratados.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/sensibilidad.png"/>
                <div className="texto-valor">
                  <h1>Sensibilidad</h1>
                </div>
              </div>
              <div className="back">
                <h1>Sensibilidad hacia los demás, compasión, empatía, y habilidad para percibir necesidades y sentimientos sin necesidad de palabras.</h1>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/assets/tolerancia.png"/>
                <div className="texto-valor">
                  <h1>Tolerancia</h1>
                </div>
              </div>
              <div className="back">
                <h1>Como la capacidad de respetar los pensamientos, ideas y sentimientos de otras personas, sin importar que no coincidan o sean diferentes a los nuestros.</h1>
              </div>
            </div>
          </div>
          <div className="separador"></div>
            <div className="titulo">
              <h1>Directorio</h1>
            </div>
            <div className="direc-cont">
              <div className="foto">
                <img src="/assets/Rectangle 386.png"/>
                <h1>Rector</h1>
                <p>M.A. Rubén Solís Ríos</p>
              </div>
              <div className="foto">
                <img src="/assets/Dr.Sotelo.png"/>
                <h1>Secretario técnico de rectoria</h1>
                <p>Dr. Jesús  Guillermo Sotelo Asef</p>
              </div>
              <div className="foto">
                <img src="/assets/M.C Julio.png"/>
                <h1>Secretario general</h1>
                <p>M.C Julio Gerardo Lozoya Vélez</p>
              </div>
              <div className="foto">
                <img src="/assets/M.C. José.png"/>
                <h1>Subsecretario general académico</h1>
                <p>M.C. José Orthón Huerta Herrera</p>
              </div>
              <div className="foto">
                <img src="/assets/M.A.P. Keila.jpg"/>
                <h1>Directora de Desarrollo y Gestion de R.H </h1>
                <p>M.A.P. Keila Dalila Torres Cepeda </p>
              </div>
              <div className="foto">
                <img src="/assets/Dr. Enrique.png"/>
                <h1>Abogado general</h1>
                <p>Dr. Enrique Garcia Carranza </p>
              </div>
              <div className="foto">
                <img src="/assets/M.A Edla.png"/>
                <h1>Contralora general</h1>
                <p>M.A Edla Elena Wallander García</p>
              </div>
              <div className="foto">
                <img src="/assets/M.C.E. Rafael.jpg"/>
                <h1>Tesorero general</h1>
                <p>M.C.E. Rafael Reyes Tirado</p>
              </div>
              <div className="foto">
                <img src="/assets/Dr. Jesús.png"/>
                <h1>Director Institucional de Posgrado e investigacion</h1>
                <p>Dr. Jaime Fernández Escárzaga</p>
              </div>
              <div className="foto">
                <img src="/assets/Dr. Victor.png"/>
                <h1>Subsecretario general administrativo</h1>
                <p>Dr. Victor Manuel Aguilar Barraza </p>
              </div>
              <div className="foto">
                <img src="/assets/M.P.C.D. Linda.png"/>
                <h1>Directora de comunicacion social</h1>
                <p>M.P.C.D. Linda Cristal Rodriguez Simental</p>
              </div>
            </div>
          </div>
          <div className="separador"></div>
          <div className="mapeo">
            <h1>Mapeo General de Procesos</h1>
            <button><a href="https://drive.google.com/file/d/1diwefm-u638BmGTx6EnaO3jYlHfIjfAI/view?usp=drive_sharing">Ver mas</a></button>
          </div>
          <div className="separador"></div>
          <div className="estructura">
            <h1>Estructura organica UJED</h1>
            <div className="organigramas">
              <div className="org">
                <div className="popUp">
                  <div className="overlay" ></div>
                  <div className="content">
                    <div className="close-btn"></div>
                    <img src="../recursos/image 11.png"/>
                  </div>
                </div>
                <button className="show" >Organigrama general UJED</button>
              </div>
              <div className="org">
                <div className="popUp">
                  <div className="overlay" ></div>
                  <div className="content">
                    <div className="close-btn" ></div>
                    <img src="../recursos/image 12.png"/>
                  </div>
                </div>
                <button className="show">Organigrama de la contraloria general UJED</button>
              </div>
            </div>
          </div>
      </div>
  )
}

export default page
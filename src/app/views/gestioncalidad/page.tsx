import Navbar from "@/components/Navbar"
import "../../globals.css"
import "../../styles/gestioncalidad.css"


function page() {
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <img src="/assets/ujed12.jpg"/>
        <div className="txt">
            <h1>Sistema de Gestión de Calidad</h1>
        </div>
    </div>
    <div className="secc-1">
        <div className="text">
            <h1>¿Qué es el Sistema de Gestión de Calidad?</h1>
            <p>Es una herramienta empleada por las organizaciones que desean que sus productos y servicios cumplan con los máximos estándares de calidad y así lograr y mantener la satisfacción de sus clientes.</p>
        </div>
        <span className="line"></span>
        <div className="text">
            <h1>Alcance y Aplicabilidad</h1>
            <p>El enunciado del alcance del SGC es la descripción del alcance, de los productos y servicios principales que ofrece la Institución, incluyendo la aplicabilidad de los requisitos de la norma ISO 9001:2015. </p>
        </div>
    </div>
    <div className="secc-2">
        <div className="titulo">
            <h1>Procedimientos Documentados</h1>
            <p>Forma especificada de llevar a cabo una actividad o un proceso. Procedimientos mínimos que se deben disponer en el Sistema de Gestión de Calidad según la norma ISO 9001:2015. </p>
        </div>
        <div className="accordion-menu">
            <ul className="type-1">
                <li className="type-2">
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Solicitar e Integrar Información de Entrada para la Revisión por la Dirección</h2>
                    <p><a href="https://drive.google.com/file/d/1jkaelBp08pxUoDtr-IQhzbNEv769uVwX/view?usp=drive_sharing">Lineamientos para Solicitar e Integrar Información de Entrada para la Revisión por la Dirección</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Operación de la Alta Dirección y Comité de Calidad, Autoridad y Responsabilidad del SGC</h2>
                    <p><a href="https://drive.google.com/file/d/1KOPcxnOOZ2tYnUMuKvM9yMk_Uwx1aeXB/view?usp=drive_sharing">Lineamientos para la Operación de la Alta Dirección y Comité de Calidad, Autoridad y Responsabilidad del SGC</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Elaboración de Documentos</h2>
                    <p><a href="https://drive.google.com/file/d/10TeYHMCFk1h85c22vnvAipOB4MEA6K7X/view?usp=drive_sharing">P.7.5.2 Procedimiento de Elaboración de Documentos</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Control de Información Documentada</h2>
                    <p><a href="https://drive.google.com/file/d/1jLC2rL2KVBTV0ZVSn2_s6n8XkK9dQOls/view?usp=drive_sharing">P.7.5.3 Procedimiento de Control de Información Documentada Documentos</a></p>
                    <p><a href="https://drive.google.com/file/d/1reBwXhlzMzAbt2Re9rNdIIgvs47OXGOf/view?usp=drive_sharing">P.7.5.3 Procedimiento de Control de Información Documentada Registros</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Salidas No Conformes</h2>
                    <p><a href="https://drive.google.com/file/d/13HWMIaiptWoLhnJomHeXE5bXbgN7aG8K/view?usp=drive_sharing">P8.7 Procedimiento de Salidas No Conformes</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Auditorías Internas</h2>
                    <p><a href="https://drive.google.com/file/d/1RtXW_nqGhQQ3v0QxcgczHZtzWM9ndOeh/view?usp=drive_sharing">P9.2 Procedimiento de Auditorias Internas </a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Revisión por la Dirección</h2>
                    <p><a href="https://drive.google.com/file/d/1t4N8LJzf6ibBu8x8jgEmXldJtJNJfrkE/view?usp=drive_sharing">P9.3 Procedimiento de Revisión por la Dirección</a></p>
                </li>
                <li>
                    <input type="checkbox" checked/>
                    <i className="arrow"></i>
                    <h2>Acciones Correctivas</h2>
                    <p><a href="https://drive.google.com/file/d/1EMP0EUw75nO4AruPZY1VRkIpXERbpBzK/view?usp=drive_sharing">P10.2 Procedimiento de Acciones Correctivas </a></p>
                </li>
            </ul>
        </div>
    </div>
    <div className="banner">
        <img src="/assets/ujed13.jpg"/>
        <div className="txt">
            <h1>Registros del SGC</h1>
            <button type="button" className="pi-butt">Ver mas</button>
        </div>
    </div>
    <div className="secc-3">
        <h1>Registros del SGC</h1>
        <p>Los registros del sistema son las evidencias de las tareas realizadas en el sistema de gestión de la calidad. Además, los registros son la base en la que encuentran los datos para analizar el comportamiento y las mejoras de cada uno de los procesos del Sistema de Gestión de Calidad. </p>
    </div>
    <div className="banner">
        <img src="/assets/ujed14.jpg"/>
        <div className="txt">
            <h1>Áreas Certificadas</h1>
        </div>
    </div>
    <div className="secc-4">
        <h1>Áreas Culturales</h1>
        <div className="cont">
            <div className="item">
                <img src="/assets/IMG_8451.JPG"/>
                <h1><a className="sharing" href="https://www.ujed.mx/difusion-cultural">Difusión Cultural UJED</a></h1>
            </div>
            <div className="item">
                <img src="/assets/radio.jpg"/>
                <h1><a className="sharing" href="https://radio.ujed.mx">Radio UJED</a></h1>
            </div>
            <div className="item">
                <img src="/assets/libreria.jpg"/>
                <h1><a className="sharing" href="https://www.facebook.com/people/Libreria-UJED/100057190432005/?mibextid=ZbWKwL">Librería UJED</a></h1>
            </div>
            <div className="item">
                <img src="/assets/editorial.jpg"/>
                <h1><a className="sharing" href="https://editorial.ujed.mx">Editorial UJED</a></h1>
            </div>
            <div className="item">
                <img src="/assets/tv.jpg"/>
                <h1><a className="sharing" href="https://www.ujed.mx/television-universitaria">TV UJED</a></h1>
            </div>
            <div className="item">
                <img src="/assets/museo.jpg"/>
                <h1><a className="sharing" href="http://museo.ujed.mx">Museo Regional</a></h1>
            </div>
        </div>
    </div>
    <div className="banner">
        <img src="/assets/ujed15.jpg"/>
        <div className="txt">
            <h1>Áreas Administrativas</h1>
            <p>Unidad Central</p>
        </div>
    </div>
    <div className="cards">
        <div className="card">
          <div className="front">
            <img src="/assets/rectoria.jpg"/>
            <div className="texto-valor">
              <h1>Rectoría</h1>
            </div>
          </div>
          <div className="back">
            <li>Enlace Institucional Laguna</li>
            <li>Comunicación Social</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/secretaria-gral.jpg"/>
              <div className="texto-valor">
                <h1>Secretaría General</h1>
              </div>
          </div>
          <div className="back">
            <li>Dirección de Vinculación Institucional</li>
            <li>Dirección de Transformación Digital</li>
            <li>Dirección de Centro de Negocios</li>
            <li>Dirección de Servicios Escolares</li>
            <li>Dirección General de Bibliotecas</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/secretaria-tec.jpg"/>
            <div className="texto-valor">
              <h1>Secretaría Técnica</h1>
            </div>
          </div>
          <div className="back">
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/subsec-gral-aca.jpg"/>
            <div className="texto-valor">
              <h1>Subsecretaría General Académica</h1>
            </div>
          </div>
          <div className="back">
            <li>Dirección de Internacionalización</li>
            <li>Dirección de Planeación Institucional</li>
            <li>Dirección de Fortalecimiento de la Competitividad Académica</li>
            <li>Dirección de Servicios Educativos</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/subsec-gral-admin.jpg"/>
            <div className="texto-valor">
              <h1>Subsecretaría General Administrativa </h1>
            </div>
          </div>
          <div className="back">
            <li>Coordinación de Obras</li>
            <li>Coordinación de Compras</li>
            <li>Coordinación de Relaciones Publicas</li>
            <li>Coordinación de Correspondencia y Mensajería</li>
            <li>Coordinación de Servicios Generales</li>
            <li>Coordinación de Patrimonio y Control Vehicular</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/investigacion.jpg"/>
            <div className="texto-valor">
              <h1>Investigación y Posgrado</h1>
            </div>
          </div>
          <div className="back">
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/tesoreria.jpg"/>
            <div className="texto-valor">
              <h1>Tesorería General</h1>
            </div>
          </div>
          <div className="back">
            <li>Coordinación de Programación y Presupuesto</li>
            <li>Coordinación Ingresos</li>
            <li>Coordinación Egresos</li>
            <li>Coordinación Contable</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/contraloria.jpg"/>
            <div className="texto-valor">
              <h1>Contraloría General</h1>
            </div>
          </div>
          <div className="back">
            <li>Coordinación de Innovación y Gestión</li>
            <li>Coordinación de Auditorias</li>
            <li>Coordinación de Transparencia y Protección de Datos</li>
            <li>Coordinación de Calidad</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/abogado-gral.jpg"/>
            <div className="texto-valor">
              <h1>Abogado General</h1>
            </div>
          </div>
          <div className="back">
            <li>Coordinación General Jurídica</li>
            <li>Coordinación de Relaciones Laborales</li>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="/assets/difusion.jpg"/>
            <div className="texto-valor">
              <h1>Difusión Cultural</h1>
            </div>
          </div>
          <div className="back">
            <li>Editorial UJED</li>
            <li>Librería UJED</li>
            <li>Museo Regional</li>
            <li>Radio UJED</li>
            <li>TV UJED</li>
          </div>
        </div>
      </div>
    <div className="banner">
        <img src="/assets/ujed16.jpg"/>
        <div className="txt">
            <h1>Áreas Académicas</h1>
        </div>
    </div>
    <div className="secc-6">
        <div className="academia">
            <img src="/assets/fcq.jpeg"/>
            <h1><a href="https://fcq.ujed.mx">Facultad de Ciencias Químicas</a></h1>
        </div>
        <div className="academia">
            <img src="/assets/fts.jpg"/>
            <h1><a href="https://www.ujed.mx/facultad-de-trabajo-social">Facultad de Trabajo Social</a></h1>
        </div>
        <div className="academia">
            <img src="/assets/fcfa.jpg"/>
                <h1><a href="http://forestales.ujed.mx/forestales/es/">Facultad de Ciencas Forestales y Ambientales</a></h1>
        </div>
        <div className="academia">
            <img src="/assets/isim.jpg"/>
            <h1><a href="https://isima.ujed.mx">Instituto de Silvicultura e Industria de la Madera</a></h1>
        </div>
    </div>
    <div className="banner">
        <img src="/assets/ujed16.jpg"/>
        <div className="txt">
            <h1>Solicitud de Control de Documentos</h1>
            <button type="button" className="pi-butt">Solicitud</button>
        </div>
    </div>
    <div className="secc-7">
        <h1>Cursos Impartidos</h1>
        <p>Desde la Implementación del Sistema de Gestión de Calidad se ha tenido la oportunidad de impartir cursos y capacitar al personal que se encuentra al alcance del mismo. </p>
        <div className="cursos">
            <div className="curso">
                <div className="img-curso">
                    <img src="/assets/curso1.jpg"/>
                    <div className="texto-curso">
                        <h1>Curso: Herramienta para la Mejora Continua y la Solución de No Conformidades</h1>
                        <p>Año 2017</p>
                    </div>
                </div>
            </div>
            <div className="curso">
                <div className="img-curso">
                    <img src="/assets/DSC_0003.JPG"/>
                    <div className="texto-curso">
                        <h1>Curso: Reforzamiento de Prácticas de Auditoría</h1>
                        <p>Año 2017</p>
                    </div>
                </div>
            </div>
            <div className="curso">
                <div className="img-curso">
                    <img src="/assets/curso3.jpg"/>
                    <div className="texto-curso">
                        <h1>Curso: Gestión de Riesgos</h1>
                        <p>Año 2018</p>
                    </div>
                </div>
            </div>
            <div className="curso">
                <div className="img-curso">
                    <img src="/assets/curso4.jpeg"/>
                    <div className="texto-curso">
                        <h1>Curso: Formación de Líder del equipo Auditor del SIGC Norma ISO 19011-2011</h1>
                        <p>Año 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="banner">
        <img src="/assets/ujed18.jpg"/>
        <div className="txt">
            <h1>Certificados de Calidad</h1>
            <button type="button" className="pi-butt">Ver mas</button>
        </div>
    </div>
    <div className="secc-8">
        <h1>Implementación del Sistema de Gestión de Calidad</h1>
        <div className="time-line">
            <div className="izquierda">
                <div className="fecha">
                    <h1>2005-2009</h1>
                    <p>Norma ISO 9001:2000</p>
                </div>
                <div className="ima">
                    <h1>Sistema Integral de Gestión de Calidad</h1>
                    <p>Se conjuntan esfuerzos y se logra un mejor servicio para los usuarios, se estructuró e implementó un Sistema de Gestión de Calidad basado en la Norma ISO 9001:2008 y se integran en un solo Sistema Institucional llamado Sistema Integral de Gestión de Calidad (SIGC) de igual forma la biblioteca Central Universitaria se certificó como un Sistema Bibliotecario (SIBIB), posteriormente se incorporaron otras áreas de la Administración Central.</p>
                </div>
                <div className="fecha">
                    <h1>2017-2022</h1>
                    <p>Norma ISO 9001:2015</p>
                </div>
            </div>
            <div className="medio">
                <span className="linea"></span>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <span className="linea"></span>
                <i className="fa-solid fa-circle-arrow-left"></i>
                <span className="linea"></span>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <span className="linea"></span>
            </div>
            <div className="derecha">
                <div className="ima">
                    <h1>Implementación de la Norma ISO 9001</h1>
                    <p>Durante el periodo de 2005 a 2009 se certifican once áreas estratégicas con la norma ISO 9001:2000 con un total de 154 procesos administrativos, se inició con Biblioteca Central Universitaria a las cuales se fueron incorporando otras áreas de la Administración Central. Por lo tanto, la Universidad contaba con 11 Sistemas de Gestión de Calidad certificados. </p>
                </div>
                <div className="fecha">
                    <h1>Año 2010-2016</h1>
                    <p>Norma ISO 9001:2008</p>
                </div>
                <div className="ima">
                    <h1>Transición de la Norma ISO 9001 y Unificación</h1>
                    <p>En año 2017 se enfrentó una auditoría de transición con 6 Sistemas Certificados bajo la norma ISO 9001:2015, en el año 2019 se cambió de firma certificadora de ABS Group Services de México S.A. de C.V. a ARMS de México, S.A. de C.V. </p>
                    <p>En el año 2020 se dio inicio al Programa de Reingeniería Institucional de los procesos académicos administrativos, con base en la nueva Estructura Orgánica de la Universidad y en los lineamientos establecidos en el Plan de Desarrollo Institucional (PDI 2018-2024). </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page
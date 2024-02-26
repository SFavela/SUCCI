import Navbar from "@/components/Navbar"
import "../../globals.css"
import "../../styles/gestionriesgos.css"


function page() {
  return (
    <div>
      <Navbar/>
      <div className="banner">
      <img src="../recursos/1403814 1.png"/>
      <div className="txt">
          <h1>Gestión de Riesgos</h1>
      </div>
    </div>
  <div className="cards">
    <div className="card">
      <div className="front">
        <h1>Foda Institucional</h1>
      </div>
      <div className="back">
        <h1>La Matríz FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) posibilita un acercamiento estratégico, al generar un diagnóstico de la situación institucional al mismo tiempo que planifica tácticas para mejorar su situación.</h1>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <h1>Matriz de Necesidades y Expectativas de las Partes Interesadas Institucional</h1>
      </div>
      <div className="back">
        <h1>La Matriz de Necesidades y Expectativas de las Partes Interesadas Pertinentes permite determinar las cuestiones que impactan a su Sistema de Gestión de la Calidad identificadas interna y externamente.</h1>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <h1>Matriz de Administración de Riesgos (MAR) Institucional</h1>
      </div>
      <div className="back">
        <h1>La Administración de Riesgos, ayuda a los mandos superiores, medios y operativos de las instituciones del sector público a tener control sobre aquellos eventos que, en caso de materializarse, puedan afectar el desarrollo y funcionamiento de los procesos para alcanzar los objetivos que persigue la institución.</h1>
      </div>
    </div>
  </div>
  <div className="matrices">
    <div className="item">
      <img src="../recursos/"/>
      <h1><a href="../docs/gestionriesgos/AN無ISIS FODA RECTORIA 2021.pdf">FODA</a></h1>
    </div>
    <div className="item">
      <img src="../recursos/"/>
      <h1><a href="../docs/gestionriesgos/MATRIZ DE NECESIDADES Y EXPECTATIVAS DE LAS PARTES INTERESADAS INSTITUCIONAL.pdf">MNEPII</a></h1>
    </div>
    <div className="item">
      <img src="../recursos/"/>
      <h1><a href="https://docs.google.com/spreadsheets/d/1Cg2QcIaFsfgnRrcQka7sCNtnSche54S7GOsMZ_JCSF4/edit#gid=715774160">MAR</a></h1>
    </div>
  </div>
  <div className="obj">
    <div className="text">
      <h1>Los objetivos de la Gestión de Riesgos son:</h1>
      <p>Identificar, Controlar y Eliminar las fuentes del riesgo antes de que empiecen a afectar al cumplimiento de los objetivos del proyecto.</p>
    </div>
    <div className="img">
      <img src="../recursos/IMG_0327.JPG"/>
    </div>
    </div>
    </div>
  )
}

export default page
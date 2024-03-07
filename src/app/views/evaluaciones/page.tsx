import Navbar from "@/components/Navbar"
import "../../globals.css"
import "../../styles/evaluaciones.css"
import Link from "next/link"


function page() {
  return (
    <div>
      <Navbar/>
      <div className="banner">
      <img src="/assets/ujed10.jpg"/>
      <div className="txt">
          <h1>Evaluaciones</h1>
      </div>
      <div className="secc-1">
        <div className="img">
          <img src="/assets/Imagen 040.jpg"/>
        </div>
        <div className="text">
          <h1>¿Por qué es Importante Evaluarnos?</h1>
          <p>La evaluación es un proceso para medir el rendimiento laboral del trabajador, con el objeto de llegar a la toma de decisiones objetivas sobre los recursos humanos.</p>
          <p>La evaluación del trabajador, se convierte en un proceso para estimular o juzgar el valor, la excelencia y las cualidades del desempeño de un trabajador, es una herramienta de dirección, imprescindible en la actividad administrativa, ayuda a determinar políticas de recursos humanos adecuada a las necesidades de la organización.</p>
        </div>
      </div>
      <div className="secc-2">
        <div className="banner">
          <img src="/assets/ujed18.jpg"/>
          <div className="txt">
              <h1><a href="https://evalcaliso.ujed.mx/">EVALCALISO</a></h1>
              <button type="button" className="butt"><a href="">Ver mas</a></button>
          </div>
      </div>
      </div>
      <div className="secc-3">
        <h1>Evaluaciones</h1>
        <div className="eva">
          <ul>
            <li className="item_" id="clima">
              <svg viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <Link href={"/views/evaluaciones/encuestas/clima"}><p>Clima Laboral</p></Link>
            </li>
            <li className="item_" id="satis">
              <svg viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <Link href={"/views/evaluaciones/encuestas/satisfaccion"}><p>Satisfacción</p></Link>
            </li>
            <li className="item_ activo" id="comp">
              <svg viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <Link href={"/views/evaluaciones/encuestas/competencias"}><p>Desempeño</p></Link>
            </li>
            <li className="item_" id="infra">
              <svg viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <Link href={"/views/evaluaciones/encuestas/infraestructura"}><p>Infraestructura</p></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="secc-4">
        <h1>AUTOEVALUACIÓN CONTROL INTERNO</h1>
        <p>Conjunto de mecanismos de verificación y evaluación, que le permite a la Institución auto diagnosticar su situación de control, al proveer la información necesaria para establecer si este funciona efectivamente o si existen desviaciones en su operación que afecten el objetivo para el cual fue creado y determinan la calidad y efectividad de los controles internos a nivel de los procesos y de cada área organizacional responsable, permitiendo emprender las acciones de mejoramiento de control requerido.</p>
      </div>
      <div className="banner">
        <img src="/assets/ujed11.jpg"/>
        <div className="txt">
            <h1>Autoevaluaciones de Control Interno</h1>
            <button type="button" className="butt">Ver mas</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default page
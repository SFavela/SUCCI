import Navbar from "@/components/Navbar"
import "../../globals.css"
import "../../styles/controlinterno.css"


function page() {
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <img src="/assets/IMG_9425-1-scaled 1.png"/>
        <div className="txt">
            <h1>Control Interno</h1>
        </div>
      </div>
      <div className="cont">
        <div className="quees">
            <h1>¿Qué es?</h1>
            <p>Es una herramienta que aporta elementos para promover la consecución de los objetivos institucionales, reducir la probabilidad de ocurrencia de actos de corrupción y fraudes, minimizar los riesgos, integrar las tecnologías de información y comunicación a los procesos institucionales, respaldar la integridad y el comportamiento ético de los servidores públicos, así como ayudar en la rendición de cuentas y en la transparencia gubernamental.</p>
        </div>
        <span className="linea"></span>
        <div className="paraque">
            <h1>¿Para qué sirve?</h1>
            <p>El control interno conforma un sistema integral y continuo aplicable al entorno operativo de una institución que llevado a cabo por su personal, provee una seguridad razonable, más no absoluta, de que los objetivos de la institución serán alcanzados. 

                No es un evento único y aislado, sino una serie de acciones y procedimientos desarrollados y concatenados que se realizan durante el desempeño de las operaciones de una institución.</p>
        </div>
    </div>
    <div className="separador"></div>
    <div className="compo">
        <div className="comp-ci">
            <h1>Componentes de control interno</h1>
            <p>El Marco Integrado de Control Interno (MICI) define una estructura jerárquica de 5 componentes, 17 principios y diversos puntos de interés relevantes.</p>
            <p>Los componentes de Control Interno representan el nivel más alto en la jerarquía del MICI y los cuales deben ser diseñados e implementados adecuadamente y deben operar en conjunto y de manera sistémica, para que el control interno sea apropiado.</p>
            <p>Cada componente está asociado con principios que tienen características específicas, los cuales respaldan el diseño, implementación y operación de los componentes asociados de control interno y representan los requerimientos necesarios para establecer un control interno eficaz, eficiente, económico y suficiente conforme a la naturaleza, tamaño, disposiciones jurídicas y mandato de la Institución.</p>
        </div>
        <div className="img-comp">
            <img src="/assets/MUSEOREGIONALDEDURANGO 1.png"/>
        </div>
    </div>
    <div className="ambi">
        <div className="ambi-ctrl">
            <div className="ctrl-img">
                <img src="/assets/ambiente.png"/>
            </div>
            <div className="ambi-txt">
                <h1>1. Ambiente de control</h1>
                <p>Proporciona disciplina y estructura para apoyar al personal en la consecución de los objetivos institucionales, cabe mencionar que dicho componente es la base del Control Interno.</p>
                <p>Este componente está asociado a los principios que proporcionan la disciplina y estructura que impactan a la calidad de todo el control interno, los cuales son:</p>
            </div>
        </div>
        <div className="ambi-img">
            <div className="img-txt">
                <img src="/assets/1.1.png"/>
                <h1>1. Mostrar actitud de Respaldo y Compromiso</h1>
            </div>
            <div className="img-txt">
                <img src="/assets/1.2.png"/>
                <h1>2. Ejercer la Responsabilidad de Vigilancia</h1>
            </div>
            <div className="img-txt">
                <img src="/assets/1.3.png"/>
                <h1>3. Establecer la Estructura, Responsabilidad y Autoridad</h1>
            </div>
            <div className="img-txt">
                <img src="/assets/4.png"/>
                <h1>4. Demostrar Compromiso con la Competencia Profesional</h1>
            </div>
            <div className="img-txt">
                <img src="/assets/5.png"/>
                <h1>5. Establecer la Estructura para el Reforzamiento de la Rendición de Cuentas</h1>
            </div>
        </div>
    </div>
    <div className="admin">
        <div className="admin-1">
            <div className="admin-txt">
                <h1>2. Administración de riesgos</h1>
                <p>Después de haber establecido un ambiente de control efectivo, la Administración debe evaluar los riesgos que enfrenta la Institución para el logro de sus objetivos. Para lo cual, debe identificarlos, analizarlos, catalogarlos, priorizarlos y desarrollar respuestas que mitiguen su impacto.</p>
                <p>Los principios para vigilar la evaluación de los riesgos que amenazan el logro de objetivos, incluyendo el impacto potencial de los cambios significativos, la corrupción, el fraude y la elusión de controles por parte de cualquier servidor público, son:</p>
            </div>
            <div className="admin-img">
                <img src="/assets/20170323_145246-scaled 1.png"/>
            </div>
        </div>
        <div className="admin-2">
            <div className="admn-img">
                <img src="/assets/2.1.png"/>
                <h1>6. Definir Objetivos y Tolerancias al Riesgo</h1>          
            </div>
            <div className="admn-img">
                <img src="/assets/2.2.png"/>
                <h1>7. Identificar, Analizar y Responder a los Riesgos</h1>
            </div>
            <div className="admn-img">
                <img src="/assets/2.3.png"/>
                <h1>8. Considerar el Riesgo de Corrupción</h1>
            </div>
            <div className="admn-img">
                <img src="/assets/2.4.png"/>
                <h1>9. Identificar, Analizar y Responder al Cambio</h1>
            </div>
        </div>
    </div>
    <div className="act-ctrl">
        <div className="act-ctrl-1">
            <div className="act-imgs">
                <img src="/assets/image-14.png"/>
            </div>
            <div className="act-txt">
                <h1>3. Actividades de control</h1>
                <p>Son las acciones que establece la Administración mediante políticas y procedimientos para alcanzar los objetivos y responder a los riesgos en el control interno, lo cual incluye los sistemas de información institucional. Este componente está asociado a los principios:</p>
            </div>
        </div>
        <div className="act-ctrl-2">
            <div className="act-img">
                <img src="/assets/3.1.png"/>
                <h1>10. Diseñar Actividades de Control</h1>
            </div>
            <div className="act-img">
                <img src="/assets/3.2.png"/>
                <h1>11. Implementar Actividades de Control</h1>
            </div>
            <div className="act-img">
                <img src="/assets/3.3.png"/>
                <h1>12. Diseñar Actividades para los Sistemas de Información</h1>
            </div>
        </div>
    </div>
    <div className="info-comu">
        <div className="inf-1">
            <div className="info-txt">
                <h1>4. Información y comunicación</h1>
                <p>La Administración genera, obtiene, utiliza y comunica información de calidad para respaldar el Sistema de Calidad y Control Interno(SUCCI).</p>
                <p>La Administración requiere tener acceso a comunicaciones relevantes y confiables en relación con los eventos internos y externos, así como analizar y discutir la información relativa al logro de los objetivos institucionales. Los principios relacionados con este componente son:</p>
            </div>
            <div className="info-img">
                <img src="/assets/image 15.png"/>
            </div>
        </div>
        <div className="inf-2">
            <div className="inf-img">
                <img src="/assets/3.1.png"/>
                <h1>13. Usar Información de Calidad</h1>
            </div>
            <div className="inf-img">
                <img src="/assets/3.2.png"/>
                <h1>14. Comunicar Internamente</h1>
            </div>
            <div className="inf-img">
                <img src="/assets/3.3.png"/>
                <h1>15. Comunicar Externamente</h1>
            </div>
        </div>
        <div className="super">
            <div className="sup-1">
                <div className="sup-img">
                    <img src="/assets/supervision.png"/>
                </div>
                <div className="sup-txt">
                    <h1>5. Supervisión</h1>
                    <p>Este componente es esencial para asegurar que el control interno se mantiene alineado con los objetivos institucionales, el entorno operativo, las disposiciones jurídicas aplicables, los recursos asignados y los riesgos asociados al cumplimiento de los objetivos, todos ellos en constante cambio.</p>
                    <p>La supervisión permite evaluar la calidad del desempeño en el tiempo y asegura que los resultados de las autoevaluaciones al Control Interno, así como de las auditorias de Calidad, se atiendan con prontitud. Este componente está asociado con los dos últimos principios de Control Interno, los cuales son:</p>                </div>
            </div>
            <div className="sup-2">
                <div className="sup-imgs">
                    <img src="/assets/3.1.png"/>
                    <h1>16. Realizar Actividades de Supervisión</h1>
                </div>
                <div className="sup-imgs">
                    <img src="/assets/3.2.png"/>
                    <h1>17. Evaluar los Problemas y Corregir las Deficiencias</h1>
                </div>
            </div>
        </div>
    <div className="comites">
        <h1>Comités de control interno</h1>
    </div>
    <div className="cocodi">
        <div className="coco-1">
            <h1>Comité de Control y Desempeño Institucional (COCODI)</h1>
            <p>Se constituye el “Comité de Control y Desempeño Institucional” con el propósito de contribuir al cumplimiento oportuno de las metas y objetivos institucionales con un enfoque a resultados. Así mismo, contribuir a la administración de riesgos institucionales con el análisis y seguimiento de las estrategias y acciones de control de riesgos, de tal manera que se analicen los resultados obtenidos ya sean operativos, financieros, presupuestarios y administrativos.</p>
            <p>Impulsando el establecimiento y actualización del Sistema Universitario de Calidad y Control Interno, con el seguimiento permanente a la implementación de sus componentes, principios y elementos de control, así como a las acciones de mejora comprometidas en el Programa de Trabajo de Control Interno (PTCI) y acciones de control del Programa de Trabajo de Administración de Riesgos (PTAR).</p>
        </div>
        <div className="coco-2">
            <div className="coco-item">
                <img src="/assets/Estructura.png"/>
                <h1><a href="https://drive.google.com/file/d/1-FR3g2CjFKLbeEqFk1uJPFqvJHlVx3po/view?usp=drive_sharing" >Estructura</a></h1>
            </div>
            <div className="coco-item">
                <img src="/assets/Directorio.png"/>
                <h1><a href="https://drive.google.com/file/d/1aMImzungw8_YtzZNS1a9Yw-h2Pqkg3Qf/view?usp=drive_sharing" >Directorio</a></h1>
            </div>
            <div className="coco-item">
                <img src="/assets/Lineamientos.png"/>
                <h1><a href="https://drive.google.com/file/d/1vLdLbZjnTojdlchHpX7zb7kfs-qFd7u_/view?usp=drive_sharing" >Lineamientos</a></h1>
            </div>
            <div className="coco-item">
                <img src="/assets/Programa anual de trabajo.png"/>
                <h1><a href="https://drive.google.com/file/d/15-t39QManasPSW2akrm1wsd4JtWEtTRg/view?usp=drive_sharing" >Programa anual de trabajo</a></h1>
            </div>
            <div className="coco-item">
                <img src="/assets/Sesiones.png"/>
                <h1>Sesiones</h1>
            </div>
            <div className="coco-item">
                <img src="/assets/Informes.png"/>
                <h1>Informes</h1>
            </div>
        </div>
    </div>
    <div className="CAR">
        <div className="car-1">
            <h1>Comité de Administracion de Riesgos (CAR)</h1>
            <p>Se constituye el “Comité de Administración de Riesgos” con el propósito de que las Unidades Responsables participen de manera integrada para contextualizar, identificar, analizar, evaluar, responder, supervisar y comunicar los riesgos, incluidos los de corrupción, inherentes o asociados a los procesos por los cuales se logra el mandato de la Universidad, mediante el análisis de los distintos factores que pueden provocarlos, con la finalidad de definir las estrategias y acciones que permitan mitigarlos y asegurar el logro de metas y objetivos institucionales de una manera razonable, en términos de eficacia, eficiencia y economía en un marco de transparencia y rendición de cuentas.</p>
        </div>
        <div className="car-2">
            <div className="car-item">
                <img src="/assets/Estructura.png"/>
                <h1><a href="https://drive.google.com/file/d/1WruQVxnNidvwyqG5p4TNwD9eq2s_zFY1/view?usp=drive_sharing">Estructura</a></h1>
            </div>
            <div className="car-item">
                <img src="/assets/Directorio.png"/>
                <h1><a href="https://drive.google.com/file/d/1gsAJWbfR5HRg6SwFRrefFIN80ZlnAUqS/view?usp=drive_sharing">Directorio</a></h1>
            </div>
            <div className="car-item">
                <img src="/assets/Lineamientos.png"/>
                <h1><a href="https://drive.google.com/file/d/1e3QCwjhwNnMHOV6h3OBn_m7jMTIiujcx/view?usp=drive_sharing">Lineamientos</a></h1>
            </div>
            <div className="car-item">
                <img src="/assets/Programa anual de trabajo.png"/>
                <h1><a href="https://drive.google.com/file/d/1wPgrJZNnIb_uQOA48F9ay69nxsECe8oY/view?usp=drive_sharing" >Programa anual de trabajo</a></h1>
            </div>
            <div className="car-item">
                <img src="/assets/Sesiones.png"/>
                <h1>Sesiones</h1>
            </div>
            <div className="car-item">
                <img src="/assets/Informes.png"/>
                <h1>Informes</h1>
            </div>
        </div>
    </div>
    <div className="CEI">
        <div className="cei-1">
            <h1>Comité de Ética e Integridad (CEI)</h1>
            <p>Se constituye el “Comité de Ética e Integridad” con el propósito de contribuir al adecuado funcionamiento del control interno institucional y al cumplimiento oportuno de las metas y objetivos institucionales con un enfoque a resultados, a través de estrategias y líneas de acción que permitan fomentar la ética e integridad en el servicio público y la prevención de conflictos de interés a través de acciones de orientación, capacitación y difusión de la Universidad Juárez del Estado de Durango, impulsando el establecimiento y actualización del Sistema Universitario de Calidad y Control Interno.</p>
        </div>
        <div className="cei-2">
            <div className="cei-item">
                <img src="/assets/Estructura.png"/>
                <h1><a href="https://drive.google.com/file/d/1hw5xRKo-vweHNRcwZhInaWjvDKe9Ubje/view?usp=drive_sharing" >Estructura</a></h1>
            </div>
            <div className="cei-item">
                <img src="/assets/Directorio.png"/>
                <h1><a href="https://drive.google.com/file/d/1X4OjNkVgMZ3LtUDvrfxpaP8I2fXi2Hrh/view?usp=drive_sharing" >Directorio</a></h1>
            </div>
            <div className="cei-item">
                <img src="/assets/Lineamientos.png"/>
                <h1><a href="https://drive.google.com/file/d/1PNsafb7tsYTUjgLYN3kIZKR6qrTlPWXk/view?usp=drive_sharing" >Lineamientos</a></h1>
            </div>
            <div className="cei-item">
                <img src="/assets/Programa anual de trabajo.png"/>
                <h1><a href="https://drive.google.com/file/d/1W43GovFKCJisKLbZrb4a8EuAehcuGRe_/view?usp=drive_sharing" >Programa anual de trabajo</a></h1>
            </div>
            <div className="cei-item">
                <img src="/assets/Sesiones.png"/>
                <h1>Sesiones</h1>
            </div>
            <div className="cei-item">
                <img src="/assets/Informes.png"/>
                <h1>Informes</h1>
            </div>
        </div>
    </div>
    <div className="CTIC">
        <div className="cti-1">
            <h1>Comité de Tecnologías de la Información y Comunicaciones (CTICS)</h1>
            <p>Se constituye el “Comité de Tecnologías de la Información y Comunicaciones” el cual tiene a bien atender todas y cada una de las necesidades de la Universidad con criterios de racionalidad, austeridad y disciplina presupuestaria, políticas y normas de eficiencia y productividad, a través de estrategias y líneas de acción que permitan identificar, atender, evaluar y controlar la información relacionada con los procesos operativos y la cual esté disponible de la forma más oportuna y confiable para la misma Universidad, que coadyuve en la coordinación de los servicios informáticos y en el seguimiento a los diversos proyectos, planes e iniciativas de desarrollo.</p>
        </div>
        <div className="cti-2">
            <div className="cti-item">
                <img src="/assets/Estructura.png"/>
                <h1><a href="https://drive.google.com/file/d/1srtD8LFRCSNykYG5aeuREEF0AU0L5OxT/view?usp=drive_sharing" >Estructura</a></h1>
            </div>
            <div className="cti-item">
                <img src="/assets/Directorio.png"/>
                <h1><a href="https://drive.google.com/file/d/1t0pGsQfqTkN9HO0nAqG5YJiEgWXNprbP/view?usp=drive_sharing" >Directorio</a></h1>
            </div>
            <div className="cti-item">
                <img src="/assets/Lineamientos.png"/>
                <h1><a href="https://drive.google.com/file/d/1vZkYTF856iOUOT0EjrO51et8pd82Gf5K/view?usp=drive_sharing" >Lineamientos</a></h1>
            </div>
            <div className="cti-item">
                <img src="/assets/Programa anual de trabajo.png"/>
                <h1><a href="https://drive.google.com/file/d/1LI2TbZBaKA1H2ZHdYGnI9T-ff0rk0hxj/view?usp=drive_sharing" >Programa anual de trabajo</a></h1>
            </div>
            <div className="cti-item">
                <img src="/assets/Sesiones.png"/>
                <h1>Sesiones</h1>
            </div>
            <div className="cti-item">
                <img src="/assets/Informes.png"/>
                <h1>Informes</h1>
            </div>
        </div>
    </div>
    <div className="manual">
        <div className="manu-ci">
            <h1>Manual de Control Interno</h1>
            <p>La Universidad Juárez del Estado de Durango (UJED), en su carácter de ente público como órgano autónomo y en el marco de su compromiso histórico con la sociedad duranguense de educar con excelencia a sus hombres y mujeres, ha establecido que la operación y funcionamiento mediante todos sus procesos tanto operativos como administrativos, se desempeñen buscando siempre el desarrollo armónico en todos los aspectos de la vida universitaria, con total transparencia y rendición de cuentas.</p>
        </div>
        <div className="manual-img">
            <img src="/assets/2021-02-26-Manual-SUCI-Konny-001 1.png"/>
        </div>
    </div>
    </div>
  </div>
  )
}

export default page
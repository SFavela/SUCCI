import Navbar from '@/components/Navbar'
import "../../../globals.css"
import "./evalcaliso.css"

function page() {
  return (
    <div>
        <Navbar/>
        <div className="titulo">
            <h1>EVALCALISO</h1>
        </div>
    <div className="card-container">
		<div className="card">
			<div className="card-details">
				<p className="text-title">El contexto de la organización conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">El liderazgo conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">La planificación conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">El apoyo conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">La operación conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">La evaluación conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button" >Ver mas</button>
		</div>
		<div className="card">
			<div className="card-details">
				<p className="text-title">La mejora conforme a la ISO 9001:2015</p>
			</div>
			<button className="card-button">Ver mas</button>
		</div>
	</div>
    </div>
  )
}

export default page
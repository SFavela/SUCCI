"use client"

import axios, { AxiosError} from "axios"
import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image"
import logo from "@/app/img/logo-login.png"
import "../styles/register.css"
import { faBuilding, faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons"

function RegisterPage() { 

    const [error, setError] = useState();
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const signupResponse = await axios.post("/api/auth/signup", {
                nombre: formData.get("nombre"),
                apellidoPaterno: formData.get("apellidoPaterno"),
                apellidoMaterno: formData.get("apellidoMaterno"),
                matricula: formData.get("matricula"),
                area: formData.get("area"),
                adscripcion: formData.get("adscripcion"),
                correoElectronico: formData.get("correoElectronico"),
                contrasena: formData.get("contrasena"),
            });
            console.log(signupResponse);

            
            const res = await signIn('credentials',{
                correoElectronico: signupResponse.data.correoElectronico,
                contrasena: formData.get('contrasena'),
                redirect:false,
            });

            if (res?.ok) return router.push('/dashboard');

            console.log(res);

        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
        }

    }

    return (
        <body>
            {error && <div className="error">{error}</div>}
            <div className="login">
                <div className="form">
                <Link href={'/'}><button className="button">
                    <div className="button-box">
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                            </svg>
                        </span>
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path></svg>
                        </span>
                    </div>
                </button></Link>
                <form onSubmit={handleSubmit} className="registro">
                    <div className="login__field">
                        <FontAwesomeIcon className="login__icon" icon={faUser}/>
                        <input className="login__input" type="text" placeholder="Nombre" name="nombre" />
                    </div>
                    <div className="login__field">
                    <FontAwesomeIcon className="login__icon" icon={faUser}/>
                        <input className="login__input" type="text" placeholder="Apellido Paterno" name="apellidoPaterno" />
                    </div>
                    <div className="login__field">
                    <FontAwesomeIcon className="login__icon" icon={faUser}/>
                        <input className="login__input" type="text" placeholder="Apellido Materno" name="apellidoMaterno" />
                    </div>
                    <div className="login__field">
                    <FontAwesomeIcon className="login__icon" icon={faBuilding}/>
                        <input className="login__input" type="text" placeholder="Matrícula"  name="matricula" />
                    </div>
                    <div className="login__field">
                        <FontAwesomeIcon className="login__icon" icon={faBuilding}/>
                        <select className="login__input" name="area">
                            <option value="" disabled selected>Seleccione una opción</option>
                            <option value="area1">Dirección de Desarrollo y Gestión de Recursos Humanos</option>
                            <option value="area2">Coordinación de Obras</option>
                            <option value="area3">Coordinación de Compras</option>
                            <option value="area4">Coordinación de Relaciones Públicas</option>
                            <option value="area5">Coordinación de Correspondencia y Mensajería</option>
                            <option value="area6">Coordinación de Servicios Generales</option>
                            <option value="area7">Coordinación de Patrimonio y Control Vehicular</option>
                            <option value="area8">Coordinación General de Archivo</option>
                            <option value="area9">Dirección de Difusión Cultural</option>
                            <option value="area10">Editorial UJED</option>
                            <option value="area11">Librería UJED</option>
                            <option value="area12">Museo Regional UJED</option>
                            <option value="area13">Radio UJED</option>
                            <option value="area14">TV UJED</option>
                            <option value="area15">Centro de Desarrollo del Deporte Universitario</option>
                            <option value="area16">Dirección de Vinculación Institucional</option>
                            <option value="area17">Dirección de Transformación Digital</option>
                            <option value="area18">Dirección de Centro de Negocios</option>
                            <option value="area19">Dirección de Servicios Escolares</option>
                            <option value="area20">Dirección General de Bibliotecas</option>
                            <option value="area21">Facultad de Ciencias Forestales y Ambientales</option>
                            <option value="area22">Facultad de Trabajo Social</option>
                            <option value="area23">Facultad de Ciencias Químicas</option>
                            <option value="area24">Instituto de Bellas Artes</option>
                        </select>
                    </div>
                    <div className="login__field">
                        <FontAwesomeIcon className="login__icon" icon={faBuilding}/>
                        <select className="login__input" name="adscripcion">
                            <option value="" disabled selected>Seleccione una opción</option>
                            <option value="ads1">Rectoría</option>
                            <option value="ads2">Secretaría General</option>
                            <option value="ads3">Subsecretaría General Académica</option>
                            <option value="ads4">Subsecretaría General Administrativa</option>
                            <option value="ads5">Comunicación Social</option>
                            <option value="ads6">Investigación y Posgrado</option>
                            <option value="ads7">Abogado General</option>
                            <option value="ads8">Tesorería General</option>
                            <option value="ads9">Contraloría</option>
                            <option value="ads10">Difusión Cultural</option>
                            <option value="ads11">Facultad de Ciencias Forestales y Ambientales</option>
                            <option value="ads12">Facultad de Trabajo Social</option>
                            <option value="ads13">Facultad de Ciencias Químicas</option>
                            <option value="ads14">Instituto de Bellas Artes</option>
                        </select>
                    </div>
                    <div className="login__field">
                    <FontAwesomeIcon className="login__icon" icon={faEnvelope}/>
                        <input className="login__input" type="mail" placeholder="Correo Electrónico"  name="correoElectronico" />
                    </div>
                    <div className="login__field">
                    <FontAwesomeIcon className="login__icon" icon={faKey}/>
                        <input className="login__input" type="password" placeholder="Contraseña"  name="contrasena" />
                    </div>
                    <button className="login__submit">
                        <span className="button_text">Crear cuenta</span>
                    </button>
                    <p className="switch-form">¿Ya tienes cuenta?<span className="login-link"><Link href={'../login'}>Inicar Sesión</Link></span></p>
                </form>
                </div>
                <div className="logo">
                    <Image src={logo} width={528} height={209} alt="logoujed"/>
                    <h1>Sistema Universitario de Calidad y Control Interno</h1>
                </div>
            </div>
        </body>
    )
}

export default RegisterPage
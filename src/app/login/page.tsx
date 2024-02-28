"use client"

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/login.css"
import Image from "next/image"
import logo from "@/app/img/logo-login.png"
import { faHouse, faKey, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import '../globals.css'

function LoginPage() {

    const [error, setError] = useState("");
    const router = useRouter()
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await signIn('credentials',{
            correoElectronico: formData.get('correoElectronico'),
            contrasena: formData.get('contrasena'),
            redirect:false,
        });

        if (res?.error) return setError(res.error as string);

        if (res?.ok) return router.push('/dashboard');

        console.log(res);
    };

    return ( 
        <body>
            {error && <div className="error">{error}</div> }
            <div className="login">
                <div className="logo">
                    <Image src={logo} width={528} height={209} alt="logoujed"/>
                    <h1>Sistema Universitario de Calidad y Control Interno</h1>
                </div>
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
                    <form onSubmit={handleSubmit} className="log-in"> 
                        <div className="login__field">
                            <FontAwesomeIcon className="login__icon" icon={faUser}/>
                            <input className="login__input" type="mail" placeholder="Correo Electrónico"  name="correoElectronico" />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon className="login__icon" icon={faKey}/>
                            <input className="login__input" type="password" placeholder="Contraseña"  name="contrasena" />
                        </div>
                        <button className="login__submit">
                            <span className="button_text">Iniciar Sesión</span>
                        </button>
                        <p className="switch-form">¿No tienes una cuenta?<span className="register-link"><Link href={"../register"}>Registrate</Link></span></p>
                    </form>
                </div>
            </div>
        </body>
    )
}

export default LoginPage;
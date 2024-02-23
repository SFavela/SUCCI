"use client"

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/login.css"
import Image from "next/image"
import logo from "@/app/img/logo-login.png"
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

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
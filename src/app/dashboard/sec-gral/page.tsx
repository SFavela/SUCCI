"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./sec-gral.css"
import { useSession } from "next-auth/react"


function SecretariaGeneralPage() {
    const {data: session, status} = useSession(); 
    console.log(session, status);

    const renderCards = () => {
        switch(session?.user.subrole) {
            case 'DVI':
                return (
                    <div className="card">
                        <p className="card__title">Dirección de Vinculación Institucional</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1w-bPDvXgzlu7aJKsLJR_JEQvc7H3wi7J/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'DTD':
                return (
                    <div className="card">
                        <p className="card__title">Dirección de Transformación Digital</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1qox1_65Wi_69fpkVSPyJIBvjVgOJGbIU/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="https://docs.google.com/document/d/1Pri3X6i9vnGb7IFgSgCllsWN6EK81Jur/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'DCN':
                return (
                    <div className="card">
                        <p className="card__title">Dirección de Centro de Negocios</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1pWGbEvY2HLf1CNPqfMm5WbQOovOMj_Ql/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="https://docs.google.com/document/d/1qDRqo6ZPYCg4v08_gil7n5Abosh4Ygwd/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'DSE':
                return (
                    <div className="card">
                        <p className="card__title">Dirección de Servicios Escolares</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1PUiUkpowlKVadcUSwRwxgDyVoZf1UU5d/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="https://docs.google.com/document/d/1FE79wxqZPbUv2KEZOpAA8tX0fgEldRX_/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>            
                        </div>
                    </div>
                );
            case 'DGB':
                return (
                    <div className="card">
                        <p className="card__title">Dirección General de Bibliotecas</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1NGRVP3d_QdybtBtglGBSBzCByRQDugn1/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="https://docs.google.com/document/d/15x85fvGPtLVyT3EgnvboLI-n3D5H2vmV/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>            
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Secretaría General</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/1HRxITEFgKvYm9BGskiCTaJ2rb5SyHj2V/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                <p className="card__description"><a href="https://docs.google.com/document/d/1NumprbDMfI5f2hsXszXmsmEJdZ5X_7vN/edit?usp=drive_sharing&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
                <p className="card__description"><a href="./">FODA</a></p>
                <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                <p className="card__description"><a href="./">Otros</a></p>
            </div>
        </div>
        {renderCards()}
	</div>
    </body>
)
}

export default SecretariaGeneralPage
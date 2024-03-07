"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./sub-sec-admin.css"
import { useSession } from "next-auth/react"


function SubSecAdminPage() {
    const {data: session, status} = useSession();
    console.log(session, status);

    const renderCards = () => {
        switch(session?.user.subrole) {
            case 'DDGRH':
                return (
                    <div className="card">
                        <p className="card__title">Dirección de Desarrollo y Gestión de Recursos Humanos</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1iNJbMp-o5Kej3600tFmTNGbIRjn8SM0s/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'CO':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Obras</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1O00GZO9TDmrophvvMDKnSmGhderqPlSC/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'CC':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Compras</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1x7YtZflbQBvjv03yullLoY7mhDS3n6xl/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>
                        </div>
                    </div>
                );
            case 'CRP':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Relaciones Públicas</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://drive.google.com/file/d/1wP6IsyxQSRO32NSxScQ0kKrpkgfguC7j/view?usp=drive_link">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>            
                        </div>
                    </div>
                );
            case 'CCM':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Correspondencia y Mensajería</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1PXVsONUq2bUJ6dDNleWRoNYvidUs1iKf/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>            
                        </div>
                    </div>
                );
            case 'CSG':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Servicios Generales</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1gNOMtxtH5qB_iVtoiORWm3-jUH2fRdZ8/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="./">Manual de Procedimientos</a></p>
                            <p className="card__description"><a href="./">FODA</a></p>
                            <p className="card__description"><a href="./">Matriz de Necesidades y Expectativas de las Partes Interesadas</a></p>
                            <p className="card__description"><a href="./">Otros</a></p>            
                        </div>
                    </div>
                );
            case 'CPCV':
                return (
                    <div className="card">
                        <p className="card__title">Coordinación de Patrimonio y Control Vehicular</p>
                        <div className="card__content">
                            <p className="card__description"><a href="https://docs.google.com/document/d/1XIK6DZEUsCoG8-XLmyhoLnuv2-m3BdMS/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
                            <p className="card__description"><a href="https://docs.google.com/document/d/1olnlHNtchqkbfTvGZCvtpylOWk_TW9EA/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
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
            <p className="card__title">Subsecretaría General Administrativa</p>
            <div className="card__content">
                <p className="card__description"><a href="./">Manual de Organización</a></p>
                <p className="card__description"><a href="https://docs.google.com/document/d/11RBvDruRwZ_TiO9U5RjZUSzlgbCXoAo_/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Procedimientos</a></p>
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

export default SubSecAdminPage
"use client"

import { useSession } from "next-auth/react"
import Navbar_dashboard from "@/components/navbar_dashboard";
import '@/app/globals.css'
import styles from "../styles/dashboard.module.css"
import Link from "next/link";

function DashboardPage() {

    const { data: session, status } = useSession();

    console.log(session, status);

    return (
        <body>
            <Navbar_dashboard/>
            <div className={styles.container}>
                <Link href={"/dashboard/rectoria"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase">
                        Rectoría
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/sec-gral"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Secretaría General
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/subsecaca"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Subsecretaría General Académica
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/subsecadmin"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Subsecretaría General Administrativa
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/contra-gral"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Contraloría General
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/tesoreria"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Tesorería General
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/abogado"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Abogado General
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/difusion"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Difusión Cultural
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/fcfa"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Facultad de Ciencias Forestales y Ambientales
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/fcq"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Facultad de Ciencias Químicas
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/fts"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Facultad de Trabajo Social
                    </div>
                </div>
                </Link>
                <Link href={"/dashboard/bellasartes"}>
                <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white">
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-800 transition-all duration-500"></div>
                    <div className="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-800 transition-all duration-500">
                        Ver mas
                    </div>
                    <div className="w-full h-full items-center justify-center flex uppercase text-center">
                        Instituto de Bellas Artes
                    </div>
                </div>
                </Link>
            </div>
        </body>
    )
}

export default DashboardPage
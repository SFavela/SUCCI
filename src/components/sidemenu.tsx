"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const SideBar = () => {
    const [open, setOpen] = useState(false)
    return (
    <div className='z-50'>
        <button className='mr-4 text-white z-10' onClick={() => setOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
        <div className={`${open ? "w-80" : "w-0"} bg-rose-700 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
            <div className={`${!open && "hidden"} pt-3`}>
                <button className='ml-4 text-white mb-14 z-10' onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Link href="/"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Inicio</div></Link>
                <Link href="/views/identidad"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Identidad</div></Link>
                <Link href="/views/normatividad"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Normatividad</div></Link>
                <Link href="/views/controlinterno"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Control Interno</div></Link>
                <Link href="/views/gestioncalidad"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Gestion de Calidad</div></Link>
                <Link href="/views/evaluaciones"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Evaluaciones</div></Link>
                <Link href="/views/gestionriesgos"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Gestion de Riesgos</div></Link>
                <Link href="/"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Gestion de Indicadoresd</div></Link>
                <Link href="/login"><div className='text-center text-white text-xl hover:bg-red-800 cursor-pointer py-3 mb-2 z-10'>Acceder</div></Link>
            </div>
        </div>
    </div>
)
}

export default SideBar
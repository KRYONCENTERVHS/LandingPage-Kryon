"use client";

import dynamic from "next/dynamic";


const VisorPDF = dynamic(() => import("../../components/visualizador"), {
  ssr: false,
});

export default function VisualizadorPage(){
    return (
        <div>   
            <div className="flex justify-center w-auto h-auto p-30">
                <div className="grid grid-cols-3 grid-rows-2 mt-32">
                    <h1 className="col-span-3 text-4xl font-bold text-center mb-5">Presentaciones Disponibles</h1>
                    <div className="col-span-3 row-span-2">
                        <h2 className="text-2xl font-semibold text-center mb-1">Presentación Corporativa</h2>
                        <p className="text-center mb-8">Descarga nuestra presentación corporativa en formato PPTX para conocer más sobre nuestros servicios y valores.</p>
                        <div className="flex justify-center mb-8">
                            <a
                                href="/CCAQ.pptx"
                                download
                                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                Descargar Presentación PPTX
                            </a>
                            <button className="ml-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors" onClick={() => window.open('/visualizadorPPT', '_blank')}>
                                Ver Presentación
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
    
}
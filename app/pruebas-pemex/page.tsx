// app/pruebas-pemex/page.tsx
"use client";

import Link from "next/link";

export default function PdfListPage() {
  // Reemplaza esto con tu lista real, p.ej. recibida por props o fetch
  const pdfFiles = [
    "Carta-de-intención-CCAQ.pdf",
    "Cedula-Cabina-2P-APSL.pdf",
    "Cedula-firmada-CC.pdf",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prueba Tecnológica
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Haz clic en “Ver” para ver el PDF en el navegador o en “Descargar”
            para guardarlo.
          </p>
        </div>
      </section>

      <div className="flex justify-center items-start min-h-screen bg-gray-50 p-8 mt-32">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center mb-6">
            Prueba Tecnológica
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-2">
              Documentos Disponibles
            </h2>
            <p className="text-center text-gray-600">
              Haz clic en “Ver” para ver el PDF en el navegador o en “Descargar”
              para guardarlo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfFiles.map((pdf) => (
              <div
                key={pdf}
                className="flex flex-col items-center bg-gray-100 rounded-xl p-6"
              >
                <span className="mb-4 font-medium text-gray-800">{pdf}</span>
                <div className="flex space-x-3">
                  {/* Link sin <a> interno */}
                  <Link
                    href={`/${encodeURIComponent(pdf)}`}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver
                  </Link>

                  {/* Enlace de descarga como <a> independiente */}
                  <a
                    href={`/${encodeURIComponent(pdf)}`}
                    download
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Descargar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

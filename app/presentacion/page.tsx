// app/pruebas-pemex/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PdfListPage() {
  // Reemplaza esto con tu lista real, p.ej. recibida por props o fetch
  const pdfFiles = [
    {
      image: "/cabina-aq.png",
      name: "Carta de Intención",
      file: "/Cabina Cuántica AQ.pdf",
      description: "Carta de intención para la colaboración con CCAQ.",
    },
    {
      image: "/conalep-presentacion.webp",
      name: "Evaluación CONALEP",
      file: "/Presentacion CONALEP.pdf",
      description: "Presentación de Colaboración con CONALEP.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Presentaciónes Kryon
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Haz clic en “Ver” para ver el PDF en el navegador o en “Descargar”
            para guardarlo.
          </p>
        </div>
      </section>

      <div className="flex justify-center items-start min-h-screen bg-gray-50 p-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfFiles.map((pdf) => (
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <Image
                  src={pdf.image || "/placeholder.svg"}
                  alt={pdf.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                key={pdf.file}
                className="flex flex-col items-center bg-gray-100 rounded-xl p-6"
              >
                <span className="mb-4 font-medium text-gray-800">
                  {pdf.description}
                </span>
                <div className="flex space-x-3">
                  <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                    <Link
                      href={`/${encodeURIComponent(pdf.file)}`}
                      target="_blank"
                    >
                      Ver PDF
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                  >
                    <a href={`/${encodeURIComponent(pdf.file)}`} download>
                      Descargar
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

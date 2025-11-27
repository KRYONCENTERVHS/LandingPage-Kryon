import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function StickerEMFPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AQ Celular Safe (Sticker EMF)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protección cuántica contra ondas electromagnéticas para tus dispositivos electrónicos
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Stickers-Kryon.webp?height=600&width=800"
                alt="AQ Celular Safe (Sticker EMF)"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link href="/productos" className="flex items-center text-[#1f749c] dark:text-[#39a6cf] mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Volver a productos</span>
              </Link>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">
                ¿Qué es el AQ Celular Safe?
              </h2>
              <p className="text-lg mb-6 dark:text-gray-300">
                Sticker protector que neutraliza hasta el 99% de los efectos nocivos de las ondas electromagnéticas
                emitidas por dispositivos electrónicos. Diseñado con tecnología de Equilibrio Cuántico, es compatible
                con celulares, computadoras, televisores, microondas y más.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-[#053c6d] dark:text-white mr-4">$300 MXN</span>
                <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">
                  <Link href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20los%20Stickers%20Cu%C3%A1nticos." target="_blank">
                  Comprar ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Clave */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Características Clave
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Protección eficaz</h3>
                    <p className="dark:text-gray-300">Reduce la exposición a radiación electromagnética en un 99%.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Versatilidad</h3>
                    <p className="dark:text-gray-300">
                      Funciona en múltiples dispositivos (celulares, computadoras, TVs, microondas, etc.).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Sin interferencias</h3>
                    <p className="dark:text-gray-300">No afecta el funcionamiento de los aparatos.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Fácil aplicación</h3>
                    <p className="dark:text-gray-300">
                      Pegado en zonas estratégicas según el dispositivo (ejemplo: parte trasera del celular, marco del
                      TV, frente del microondas).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Cómo Funciona?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6 dark:text-gray-300">
                  El AQ Celular Safe utiliza tecnología de Equilibrio Cuántico para neutralizar las ondas
                  electromagnéticas nocivas emitidas por dispositivos electrónicos. Actúa como un escudo protector que:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      Reorganiza la estructura de las ondas electromagnéticas, transformándolas en frecuencias
                      biocompatibles con el organismo humano.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      Crea un campo de protección que reduce la penetración de radiación en los tejidos corporales.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      Mantiene la funcionalidad completa del dispositivo sin interferir con su rendimiento o señal.
                    </p>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Instrucciones de aplicación
                  </h3>
                  <p className="dark:text-gray-300">
                    Simplemente retire el adhesivo protector y coloque el sticker en la parte posterior de su teléfono
                    celular, en el marco de su televisor, en la parte frontal de su microondas o en cualquier otro
                    dispositivo electrónico que utilice regularmente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Especificaciones Técnicas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Especificaciones Técnicas
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Duración</h3>
                      <p className="dark:text-gray-300">1 año</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Contenido</h3>
                      <p className="dark:text-gray-300">1 pieza por empaque</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Modo de uso</h3>
                      <p className="dark:text-gray-300">
                        Exclusivamente externo (no aplicar en zonas sensibles o cerca de ojos)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Compatibilidad</h3>
                      <p className="dark:text-gray-300">
                        Todo tipo de dispositivos electrónicos (celulares, tablets, laptops, TVs, etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Beneficios
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Protección para la salud
                  </h3>
                  <p className="dark:text-gray-300">
                    Minimiza la exposición a radiación dañina que puede afectar el sistema nervioso, inmunológico y
                    celular.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Ideal para entornos múltiples
                  </h3>
                  <p className="dark:text-gray-300">
                    Perfecto para hogares, oficinas y espacios con alta densidad de dispositivos electrónicos.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Mejora del bienestar</h3>
                  <p className="dark:text-gray-300">
                    Contribuye a reducir dolores de cabeza, fatiga y otros síntomas asociados a la exposición prolongada
                    a campos electromagnéticos.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Protección continua</h3>
                  <p className="dark:text-gray-300">
                    Ofrece protección las 24 horas del día durante todo un año, sin necesidad de recarga o
                    mantenimiento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

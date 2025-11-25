import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function EstructuradorCuanticoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Estructurador Cuántico de Agua "AQ" WATER</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforma tu agua común en agua estructurada con propiedades energéticas superiores
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Estructurador-Cuantico.webp?height=600&width=800"
                alt="Estructurador Cuántico de Agua AQ WATER"
                width={600}
                height={400}
                className="w-100 h-full object-cover"
              />
            </div>
            <div>
              <Link href="/productos" className="flex items-center text-[#1f749c] dark:text-[#39a6cf] mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Volver a productos</span>
              </Link>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">
                ¿Qué es el Estructurador Cuántico de Agua?
              </h2>
              <p className="text-lg mb-6 dark:text-gray-300">
                Es un dispositivo que expone el agua a frecuencias cuánticas que armonizan su estructura, elevan su
                energía e impactan positivamente el bienestar físico y mental de quien la consume.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-[#053c6d] dark:text-white mr-4">$3,500 MXN</span>
                <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">
                  <Link href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20el%20Termo%20Estructurador%20de%20Energia%20Cuantica." target="_blank">
                  Comprar ahora
                  </Link>
                </Button>
              </div>
            </div>
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
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Material</h3>
                      <p className="dark:text-gray-300">Acero inoxidable 304</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Capacidad</h3>
                      <p className="dark:text-gray-300">500 ml</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Aislamiento</h3>
                      <p className="dark:text-gray-300">
                        Vacío de doble pared (mantiene líquidos fríos 24 hrs / calientes 12 hrs)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Seguridad</h3>
                      <p className="dark:text-gray-300">Libre de BPA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Boquilla</h3>
                      <p className="dark:text-gray-300">Ancha: 3.5 cm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Dimensiones</h3>
                      <p className="dark:text-gray-300">Altura: 27 cm | Diámetro: 7 cm | Peso: 300 g</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <p className="dark:text-gray-300">
                    Sin condensación ni retención de olores o sabores, lo que garantiza una experiencia de hidratación
                    pura y limpia.
                  </p>
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
            Beneficios del Agua Estructurada
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Mejora la hidratación</h3>
                    <p className="dark:text-gray-300">Optimiza la circulación sanguínea y la absorción celular</p>
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
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Disminuye la viscosidad</h3>
                    <p className="dark:text-gray-300">
                      Reduce la viscosidad de la sangre, mejorando el flujo sanguíneo
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
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Favorece la digestión</h3>
                    <p className="dark:text-gray-300">Mejora la función pancreática y digestiva</p>
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
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Elimina toxinas</h3>
                    <p className="dark:text-gray-300">Ayuda a eliminar cálculos renales y biliares</p>
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
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Mejora la piel</h3>
                    <p className="dark:text-gray-300">Beneficia el estado de la piel, poros, uñas y cabello</p>
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
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Regeneración celular</h3>
                    <p className="dark:text-gray-300">Proporciona energía y enfoque mental</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Estabilidad emocional</h3>
                    <p className="dark:text-gray-300">Contribuye a la estabilidad emocional y a un sueño profundo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consideraciones */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Consideraciones
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">No es un medicamento, tratamiento o amuleto</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">No requiere programación, carga ni baterías</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      Es seguro para todos, incluidas personas con marcapasos o prótesis
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">No tiene contraindicaciones</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

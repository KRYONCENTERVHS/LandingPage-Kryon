import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ReconexionTerapiaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Reconexión – Terapia Emocional</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reconecta con tu equilibrio emocional y supera bloqueos energéticos para alcanzar bienestar interior.
          </p>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">¿Qué es la Terapia de Reconexión?</h2>
              <p className="text-lg mb-4">
                La Terapia de Reconexión es un tratamiento avanzado diseñado para facilitar la liberación emocional,
                armonizar el estado anímico y reconectar con el bienestar interno mediante frecuencias cuánticas,
                neuroestimulación y cromoterapia sincronizada.
              </p>
              <p className="text-lg mb-4">
                A través de la Cabina Cuántica AQ, se aplican técnicas de inducción auditiva, frecuencias moduladas y
                cromoterapia que trabajan en conjunto para desbloquear emociones reprimidas, disolver patrones
                emocionales negativos y promover un estado de equilibrio y paz interior.
              </p>
              <p className="text-lg">
                Esta terapia es ideal para personas que experimentan estrés emocional, ansiedad, tristeza o bloqueos
                emocionales que afectan su bienestar y calidad de vida.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/NeuroDivirgente.webp?height=600&width=800"
                alt="Terapia de Reconexión en acción"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Componentes de la Terapia */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">Componentes de la Terapia</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">
                  Inducción Auditiva con Neuro-frases Emocionales
                </h3>
                <p className="mb-4">Se utiliza audio personalizado con frases estructuradas que ayudan a:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Disolver patrones emocionales negativos (miedo, culpa, ira).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Romper engramas mentales y reforzar creencias positivas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Promover emociones como paz, gratitud, amor propio y seguridad emocional.</p>
                  </li>
                </ul>
                <p className="mb-6">Basado en ontología del lenguaje, psicología positiva y neurociencias aplicadas.</p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Frecuencias Cuánticas Moduladas (3 a 45 Hz)</h3>
                <p className="mb-4">En sincronía con la terapia auditiva, se aplican frecuencias subatómicas que:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Desbloquean emociones reprimidas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Actúan sobre neurotransmisores como serotonina y dopamina.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Restaura la coherencia bioenergética en los centros emocionales del cuerpo.</p>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Cromoterapia emocional (LED RGB)</h3>
                <p className="mb-4">Colores usados principalmente:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Verde: calma la irritabilidad, reduce ansiedad, regula el sistema nervioso.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Azul: armoniza órganos internos, reactiva la regeneración celular, induce serenidad.</p>
                  </li>
                </ul>
                <p className="mb-6">
                  Las luces se sincronizan con el audio y las frecuencias, generando una experiencia inmersiva.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Aplicación Bioenergética Focalizada</h3>
                <p className="mb-4">
                  Uso de la barra metálica para contacto físico, permitiendo el flujo energético directo.
                </p>
                <p className="mb-4">En casos específicos, se puede aplicar terapia de liberación emocional:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Luz azul en el pecho (punto 9).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Luz verde o roja en puntos energéticos clave.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Repetición guiada de afirmaciones: "A pesar de ___, me amo y me acepto profundamente..."</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">Beneficios Específicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Disminución de ansiedad</h3>
                    <p>Reduce la ansiedad, tristeza, ira o angustia de forma efectiva.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Liberación emocional</h3>
                    <p>Facilita la liberación emocional consciente y el procesamiento de emociones reprimidas.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Mayor claridad mental</h3>
                    <p>Proporciona mayor claridad mental y enfoque para la toma de decisiones.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Reconexión con el amor propio</h3>
                    <p>Facilita la reconexión con el amor propio, el perdón y la aceptación.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Regulación del sistema nervioso</h3>
                    <p>Ayuda a regular el sistema nervioso autónomo, reduciendo la respuesta al estrés.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Estabilidad emocional</h3>
                    <p>Promueve un mejor manejo del estrés y mayor estabilidad emocional a largo plazo.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detalles y Reserva */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#053c6d]">Detalles de la Sesión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Duración</h3>
                <p className="text-lg">4-30 minutos</p>
                <p className="text-sm text-gray-600 mt-1">
                  Dependiendo del estado emocional del usuario y el nivel de profundidad deseado
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Precio</h3>
                <p className="text-lg">$2000 MXN por sesión</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Frecuencia Recomendada</h3>
                <p className="text-lg">1-2 sesiones por semana</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Resultados</h3>
                <p className="text-lg">Desde la primera sesión</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
                <Link href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank">
                  Agendar sesión
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Otras Terapias */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d]">
            Otras Terapias que Podrían Interesarte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Terapia ZEN"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">ZEN – Estrés</h3>
                <p className="mb-4">
                  Reduce el estrés y la ansiedad a través de la armonización de tu campo energético.
                </p>
                <Link href="/terapias/zen">
                  <Button variant="outline" className="w-full border-[#1f749c] text-[#1f749c]">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Terapia Regenerativa"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Regenerativa</h3>
                <p className="mb-4">
                  Acelera la recuperación muscular y reduce la inflamación después de actividad física.
                </p>
                <Link href="/terapias/regenerativa">
                  <Button variant="outline" className="w-full border-[#1f749c] text-[#1f749c]">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Terapia Sueño Luminoso"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Sueño Luminoso</h3>
                <p className="mb-4">Optimiza tus ciclos de sueño y despierta con mayor energía.</p>
                <Link href="/terapias/sueno-luminoso">
                  <Button variant="outline" className="w-full border-[#1f749c] text-[#1f749c]">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

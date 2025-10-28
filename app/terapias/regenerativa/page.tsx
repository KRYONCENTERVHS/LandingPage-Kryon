import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function RegenerativaTerapiaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Regenerativa – Recuperación Muscular</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Acelera la recuperación muscular y reduce la inflamación después de actividad física intensa.
          </p>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">¿Qué es la Terapia Regenerativa?</h2>
              <p className="text-lg mb-4">
                La Terapia Regenerativa es un tratamiento avanzado que promueve la recuperación muscular profunda
                mediante la estimulación bioenergética, la activación de neurotransmisores y el equilibrio iónico a
                nivel celular.
              </p>
              <p className="text-lg mb-4">
                A través de la Cabina Cuántica AQ, se aplican frecuencias específicas, cromoterapia y terapia auditiva
                que trabajan en conjunto para acelerar la regeneración de tejidos, reducir la inflamación y aliviar el
                dolor muscular.
              </p>
              <p className="text-lg">
                Esta terapia es ideal para deportistas, personas con fatiga muscular crónica o quienes buscan optimizar
                su recuperación física después de entrenamientos intensos o lesiones.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Recuperacion-Muscular.webp?height=600&width=800"
                alt="Terapia Regenerativa en acción"
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
                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Frecuencias Cuánticas Moduladas (3 a 45 Hz)</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Aplicación de frecuencias vibracionales que estimulan la repolarización celular.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Promueven la regeneración del tejido muscular, relajación profunda y mejor oxigenación.</p>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Cromoterapia con luces LED RGB (460–800 nm)</h3>
                <p className="mb-4">La luz roja, en particular, es clave para la recuperación muscular:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Estimula la circulación y la hemoglobina.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Energiza el hígado y disuelve cristales de sal que afectan el sistema muscular.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Mejora el metabolismo celular y acelera la regeneración de fibras musculares.</p>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Terapia Auditiva y Neurolingüística</h3>
                <p className="mb-4">
                  Inducciones auditivas con neuro-frases diseñadas para activar neurotransmisores como:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Endorfinas (analgésicas, reducen ansiedad).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Dopamina (motivación y placer).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Acetilcolina (mejora la contracción muscular).</p>
                  </li>
                </ul>
                <p className="mb-6">
                  Estas frases inducen un estado de relajación y promueven la liberación de tensiones físicas y
                  emocionales.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Barra de Contacto Inoxidable</h3>
                <p className="mb-6">
                  Transmite de forma segura la energía cuántica al cuerpo mediante contacto físico.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Ventilación con aire estructurado</h3>
                <p>Aporta confort térmico y una sensación de frescura que mejora la oxigenación del cuerpo.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Reducción del dolor</h3>
                    <p>Disminuye el dolor y las contracturas musculares de forma efectiva.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Mejora del flujo sanguíneo</h3>
                    <p>Optimiza la circulación y la oxigenación de los tejidos musculares.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Estimulación de neurotransmisores</h3>
                    <p>Activa los neurotransmisores asociados a la recuperación física.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Sensación de bienestar</h3>
                    <p>Proporciona una sensación de alivio, bienestar y vitalidad renovada.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Fortalecimiento del sistema inmune</h3>
                    <p>Refuerza el sistema inmunológico y neuromuscular.</p>
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
                <p className="text-lg">15-30 minutos</p>
                <p className="text-sm text-gray-600 mt-1">
                  Dependiendo del nivel de fatiga muscular o la condición física del usuario
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Precio</h3>
                <p className="text-lg">$2000 MXN por sesión</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Frecuencia Recomendada</h3>
                <p className="text-lg">1-3 sesiones por semana</p>
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
                  alt="Terapia de Reconexión"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Reconexión</h3>
                <p className="mb-4">Reconecta con tu equilibrio emocional y supera bloqueos energéticos.</p>
                <Link href="/terapias/reconexion">
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

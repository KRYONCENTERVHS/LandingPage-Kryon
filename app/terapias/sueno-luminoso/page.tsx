import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function SuenoLuminosoTerapiaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sueño Luminoso – Mejora del sueño</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Optimiza tus ciclos de sueño y despierta con mayor energía y claridad mental.
          </p>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">¿Qué es la Terapia Sueño Luminoso?</h2>
              <p className="text-lg mb-4">
                La Terapia Sueño Luminoso es un tratamiento avanzado diseñado para inducir un estado de relajación
                profunda que facilita la conciliación del sueño, regula los ciclos circadianos y optimiza la calidad del
                descanso mediante estimulación neuroauditiva, frecuencias cuánticas y cromoterapia específica.
              </p>
              <p className="text-lg mb-4">
                A través de la Cabina Cuántica AQ, se aplican técnicas de inducción auditiva, frecuencias de baja
                frecuencia y cromoterapia suave que trabajan en conjunto para sincronizar la actividad cerebral con los
                ciclos naturales de descanso, promoviendo un sueño reparador y profundo.
              </p>
              <p className="text-lg">
                Esta terapia es ideal para personas que sufren de insomnio, tienen dificultad para conciliar el sueño,
                experimentan despertares nocturnos frecuentes o simplemente desean mejorar la calidad de su descanso.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Sueño-Luminoso.webp?height=600&width=800"
                alt="Terapia Sueño Luminoso en acción"
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
                  Inducción Auditiva con Neuro-frases para el Sueño
                </h3>
                <p className="mb-4">Audio especialmente diseñado para:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Disminuir la actividad cerebral acelerada.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Promover la secreción natural de melatonina y serotonina.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Generar un estado de somnolencia progresiva.</p>
                  </li>
                </ul>
                <p className="mb-6">
                  Las frases y sonidos están modulados en tonos graves y repetitivos, ideales para facilitar el descenso
                  al estado ALFA y luego THETA.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">
                  Frecuencias Cuánticas de Baja Frecuencia (3 – 7 Hz)
                </h3>
                <p className="mb-4">Modulaciones específicas para inducir ondas cerebrales ALFA y THETA:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>ALFA (8–12 Hz): relajación ligera, preparación para el sueño.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>THETA (4–7 Hz): entrada en estado de sueño ligero y ensoñación.</p>
                  </li>
                </ul>
                <p className="mb-6">
                  Estas frecuencias ayudan a sincronizar la actividad cerebral con los ciclos naturales de descanso.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">Cromoterapia Suave y Regulada (LED RGB)</h3>
                <p className="mb-4">Uso de tonos azul profundo y violeta tenue:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Azul: calma el sistema nervioso y reduce el ritmo cardíaco.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Violeta: facilita la desconexión mental y la introspección.</p>
                  </li>
                </ul>
                <p className="mb-6">
                  La luz cambia de manera lenta y envolvente, sin parpadeos, para no interrumpir el proceso de inducción
                  al sueño.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#1f749c]">
                  Estimulación Bioenergética de Descarga Neuronal
                </h3>
                <p className="mb-4">A través de contacto con barra estructurada, se favorece:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>El equilibrio de cargas bioeléctricas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>La descarga de tensiones acumuladas durante el día.</p>
                  </li>
                </ul>
                <p>Este componente complementa la relajación y favorece un descanso más profundo.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Facilita el inicio del sueño</h3>
                    <p>Ayuda a conciliar el sueño de forma natural, sin necesidad de fármacos.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Regula el ciclo circadiano</h3>
                    <p>Mejora la producción natural de melatonina y normaliza los ciclos de sueño-vigilia.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Reduce el insomnio</h3>
                    <p>Disminuye los despertares nocturnos y la fatiga matutina.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Disminuye pensamientos intrusivos</h3>
                    <p>Reduce la ansiedad nocturna y los pensamientos que dificultan el descanso.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Mejora la calidad del sueño</h3>
                    <p>Optimiza las fases de sueño REM y no REM para un descanso más efectivo.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">Promueve el descanso reparador</h3>
                    <p>Genera una sensación de descanso profundo y energía renovada al despertar.</p>
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
                <p className="text-lg">10-20 minutos</p>
                <p className="text-sm text-gray-600 mt-1">
                  Recomendado antes de dormir o durante episodios de insomnio o sueño fragmentado
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Precio</h3>
                <p className="text-lg">$2000 MXN por sesión</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Frecuencia Recomendada</h3>
                <p className="text-lg">2-3 sesiones por semana</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Resultados</h3>
                <p className="text-lg">Mejoras notables desde la primera semana</p>
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
          </div>
        </div>
      </section>
    </main>
  )
}


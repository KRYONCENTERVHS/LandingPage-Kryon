import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function TerapiaZen() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ZEN – Terapia Anti-Estrés
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reduce el estrés y la ansiedad a través de la armonización de tu
            campo energético.
          </p>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">
              ¿Qué es la Terapia ZEN?
              </h2>
              <p className="text-lg mb-4">
                La Terapia ZEN utiliza tecnología cuántica avanzada para
                armonizar tu campo energético, reduciendo significativamente los
                niveles de estrés y ansiedad que experimentas en tu día a día.
              </p>
              <p className="text-lg mb-4">
                A través de la Cabina Cuántica AQ, se emiten frecuencias
                específicas que interactúan con tu sistema nervioso, promoviendo
                un estado de calma y equilibrio similar al que se alcanza
                después de una profunda meditación.
              </p>
              <p className="text-lg">
                Esta terapia es ideal para personas con altos niveles de estrés
                laboral, ansiedad crónica o quienes buscan mejorar su calidad de
                vida en un mundo acelerado.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Terapia-Zen.webp?height=600&width=800"
                style={{ width: "100%", height: "700px", aspectRatio: "16/9" }}
                alt="Terapia ZEN en acción"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Beneficios de la Terapia Cabina Cuántica AQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Reducción del Estrés
                    </h3>
                    <p>
                      Disminuye significativamente los niveles de cortisol, la
                      hormona del estrés.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Mejora del Sueño
                    </h3>
                    <p>
                      Facilita un sueño más profundo y reparador, mejorando los
                      ciclos de descanso.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Mayor Claridad Mental
                    </h3>
                    <p>
                      Aumenta la concentración y la capacidad de tomar
                      decisiones con claridad.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Equilibrio Emocional
                    </h3>
                    <p>
                      Promueve una respuesta más equilibrada ante situaciones
                      estresantes.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Aumento de Energía
                    </h3>
                    <p>
                      Incrementa los niveles de energía vital sin los efectos
                      secundarios de los estimulantes.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Bienestar General
                    </h3>
                    <p>
                      Mejora la sensación general de bienestar y calidad de
                      vida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detalles y Reserva */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#053c6d]">
              Detalles de la Sesión
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">
                  Duración
                </h3>
                <p className="text-lg">4 minutos</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">
                  Precio
                </h3>
                <p className="text-lg">$2000 MXN por sesión</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">
                  Frecuencia Recomendada
                </h3>
                <p className="text-lg">1-2 sesiones por semana</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">
                  Resultados
                </h3>
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
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d]">
            Otras Terapias que Podrían Interesarte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                  Regenerativa
                </h3>
                <p className="mb-4">
                  Acelera la recuperación muscular y reduce la inflamación.
                </p>
                <Link href="/terapias/regenerativa">
                  <Button
                    variant="outline"
                    className="w-full border-[#1f749c] text-[#1f749c]"
                  >
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
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                  Reconexión
                </h3>
                <p className="mb-4">
                  Reconecta con tu equilibrio emocional y supera bloqueos
                  energéticos.
                </p>
                <Link href="/terapias/reconexion">
                  <Button
                    variant="outline"
                    className="w-full border-[#1f749c] text-[#1f749c]"
                  >
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
                <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                  Sueño Luminoso
                </h3>
                <p className="mb-4">
                  Optimiza tus ciclos de sueño y despierta con mayor energía.
                </p>
                <Link href="/terapias/sueno-luminoso">
                  <Button
                    variant="outline"
                    className="w-full border-[#1f749c] text-[#1f749c]"
                  >
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const terapias = [
  {
    id: "zen",
    title: "ZEN – Estrés",
    description: "Reduce el estrés y la ansiedad a través de la armonización de tu campo energético.",
    image: "/Terapia-Zen.webp?height=300&width=500",
    link: "/terapias/zen",
  },
  {
    id: "regenerativa",
    title: "Regenerativa – Recuperación Muscular",
    description: "Acelera la recuperación muscular y reduce la inflamación después de actividad física intensa.",
    image: "/Recuperacion-Muscular.webp?height=300&width=500",
    link: "/terapias/regenerativa",
  },
  {
    id: "reconexion",
    title: "Reconexión – Terapia Emocional",
    description: "Reconecta con tu equilibrio emocional y supera bloqueos energéticos.",
    image: "/Terapia-Emocional.webp?height=300&width=500",
    link: "/terapias/reconexion",
  },
  {
    id: "armonia",
    title: "Armonía – Neurodivergentes",
    description:
      "Terapia especializada para personas neurodivergentes, mejorando la concentración y reduciendo la ansiedad.",
    image: "/NeuroDivirgente.webp?height=300&width=500",
    link: "/terapias/armonia",
  },
  {
    id: "sueno",
    title: "Sueño Luminoso – Mejora del sueño",
    description: "Optimiza tus ciclos de sueño y despierta con mayor energía y claridad mental.",
    image: "/Sueño-Luminoso.webp?height=300&width=500",
    link: "/terapias/sueno-luminoso",
  },
]

export default function TerapiasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terapias</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubre nuestras terapias cuánticas diseñadas para mejorar tu bienestar físico y mental.
          </p>
        </div>
      </section>

      {/* Terapias Grid */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Nuestras Terapias Cuánticas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terapias.map((terapia) => (
              <Card key={terapia.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-52 overflow-hidden">
                  <Image
                    src={terapia.image || "/placeholder.svg"}
                    alt={terapia.title}
                    width={500}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#1f749c]">{terapia.title}</CardTitle>
                  <CardDescription className="text-base">{terapia.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={terapia.link} className="w-full">
                    <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">Ver detalles</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#053c6d]">Información General</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Precio</h3>
                <p className="text-lg">$900 MXN por sesión</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Duración</h3>
                <p className="text-lg">Cada sesión tiene una duración aproximada de 20 a 40 minutos.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-[#1f749c]">Recomendaciones</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Llegar 10 minutos antes de tu cita programada.</li>
                  <li>Usar ropa cómoda.</li>
                  <li>Evitar consumir alcohol o sustancias estimulantes antes de la sesión.</li>
                  <li>Beber agua antes y después de la terapia.</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
                  <a href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20agendar%20una%20cita." target="_blank">
                    Agendar sesión
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

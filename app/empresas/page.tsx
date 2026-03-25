import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import FormularioCotizacion from "@/components/ui/formulario";
import Link from "next/link";

export default function EmpresasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluciones para Empresas
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mejora el bienestar y productividad de tu equipo con nuestras
            soluciones corporativas de tecnología cuántica.
          </p>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">
                Cabinas AQ para Instituciones y Corporativos
              </h2>
              <p className="text-lg mb-4">
                Ofrecemos servicios de renta de Cabinas Cuánticas AQ para
                empresas e instituciones que buscan mejorar el bienestar de sus
                colaboradores y aumentar la productividad.
              </p>
              <p className="text-lg mb-4">
                Nuestras cabinas utilizan tecnología cuántica avanzada para
                reducir el estrés, mejorar la concentración y aumentar los
                niveles de energía de tus empleados, todo en sesiones de tan
                solo 30 minutos.
              </p>
              <p className="text-lg">
                Con planes flexibles adaptados a diferentes tamaños de
                organizaciones, podemos diseñar un programa que se ajuste
                perfectamente a las necesidades de tu empresa.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Cabina-G.webp?height=600&width=800"
                alt="Cabina AQ en entorno corporativo"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#053c6d]">
            Servicios
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Soluciones de alto impacto para empresas que desean reducir estrés,
            elevar la vitalidad de sus equipos y fortalecer su cultura de
            bienestar.
          </p>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white shadow-2xl overflow-hidden border border-[#d9e9f4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(5,60,109,0.5)]">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full relative">
                    <Image
                      src="/Cabina-G.webp?height=600&width=900"
                      alt="Cabina AQ de Kryon Center"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#053c6d] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow">
                      Servicio Empresarial Premium
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[#1f749c]">
                      Cabina AQ
                    </h3>
                    <p className="text-gray-700 mb-5">
                      Tecnología cuántica avanzada para reducir el estrés,
                      equilibrar energía y promover procesos naturales de
                      bienestar en entornos corporativos.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <div className="rounded-lg border border-[#d4e4ef] bg-[#f5fbff] p-3">
                        <p className="text-xs uppercase tracking-wide text-[#1f749c] font-bold mb-1">
                          Venta
                        </p>
                        <p className="font-semibold text-[#053c6d] text-sm md:text-base">
                          8,000,000 MXN
                        </p>
                        <p className="text-xs text-gray-600">$400,000 USD</p>
                      </div>
                      <div className="rounded-lg border border-[#d4e4ef] bg-[#f5fbff] p-3">
                        <p className="text-xs uppercase tracking-wide text-[#1f749c] font-bold mb-1">
                          Renta mensual
                        </p>
                        <p className="font-semibold text-[#053c6d] text-sm md:text-base">
                          350,000 MXN
                        </p>
                        <p className="text-xs text-gray-600">$17,500 USD</p>
                      </div>
                    </div>

                    <Button asChild className="bg-[#054891] hover:bg-[#053c6d] w-full sm:w-auto">
                      <Link href="/empresas/cabina-aq">
                        Ver más información
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Nuestros Planes Corporativos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#39a6cf] text-white px-4 py-1 text-sm font-bold">
                Básico
              </div>
              <CardContent className="p-6 pt-10">
                <h3 className="text-2xl font-bold mb-2 text-[#1f749c]">
                  Plan 30
                </h3>
                <p className="text-gray-600 mb-6">
                  Ideal para pequeñas empresas
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Hasta 30 personas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>1 día completo de servicio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Sesiones de 30 minutos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Informe de resultados</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                  <Link
                    target="_blank"
                    href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20Plan%2030.%0AEstoy%20interesado(a)%20en%20conocer%20los%20detalles%20de%20este%20plan%20b%C3%A1sico,%20as%C3%AD%20como%20otras%20opciones%20disponibles%20en%20caso%20de%20que%20existan."
                  >
                    Solicitar cotización
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg relative overflow-hidden border-2 border-[#1f749c] transform scale-105">
              <div className="absolute top-0 right-0 bg-[#1f749c] text-white px-4 py-1 text-sm font-bold">
                Recomendado
              </div>
              <CardContent className="p-6 pt-10">
                <h3 className="text-2xl font-bold mb-2 text-[#1f749c]">
                  Plan 60
                </h3>
                <p className="text-gray-600 mb-6">Para empresas medianas</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Hasta 60 personas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>2 días de servicio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Sesiones de 30 minutos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Informe detallado de resultados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Charla informativa</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                  <Link
                    target="_blank"
                    href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20Plan%2060.%0AEstoy%20interesado(a)%20en%20conocer%20los%20detalles%20de%20este%20plan%20para%20empresas%20medianas,%20as%C3%AD%20como%20otras%20opciones%20disponibles%20en%20caso%20de%20que%20existan."
                  >
                    Solicitar cotización
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#39a6cf] text-white px-4 py-1 text-sm font-bold">
                Premium
              </div>
              <CardContent className="p-6 pt-10">
                <h3 className="text-2xl font-bold mb-2 text-[#1f749c]">
                  Plan 120
                </h3>
                <p className="text-gray-600 mb-6">Para grandes corporativos</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Hasta 120 personas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>4 días de servicio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Sesiones de 30 minutos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Informe ejecutivo completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Conferencia para empleados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#39a6cf] mt-0.5" />
                    <span>Seguimiento personalizado</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                  <Link
                    target="_blank"
                    href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20Plan%20120.%0AEstoy%20interesado(a)%20en%20conocer%20los%20detalles%20de%20este%20plan%20para%20grandes%20corporativos,%20as%C3%AD%20como%20otras%20opciones%20disponibles%20en%20caso%20de%20que%20existan.%0A%0A"
                  >
                    Solicitar cotización
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Empresariales */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Beneficios para tu Empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Reducción del Ausentismo
                    </h3>
                    <p>
                      Disminuye las ausencias por estrés y problemas de salud
                      relacionados.
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
                      Aumento de Productividad
                    </h3>
                    <p>
                      Empleados con mayor energía y concentración logran mejores
                      resultados.
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
                      Mejora del Clima Laboral
                    </h3>
                    <p>
                      Promueve un ambiente de trabajo más armonioso y
                      colaborativo.
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
                      Retención de Talento
                    </h3>
                    <p>
                      Demuestra compromiso con el bienestar de tus empleados,
                      aumentando su lealtad.
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
                      Reducción del Estrés
                    </h3>
                    <p>
                      Disminuye los niveles de estrés laboral y previene el
                      burnout.
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
                      Innovación en Bienestar
                    </h3>
                    <p>
                      Posiciona a tu empresa como innovadora en el cuidado de
                      sus colaboradores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Casos de Éxito
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg mb-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <Image
                      src="/Cabina-Pemex.webp?height=200&width=200"
                      style={{ height: "400px", width: "600px" }}
                      alt="Logo PEMEX"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      PEMEX
                    </h3>
                    <p className="mb-4">
                      Implementamos un programa piloto con 60 empleados de
                      PEMEX, logrando una reducción del 30% en los niveles de
                      estrés reportados y un aumento del 25% en la
                      productividad.
                    </p>
                    <p>
                      El programa recibió un dictamen favorable y actualmente se
                      está considerando su implementación en más áreas de la
                      empresa.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button className="w-40 bg-[#054891] hover:bg-[#053c6d] flex">
                        <Link target="_blank" href="/prueba-eficiencia">
                          Pruebas de eficiencia
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <Image
                      src="/Cabina-Uni-Tamp.webp?height=300&width=700"
                      style={{ height: "400px", width: "400px" }}
                      alt="Logo Universidad"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c]">
                      Universidad Autonoma de Tamaulipas
                    </h3>
                    <p className="mb-4">
                      Colaboramos con la facultad de psicología para un estudio
                      sobre el impacto de la tecnología cuántica en el
                      rendimiento académico y el bienestar estudiantil.
                    </p>
                    <p>
                      Los resultados mostraron una mejora significativa en la
                      capacidad de concentración y retención de información en
                      los estudiantes que participaron en el programa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Testimonios 
      
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Contactanos
          </h2>
          <FormularioCotizacion />
        </div>
      </section>
      */}
    </main>
  );
}

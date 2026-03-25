import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CabinaAQEmpresasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cabina AQ®</h1>
          <p className="text-xl max-w-4xl mx-auto">
            La Cabina AQ® de Kryon Center es una tecnología cuántica avanzada
            que fusiona ciencia y bienestar holístico para reducir estrés,
            equilibrar tu energía y promover sanación natural.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Cabina-G.webp?height=700&width=900"
                alt="Cabina AQ Kryon Center"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link
                href="/empresas"
                className="inline-flex items-center text-[#1f749c] mb-5"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a empresas
              </Link>

              <h2 className="text-3xl font-bold mb-6 text-[#053c6d]">
                Descripción Cabina AQ®
              </h2>
              <p className="text-lg mb-5 text-gray-700">
                La Cabina AQ® activa tu potencial interior mediante terapias
                vibracionales no invasivas, restaurando armonía bioenergética
                sin medicamentos ni efectos secundarios.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Ideal para centros de bienestar, empresas o uso personal,
                ofrece resultados inmediatos en vitalidad y claridad mental.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#054891] hover:bg-[#053c6d]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon%20Center!%20Quiero%20solicitar%20la%20compra%20de%20la%20Cabina%20AQ%C2%AE.%20Me%20interesa%20el%20precio%20de%208%2C000%2C000%20MXN%20(%24400%2C000%20USD)."
                  >
                    Solicitar compra
                  </Link>
                </Button>
                <Button asChild className="bg-[#1f749c] hover:bg-[#053c6d]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon%20Center!%20Quiero%20solicitar%20la%20renta%20mensual%20de%20la%20Cabina%20AQ%C2%AE.%20Me%20interesa%20el%20precio%20de%20350%2C000%20MXN%20(%2417%2C500%20USD)%20al%20mes."
                  >
                    Solicitar renta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#053c6d]">
              Opciones de Adquisición
            </h2>

            <Card className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#053c6d] text-white">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Opción</th>
                        <th className="px-6 py-4 font-semibold">Precio MXN</th>
                        <th className="px-6 py-4 font-semibold">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-medium">Venta</td>
                        <td className="px-6 py-4">8,000,000</td>
                        <td className="px-6 py-4">$400,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">Renta (mensual)</td>
                        <td className="px-6 py-4">350,000</td>
                        <td className="px-6 py-4">$17,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">
            Terapias Disponibles
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1f749c] mb-2">
                  Básica (4 minutos)
                </h3>
                <p className="text-lg font-semibold text-[#053c6d] mb-4">
                  800 MXN ($40 USD)
                </p>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#39a6cf] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Sesión introductoria que reduce rápidamente niveles de
                    cortisol y estrés, promoviendo relajación inmediata y paz
                    interior en minutos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-[#1f749c]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1f749c] mb-2">
                  Intermedia (20 minutos)
                </h3>
                <p className="text-lg font-semibold text-[#053c6d] mb-4">
                  1,200 MXN ($60 USD)
                </p>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#39a6cf] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Terapia equilibrante que restaura tu campo bioenergético,
                    mejorando vitalidad, claridad mental y armonía general del
                    cuerpo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1f749c] mb-2">
                  Avanzada (50 minutos)
                </h3>
                <p className="text-lg font-semibold text-[#053c6d] mb-4">
                  2,500 MXN ($125 USD)
                </p>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#39a6cf] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Experiencia completa y profunda para sanación holística,
                    con efectos potenciados en bienestar, recuperación y
                    reconexión personal.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

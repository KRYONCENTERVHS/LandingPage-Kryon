import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Award,
  FileText,
  ClipboardList,
  Facebook,
  Linkedin,
  Instagram,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Jornada Armonía <br />
            <span className="text-[#39a6cf]">Bioenergética</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 font-light">
            Estamos aquí para responder tus preguntas y ayudarte a transformar
            tu bienestar.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Requisitos Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053c6d] dark:text-[#39a6cf] mb-4">
              Requisitos para Participar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Para asegurar la calidad y profesionalismo de nuestra jornada,
              solicitamos los siguientes requisitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#39a6cf]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-[#39a6cf]/10 rounded-full p-4 text-[#39a6cf]">
                    <Award className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                      Credencial Oficial
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Comprobante de ser profesional en:
                    </p>
                    <ul className="text-left text-sm space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
                      <li>Medicina Alternativa</li>
                      <li>Herbolaria</li>
                      <li>Homeopatía</li>
                      <li>Terapias vibracionales</li>
                      <li>Prácticas holísticas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#39a6cf]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-[#39a6cf]/10 rounded-full p-4 text-[#39a6cf]">
                    <FileText className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                      Práctica Activa
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Documento de ejercicio en los últimos 6 meses:
                    </p>
                    <ul className="text-left text-sm space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
                      <li>Recibos de consultas</li>
                      <li>Registros de pacientes</li>
                      <li>Cartas de referencia</li>
                      <li>Licencia o título vigente</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Formulario */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#39a6cf] md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 flex-grow">
                  <div className="bg-[#39a6cf]/10 rounded-full p-4 text-[#39a6cf]">
                    <ClipboardList className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                      Registro
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      Completa tu registro a través de nuestro formulario
                      oficial para iniciar el proceso.
                    </p>
                    <Button
                      asChild
                      className="bg-[#1f749c] hover:bg-[#053c6d] text-white w-full"
                    >
                      <a
                        href="https://forms.gle/cgSbS97YbwQYXpCT7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ir al Formulario
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Horarios Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-l-8 border-[#39a6cf]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-[#39a6cf]/20 p-4 rounded-full text-[#053c6d] dark:text-[#39a6cf]">
                <Clock className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#053c6d] dark:text-[#39a6cf] mb-2">
                  Horarios de la Jornada
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Estamos disponibles para atenderte en los siguientes horarios.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right space-y-2">
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-lg">
                <span className="font-semibold text-[#1f749c] dark:text-[#39a6cf] block">
                  Lunes - 16
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  9:00 AM - 8:00 PM
                </span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-lg">
                <span className="font-semibold text-[#1f749c] dark:text-[#39a6cf] block">
                  Martes - 16
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  9:00 AM - 8:00 PM
                </span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-lg">
                <span className="font-semibold text-[#1f749c] dark:text-[#39a6cf] block">
                  Miercoles - 17
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  9:00 AM - 8:00 PM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Redes Sociales */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#053c6d] dark:text-[#39a6cf] mb-4">
              Síguenos en Redes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Mantente al día con nuestras últimas novedades y contenido
              exclusivo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="https://www.facebook.com/share/167b7YG4fg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all border-none bg-[#1877F2]/5 hover:bg-[#1877F2]/10">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                  <Facebook className="h-8 w-8 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-[#1877F2]">Facebook</span>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/company/kryon-by-aq/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all border-none bg-[#0077B5]/5 hover:bg-[#0077B5]/10">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                  <Linkedin className="h-8 w-8 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-[#0077B5]">LinkedIn</span>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.instagram.com/kryon_aq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all border-none bg-[#E4405F]/5 hover:bg-[#E4405F]/10">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                  <Instagram className="h-8 w-8 text-[#E4405F] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-[#E4405F]">
                    Instagram
                  </span>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.tiktok.com/@armonia_cuantica?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all border-none bg-[#000000]/5 hover:bg-[#000000]/10 dark:bg-white/5 dark:hover:bg-white/10">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                  <Video className="h-8 w-8 text-black dark:text-white group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-black dark:text-white">
                    TikTok
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>

        {/* Mapa */}
        <section className="w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#053c6d] dark:text-[#39a6cf] mb-4">
              Encuéntranos
            </h2>
          </div>
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.4089901847133!2d-92.94343294732047!3d17.97753160467639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd778b9ee1225%3A0x8b43a2168a6ee15e!2sGimnasio%20de%20Box!5e0!3m2!1ses!2smx!4v1744308193394!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

// app/pruebas-pemex/[pdf]/page.tsx
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

interface Props {
  params: { pdf: string }
}

// 1. Genera de forma estática todos los parámetros { pdf: 'archivo.pdf' }
//    basándose en lo que haya en public/*.pdf
export async function generateStaticParams() {
  const pdfDir = path.join(process.cwd(), 'public')
  const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'))
  return files.map(pdf => ({ pdf }))
}

export default function PdfViewerPage({ params }: Props) {
  const { pdf } = params
  const filePath = path.join(process.cwd(), 'public', pdf)

  // 2. Seguridad: si alguien pide un archivo que no existe → 404
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  // 3. Renderiza el PDF con un iframe apuntando a /<pdf>
  return (
    <div className="w-full h-screen">
      <iframe
        src={`/${pdf}`}
        className="w-full h-full border-0"
        title={`Visor de ${pdf}`}
      />
    </div>
  )
}

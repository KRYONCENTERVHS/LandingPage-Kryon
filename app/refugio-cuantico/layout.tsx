import { Metadata } from "next";
import { refugioCuanticoContent } from "@/content/refugioCuantico";

export const metadata: Metadata = {
  title: refugioCuanticoContent.seo.title,
  description: refugioCuanticoContent.seo.description,
  keywords: refugioCuanticoContent.seo.keywords,
  openGraph: {
    title: refugioCuanticoContent.seo.title,
    description: refugioCuanticoContent.seo.description,
    images: [
      {
        url: refugioCuanticoContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Un Refugio Cuántico para Sanar al Sanador - KRYON Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: refugioCuanticoContent.seo.title,
    description: refugioCuanticoContent.seo.description,
    images: [refugioCuanticoContent.seo.ogImage],
  },
};

export default function RefugioCuanticoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

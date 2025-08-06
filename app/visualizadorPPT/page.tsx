// app/visualizadorPPT/page.tsx
"use client";

import ClientVisorPPT from "./ClientVisor";

export default function VisualizadorPPTPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 text-center">Visor de PowerPoint</h1>
      <ClientVisorPPT />
    </div>
  );
}

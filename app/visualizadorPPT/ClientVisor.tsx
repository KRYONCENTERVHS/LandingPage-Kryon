// app/visualizadorPPT/ClientVisor.tsx
"use client";

export default function ClientVisorPPT() {
  const fileUrl = encodeURIComponent("https://kryoncenter.com/CCAQ.pptx");
  const viewerUrl =
    "https://view.officeapps.live.com/op/embed.aspx?src=" + fileUrl;

  return (
    <div className="w-full h-[600px] mx-auto">
      <iframe
        src={viewerUrl}
        className="w-full h-full"
        style={{ border: "none" }}
        title="Visor de PowerPoint"
      />
    </div>
  );
}

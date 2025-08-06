export default function VisorPDFIframe() {
  return (
    <div className="w-4/5 h-[600px] mx-auto">
      <iframe
        src="/JOBSY.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
        title="Visor de PDF"
      />
    </div>
  );
}

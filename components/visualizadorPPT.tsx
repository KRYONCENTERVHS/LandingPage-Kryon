"use client";

export default function VisorPPTFrame(){
    const fileUrl = "https://kryoncenter.com/CCAQ.pptx";
    const viewerUrl =     "https://view.officeapps.live.com/op/embed.aspx?src=" +
    encodeURIComponent(fileUrl);

    return(
        <div className="w-full h-screen">
            <iframe 
                src={viewerUrl}
                className="w-full h-full"
                style={{border: "none"}}
                title="Visor de PPTX"
            />
        </div>
    )
}
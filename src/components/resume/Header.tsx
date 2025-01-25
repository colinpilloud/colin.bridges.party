import { Button, Link } from "@heroui/react";

export function Header() {
  function download() {
    // this should start a download of /colin-bridges-resume.pdf
    const link = document.createElement("a");
    link.href = "/colin-bridges-resume.pdf";
    link.download = "colin-bridges-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="-mr-4 mb-4 md:-mr-[10vw]">
      <div className="flex flex-row flex-nowrap items-center gap-4 screen:hidden">
        <div className="flex flex-col items-end justify-end text-right">
          <h1 className="font-metal text-md">Colin Bridges</h1>
          <h4 className="-mt-2 font-sans text-sm lowercase">(Colin Bridges)</h4>
        </div>
        <div className="flex flex-col items-start justify-end text-sm">
          <h2 className="font-semibold">colin.bridges.party</h2>
          <h2 className="font-semibold">colin@bridges.party</h2>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap items-center gap-6 text-center print:hidden">
        <Link href="/about" className="mt-1 font-metal text-md normal-case">
          Colin Bridges
        </Link>
        <Button onPress={download} variant="ghost" size="md" color="primary">
          Download PDF
        </Button>
      </div>
    </div>
  );
}

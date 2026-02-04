import { Link } from "react-router-dom";

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
    <div className="-mr-4 mb-4 not-print:md:-mr-[10vw]">
      <div className="grid grid-cols-2 items-center gap-4 not-print:hidden">
        <div className="flex flex-col items-end justify-end text-right">
          <h1 className="font-metal text-xl tracking-[0.05em]">
            Colin Bridges
          </h1>
          <h4 className="-mt-[0.6rem] font-sans text-[0.8rem] lowercase">
            (Colin Bridges)
          </h4>
        </div>
        <div className="flex flex-col items-start justify-end text-[0.8rem]">
          <h2 className="font-semibold">colin.bridges.party</h2>
          <h2 className="font-semibold">colin@bridges.party</h2>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap items-center gap-6 text-center print:hidden">
        <Link
          to="/about"
          className="font-metal text-md mt-1 tracking-[-0.10em] normal-case"
        >
          Colin Bridges
        </Link>
        <button
          onClick={download}
          type="button"
          className="text-neutral btn-md btn-primary btn"
        >
          Download Printable PDF
        </button>
      </div>
    </div>
  );
}

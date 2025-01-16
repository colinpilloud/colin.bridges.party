export function RetroPoster() {
  return (
    <div className="saturate-120 flex h-screen w-screen flex-col justify-center gap-32 bg-[url('me-grainy.png')] bg-cover px-[10%] text-right uppercase leading-[1.125] text-[#e84828] bg-blend-multiply filter">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('scratch.png')] bg-cover"></div>
      <h1 className="text-[5rem] xl:text-[8rem]">
        You have software problems.
      </h1>
      <p className="text-[3.5rem]">We can solve them.</p>
      <div className="flex flex-col items-end gap-4">
        <div>· More</div>
        <div>· Portfolio</div>
        <div>· Resume</div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full"></div>
    </div>
  );
}

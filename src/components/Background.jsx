const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className=" absolute top-[5%] text-zinc-300 font-semibold w-full text-xl py-10 flex justify-center">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[16vw]  text-slate-100 leading-none tracking-tight">
        Docs.
      </h1>
    </div>
  );
};

export default Background;

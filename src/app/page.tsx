import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-extrabold text-[#B8860B] drop-shadow-[0_0_10px_rgba(184,134,11,0.8)] animate-pulse">
          SUBSIDIZED ENERGY
        </h1>
      </main>
    </div>
  );
}

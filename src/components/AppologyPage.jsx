"use client";

import Image from "next/image";

export function ApologyPage({ onBack }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a0f0f] via-[#2b1212] to-black px-4 py-12">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-red-100 mb-6 drop-shadow-lg">
          I’m Really Sorry 😔
        </h1>

        <p className="text-lg md:text-xl text-red-300 mb-10 leading-relaxed">
          I messed up. And I know sorry isn’t always enough… But I mean it with
          my whole heart. You matter to me more than my ego ever will.
        </p>

        <div className="mb-10 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900/40">
            <Image
              src="/bouquet.png" // <-- put your bouquet image here
              alt="Bouquet of flowers for you"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-base md:text-lg text-red-300 italic mb-12">
          This bouquet is small… but my love for you isn’t. Forgive me my Lady.
        </p>

        <button
          onClick={onBack}
          className="px-10 py-5 text-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
        >
          Go Back 😌
        </button>
      </div>
    </div>
  );
}

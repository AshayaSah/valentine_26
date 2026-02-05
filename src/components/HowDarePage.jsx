"use client";

import Image from "next/image";

export function HowDarePage({ onBack }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a0f0f] via-[#2b1212] to-black px-4 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-red-100 mb-4 tracking-tight drop-shadow-lg">
            How *Dare* You 😤
          </h1>
          <p className="text-red-300 italic text-lg">
            Wow. Just… wow. The audacity.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-red-900/40">
            <Image
              src="/catwithknife.png"
              alt="Angry cat with knife"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover opacity-100"
              priority
            />
          </div>
        </div>

        <div className="text-red-100 mb-10">
          <p className="text-xl md:text-2xl font-light mb-3">
            You really clicked <span className="font-semibold">No</span>, huh?
          </p>
          <p className="text-base md:text-lg text-red-300">
            Bold move. I respect the confidence. Question it… but respect it.
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-8 py-5 text-lg bg-red-100 text-black hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg font-semibold rounded-xl"
        >
          Okay okay… go back 😔
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export function HowDarePage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main card with gentle shadow - matching SelectionPage */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-100/50 p-6 border border-rose-100/50">
          {/* Decorative top element */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 rounded-full"></div>
          </div>

          {/* Header section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 tracking-tight leading-tight">
              How *Dare* You 😤
            </h1>
            <p className="text-rose-600/90 italic text-base text-center font-medium">
              Wow. Just… wow. The audacity.
            </p>
          </div>

          {/* Image container */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/catwithknife.png"
                alt="Angry cat with knife"
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Message section */}
          <div className="text-gray-700 mb-6 px-2">
            <p className="text-lg font-light mb-2 leading-snug text-center">
              You really clicked{" "}
              <span className="font-semibold text-rose-600">No</span>, huh?
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              Bold move. I respect the confidence. Question it… but respect it.
            </p>
          </div>

          {/* Back button - matching the "Yes" button style */}
          <button
            onClick={onBack}
            className="w-full py-4 rounded-xl font-medium text-base
                     bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 
                     text-white shadow-lg shadow-rose-200/50
                     hover:shadow-xl hover:shadow-rose-300/50
                     active:scale-95
                     transition-all duration-200 ease-out"
          >
            Okay okay… go back 😔
          </button>

          {/* Bottom decorative element */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
              <div className="w-2 h-2 rounded-full bg-pink-300"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-4 text-sm text-gray-500/80 px-4 italic">
          (Maybe reconsider? I promise it's worth it... 🥺)
        </p>
      </div>
    </div>
  );
}

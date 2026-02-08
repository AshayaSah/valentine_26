"use client";

import Image from "next/image";

export function ChocolateDaySelectionPage({ onYes, onNo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b2417] via-[#5a3522] to-[#7a4a2e] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-[#f6efe9]/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 p-6 border border-[#c4a484]/40">
          {/* Top glow bar */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-1 bg-gradient-to-r from-[#6f3c1e] via-[#8b5a2b] to-[#b07a3a] rounded-full" />
          </div>

          {/* Main heading */}
          <h1 className="text-2xl font-light text-center mb-3 text-[#3b2417] leading-snug">
            It’s already Chocolate Day… 🍫
            <span className="block text-[#8b5a2b] font-medium mt-1">
              and I only want to share it with my special one -- Ms Sabunam
            </span>
          </h1>

          {/* Romantic message */}
          <p className="text-base text-center mb-4 text-[#4b2e1a] leading-relaxed">
            Chocolate is sweet… but not sweeter than the way you make my heart
            feel. Not a good one, though.
            <span className="block mt-2 text-[#8b5a2b] font-medium">
              So tell me… will you be my forever flavor? 🤎 Please...
            </span>
          </p>

          {/* Image */}
          <div className="relative w-full aspect-square max-w-[260px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#c4a484]/60">
            <Image
              src="/catwithchocolate.png"
              alt="Chocolate day love"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Emoji */}
          <div className="text-5xl text-center mb-6 animate-pulse">🍫🤎</div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={onNo}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-[#ede1d3] text-[#3b2417]
                         hover:bg-[#e4d3c1] hover:shadow-md
                         active:scale-95 transition-all duration-200"
            >
              Don’t tease me… 😩
            </button>

            <button
              onClick={onYes}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-gradient-to-r from-[#6f3c1e] via-[#8b5a2b] to-[#b07a3a]
                         text-white shadow-lg shadow-black/30
                         hover:shadow-xl hover:shadow-black/40
                         active:scale-95 transition-all duration-200"
            >
              Be my Chocolate 🍫💖
            </button>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#8b5a2b]" />
              <div className="w-2 h-2 rounded-full bg-[#b07a3a]" />
              <div className="w-2 h-2 rounded-full bg-[#d6a66c]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-sm text-[#f3e7db] px-4">
          You’re the only sweet I crave every day 🤎
        </p>
      </div>
    </div>
  );
}

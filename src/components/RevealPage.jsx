"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function RevealPage({ onBack }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const bgMain = "bg-gradient-to-br from-[#3b2417] via-[#5a3522] to-[#7a4a2e]";
  const cardBg = "bg-[#f6efe9]/95";
  const accent = "bg-gradient-to-r from-[#6f3c1e] via-[#8b5a2b] to-[#b07a3a]";

  if (!mounted) {
    return (
      <div
        className={`min-h-screen ${bgMain} flex items-center justify-center p-4`}
      >
        <div
          className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-black/40 p-6 border border-[#c4a484]/40 text-center`}
        >
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-1 ${accent} rounded-full`} />
          </div>

          <h1 className="text-3xl font-bold text-[#3b2417] mb-3">
            Your Sweet Surprise! 🍫✨
          </h1>

          <p className="text-[#4b2e1a] mb-6 leading-relaxed">
            A little something sweet for the sweetest person in my life...
          </p>

          <div className="mb-6 flex justify-center">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#c4a484]/60">
              <Image
                src="/chocolatebouquet.png"
                alt="Chocolate bouquet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <button
            onClick={onBack}
            className={`w-full py-4 rounded-xl font-medium text-base ${accent}
            text-white shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-200 ease-out`}
          >
            Back to Sweetness 🍫💗
          </button>

          <p className="mt-4 text-xs text-[#6b4a2f]">
            Made with love, wrapped with care 💝
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${bgMain} flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 10 + 15;

        return (
          <motion.div
            key={i}
            className="absolute text-4xl pointer-events-none opacity-20"
            initial={{ x: `${randomX}vw`, y: "100vh", rotate: 0 }}
            animate={{ y: "-100vh", rotate: 360 }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          >
            {["🍫", "🤎", "🌹", "✨"][i % 4]}
          </motion.div>
        );
      })}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-black/40 p-6 border border-[#c4a484]/40 text-center relative z-10`}
      >
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-1 ${accent} rounded-full`} />
        </div>

        <h1 className="text-3xl font-bold text-[#3b2417] mb-3">
          Your Sweet Surprise! 🍫✨
        </h1>

        <p className="text-[#4b2e1a] mb-4 text-lg">
          A chocolate bouquet for my favorite person in the whole world! 💐 I
          know you love Dairy Milk. Cant get you the real onebut but a virtual
          one ..
        </p>

        <p className="text-[#5a3a22] mb-6 italic">
          Because you deserve something as sweet as you are...
          <br />
          <span className="text-[#8b5a2b] font-semibold">
            maybe even sweeter! 😊
          </span>
        </p>

        <div className="mb-6 flex justify-center">
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#c4a484]/60">
            <Image
              src="/chocolatebouquet.png"
              alt="Chocolate bouquet"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-[#ede1d3] rounded-xl p-4 mb-6">
          <p className="text-sm text-[#4b2e1a]">
            🍫 <span className="font-semibold">Fun fact:</span> This bouquet is
            100% calorie-free*
            <br />
            <span className="text-xs text-[#6b4a2f]">
              *because it's made with love, not actual chocolate (definately) 😅
            </span>
          </p>
        </div>

        <button
          onClick={onBack}
          className={`w-full py-4 rounded-xl font-medium text-base ${accent}
          text-white shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-200 ease-out`}
        >
          Back to Sweetness 🍫💗
        </button>

        <p className="mt-4 text-xs text-[#6b4a2f]">
          Made with love, wrapped with care 💝
          <br />
          <span className="text-[#8b5a2b]">Happy Chocolate Day! 🍫</span>
        </p>
      </motion.div>
    </div>
  );
}

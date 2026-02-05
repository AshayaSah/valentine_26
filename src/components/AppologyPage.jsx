"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function ApologyPage({ onBack, handleForgive }) {
  const [hearts, setHearts] = useState([]);
  const [showExtra, setShowExtra] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No, I didn't 😤");
  const [noClickCount, setNoClickCount] = useState(0);

  // Floating hearts animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev.slice(-10), newHeart]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Show extra message after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowExtra(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Funny messages when clicking "No"
  const noButtonMessages = [
    "No, I didn't 😤",
    "Wait... think again 🤔",
    "Are you sure? 🥺",
    "Really?? 😢",
    "Please? 🙏",
    "Come on... 💔",
    "My heart... 😭",
    "Fine... but still love you 😔",
  ];

  const handleNoClick = () => {
    if (noClickCount < 7) {
      setNoClickCount((prev) => prev + 1);
      setNoButtonText(
        noButtonMessages[
          Math.min(noClickCount + 1, noButtonMessages.length - 1)
        ],
      );
    } else {
      // After 7 clicks, redirect back
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl animate-float pointer-events-none"
          style={{
            left: `${heart.left}%`,
            bottom: "-10%",
            animationDelay: `${heart.delay}s`,
          }}
        >
          💗
        </div>
      ))}

      <div className="max-w-md w-full relative z-10">
        {/* Main card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-100/50 p-6 border border-rose-100/50">
          {/* Decorative top element */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full"></div>
          </div>

          {/* Header */}
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 tracking-tight leading-tight">
            I'm Really Sorry 😔
          </h1>

          {/* Main apology message */}
          <p className="text-base text-gray-700 mb-6 leading-relaxed text-center px-2">
            I messed up. And I know sorry isn't always enough… But I mean it
            with my whole heart. You matter to me more than anything{" "}
            <strong>Always</strong>.
          </p>

          {/* Bouquet image */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg ring-2 ring-rose-200/50">
              <Image
                src="/bouquet.png"
                alt="Bouquet of flowers for you"
                fill
                sizes="256px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Sweet message under bouquet */}
          <p className="text-sm text-rose-600 italic mb-6 text-center font-medium px-2">
            This bouquet is small… but my love for you isn't.
            <br />
            <span className="text-purple-600">Forgive me, my Lady. 👑</span>
          </p>

          {/* Extra heartfelt section (fades in) */}
          {showExtra && (
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 mb-6 border border-rose-200/50 animate-fadeIn">
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                I promise to do better. You totally deserve me, my care, and
                remember I am always there for you. 💕
              </p>
            </div>
          )}

          {/* Reasons I love you section */}
          <div className="mb-6 space-y-2">
            <p className="text-xs font-semibold text-gray-600 text-center mb-3">
              Just a few reasons why you're irreplaceable:
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2 bg-rose-50/50 rounded-lg p-2">
                <span className="text-base">✨</span>
                <span>Your smile lights up my entire world</span>
              </div>
              <div className="flex items-start gap-2 bg-pink-50/50 rounded-lg p-2">
                <span className="text-base">💫</span>
                <span>You make me want to be a better person</span>
              </div>
              <div className="flex items-start gap-2 bg-purple-50/50 rounded-lg p-2">
                <span className="text-base">🌸</span>
                <span>Life is simply better with you in it</span>
              </div>
            </div>
          </div>

          {/* Buttons section - fixed positions */}
          <div className="space-y-3">
            {/* Yes button */}
            <button
              onClick={handleForgive}
              className="w-full py-4 rounded-xl font-medium text-base
                       bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 
                       text-white shadow-lg shadow-rose-200/50
                       hover:shadow-xl hover:shadow-rose-300/50
                       active:scale-95
                       transition-all duration-200 ease-out"
            >
              I forgive you 😌💕
            </button>

            {/* No button - stays in place, just changes text */}
            <button
              onClick={handleNoClick}
              className="w-full py-4 rounded-xl font-medium text-base
                       bg-gray-100 text-gray-700 
                       hover:bg-gray-200
                       active:scale-95
                       transition-all duration-200 ease-out"
            >
              {noButtonText}
            </button>
          </div>

          {/* Hint text after a few attempts */}
          {noClickCount > 3 && noClickCount < 7 && (
            <p className="text-xs text-center text-rose-500 mt-4 italic animate-fadeIn">
              Keep clicking if you're really sure... but I hope you'll
              reconsider 🥺
            </p>
          )}

          {noClickCount === 7 && (
            <p className="text-xs text-center text-rose-500 mt-4 italic animate-fadeIn">
              One more click will take you back... Last chance to forgive me? 💔
            </p>
          )}

          {/* Bottom decorative element */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
              <div
                className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer message */}
        <p className="text-center mt-4 text-sm text-gray-600 px-4">
          Thank you for giving me a chance to make things right 🙏💗
        </p>
      </div>

      <style>{`
        @keyframes float {
            0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            }
            50% {
            opacity: 0.8;
            }
            100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
            }
        }
        @keyframes fadeIn {
            from {
            opacity: 0;
            transform: translateY(10px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }
        .animate-float {
            animation: float 6s ease-in forwards;
        }
        .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
        }
    `}</style>
    </div>
  );
}

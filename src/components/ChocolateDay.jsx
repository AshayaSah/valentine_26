"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChocolateDay({ handleReveal }) {
  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [mounted, setMounted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "If I were a chocolate, what would I be? 🤔",
      options: [
        { text: "Dark Chocolate", subtitle: "kind of me" },
        { text: "White Chocolate", subtitle: "not kind of me" },
        {
          text: "Milk Chocolate",
          subtitle: "great but still not kind of me.. huhu",
        },
        { text: "Expired Chocolate", subtitle: "still trying my best 😅" },
      ],
    },
    {
      id: 2,
      question: "What's the real reason I'm giving you chocolate? 🍫",
      options: [
        { text: "Because I'm romantic", subtitle: "obviously" },
        { text: "Because I forgot earlier", subtitle: "oops" },
        { text: "To make you smile", subtitle: "my favorite view" },
        { text: "Cause I want something", subtitle: "maybe a kiss" },
      ],
    },
    {
      id: 3,
      question: "Now... your favorite chocolate? 💝",
      options: [
        { text: "Dairy Milk", subtitle: "classic choice" },
        { text: "KitKat", subtitle: "break time!" },
        { text: "Five Star", subtitle: "yum yum" },
        { text: "Sir Ashaya", subtitle: "the sweetest 😏" },
      ],
      isSpecial: true,
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 600);
    } else {
      setTimeout(() => setStage("chocolate"), 800);
    }
  };

  const getChocolateResponse = () => {
    const answer = answers[3];
    if (answer === "Sir Ashaya") {
      return {
        image: "🍫✨",
        title: "CORRECT ANSWER! 🎉",
        message:
          "You chose the sweetest option... me! 😊 Now here's something even sweeter...",
        delay: 2000,
      };
    } else {
      return {
        image: "😢",
        title: `${answer}? Really? 💔`,
        message:
          "I'm heartbroken... but I'll forgive you because you're cute. Here's your real gift anyway... 😌",
        delay: 2500,
      };
    }
  };

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#3b2417] via-[#5a3522] to-[#7a4a2e] overflow-hidden">
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 text-center">
          <div>
            <div className="text-9xl mb-8">🍫</div>
            <h1 className="text-5xl font-bold text-[#f3e7db] mb-4">
              Happy Chocolate Day My Lady!
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#3b2417] via-[#5a3522] to-[#7a4a2e] overflow-y-auto">
      {mounted &&
        Array.from({ length: 15 }).map((_, i) => {
          const randomX = Math.random() * window.innerWidth;
          const randomDuration = Math.random() * 10 + 10;
          const randomDelay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute text-4xl pointer-events-none opacity-30"
              initial={{ x: randomX, y: -50, rotate: 0 }}
              animate={{ y: window.innerHeight + 50, rotate: 360 }}
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

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-9xl mb-8"
              >
                🍫
              </motion.div>
              <h1 className="text-5xl font-bold text-[#f3e7db] mb-4">
                Happy Chocolate Day!
              </h1>
              <p className="text-xl text-[#e7d6c4] mb-8">
                Before I give you my heart... <br />
                Let's play a little game 😏
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage("quiz")}
                className="bg-gradient-to-r from-[#6f3c1e] via-[#8b5a2b] to-[#b07a3a]
                text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg"
              >
                Let's Go! 🎮
              </motion.button>
            </motion.div>
          )}

          {/* QUIZ */}
          {stage === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="bg-[#f6efe9]/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-[#c4a484]">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-[#8b5a2b]">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex gap-2">
                      {questions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 w-8 rounded-full ${
                            idx <= currentQuestion
                              ? "bg-[#8b5a2b]"
                              : "bg-[#e4d3c1]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <motion.h2
                    key={currentQuestion}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl font-bold text-[#3b2417] mb-8"
                  >
                    {questions[currentQuestion].question}
                  </motion.h2>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleAnswer(questions[currentQuestion].id, option.text)
                      }
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                        questions[currentQuestion].isSpecial &&
                        option.text === "Sir Ashaya"
                          ? "bg-gradient-to-r from-[#ede1d3] to-[#e4d3c1] border-[#c4a484]"
                          : "bg-white border-[#e4d3c1] hover:border-[#8b5a2b] hover:bg-[#ede1d3]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-lg text-[#3b2417]">
                            {option.text}
                          </div>
                          <div className="text-sm text-[#6b4a2f]">
                            {option.subtitle}
                          </div>
                        </div>
                        {questions[currentQuestion].isSpecial &&
                          option.text === "Sir Ashaya" && (
                            <span className="text-2xl">👑</span>
                          )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CHOCOLATE RESPONSE */}
          {stage === "chocolate" && (
            <motion.div
              key="chocolate"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-center"
              onAnimationComplete={() => {
                setTimeout(
                  () => setStage("reveal"),
                  getChocolateResponse().delay,
                );
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-9xl mb-6"
              >
                {getChocolateResponse().image}
              </motion.div>
              <h2 className="text-4xl font-bold text-[#f3e7db] mb-4">
                {getChocolateResponse().title}
              </h2>
              <p className="text-xl text-[#e7d6c4]">
                {getChocolateResponse().message}
              </p>
            </motion.div>
          )}

          {/* REVEAL */}
          {stage === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-3xl"
            >
              <div className="bg-[#f6efe9]/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-[#c4a484]">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">🍫💝</div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-[#6f3c1e] to-[#b07a3a] bg-clip-text text-transparent mb-4">
                    Happy Chocolate Day 🍫
                  </h1>
                </div>

                <div className="text-[#4b2e1a] space-y-4 mb-8 text-lg leading-relaxed">
                  <p className="font-semibold text-2xl text-[#8b5a2b] mb-6">
                    To the sweetest girl in my world…
                  </p>

                  <p>
                    If love had a flavor, it would definately taste like you,
                    haha.. warm, rich, and impossible to get enough of.
                  </p>

                  <p>
                    Even when you're far away, you're still wrapped around my
                    thoughts like my favorite sweet.
                  </p>

                  <p className="font-semibold text-xl text-[#8b5a2b] pt-4">
                    So today, I give you all my chocolates… and all my heart 🤎
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReveal}
                  className="w-full bg-gradient-to-r from-[#6f3c1e] via-[#8b5a2b] to-[#b07a3a]
                  text-white py-5 rounded-2xl text-2xl font-bold shadow-lg"
                >
                  🍫 Open My Heart 🍫
                </motion.button>

                <p className="text-center mt-8 text-[#6b4a2f] italic">
                  Forever yours, <br />
                  <span className="text-[#8b5a2b] font-semibold text-xl">
                    — Ashaya 💌
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

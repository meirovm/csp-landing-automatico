import { useState, useRef } from "react";
import Button from "./foundational/Button";
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "Why should I use [[Brand]] instead of a third-party marketplace?",
    answer:
      "[[Brand]] avoids middleman fees, offers direct hardware access, and aligns our incentives with yours, ensuring high reliability and customer-focused service.",
  },
  {
    id: 2,
    question: "Can I get custom server configuration?",
    answer:
      "We may be able to provision a custom server for you conditioned on a down payment. Please contact us.",
  },
  {
    id: 3,
    question: "How is support handled?",
    answer:
      "Support is unmanaged but proactive, with assistance available via email and Discord, plus preventive measures to avoid future issues.",
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [parent] = useAutoAnimate({ duration: 300 });

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-black p-12">
      <div className="w-full max-w-4xl">
        <h2 className="mb-10 text-center text-4xl text-white">
          Answers to our frequently asked questions
        </h2>
        <div ref={parent} className="space-y-2">
          {questions.map(({ id, question, answer }, index) => (
            <div
              key={id}
              className={`border-gray-700 ${index === 0 ? "border-t" : ""} ${
                index === questions.length - 1 ? "border-b" : "border-b"
              }`}
            >
              <Button
                onClick={() => toggle(id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-white transition-colors duration-300 ease-in-out"
              >
                {question}
                <span
                  className={`text-3xl font-extrabold text-gray-500 transition-transform duration-300 ${
                    openId === id ? 'rotate-90' : 'rotate-0'
                  }`}
                  style={{ fontSize: "2rem" }}
                >
                  →
                </span>
              </Button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mb-5 px-6 text-gray-400">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
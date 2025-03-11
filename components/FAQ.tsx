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
    question: "Почему я должен использовать AUTOMATICO, а не сторонний рынок?",
    answer:
      "AUTOMATICO избегает комиссий посредников, предлагает прямой доступ к оборудованию и согласовывает наши интересы с вашими, обеспечивая высокую надежность и ориентированность на клиента.",
  },
  {
    id: 2,
    question: "Могу ли я получить индивидуальную конфигурацию сервера?",
    answer:
      "Мы можем предоставить вам индивидуальный сервер при условии предоплаты. Пожалуйста, свяжитесь с нами.",
  },
  {
    id: 3,
    question: "Как осуществляется поддержка?",
    answer:
      "Поддержка по электронной почте и Discord, а также с превентивными мерами для предотвращения будущих проблем.",
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
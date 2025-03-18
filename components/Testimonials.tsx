import React from "react";
import "../app/globals.css";

type Testimonial = {
  id: number;
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Accounting Pro",
    text: "Аренда GPU оказалась невероятно удобной для закрытия документов по бухгалтерии. Теперь мы можем обрабатывать большие объемы данных гораздо быстрее и эффективнее. Это значительно упростило нашу работу и сократило время на выполнение задач.",
  },
  {
    id: 2,
    name: "Kazakhstan Data Center",
    text: "Наконец-то нашел GPU на территории Казахстана! Это позволяет нам соблюдать законодательство о трансграничной передаче персональных данных и при этом использовать мощные вычислительные ресурсы. Очень доволен сервисом!",
  },
  {
    id: 3,
    name: "Tech Solutions",
    text: "Отличный сервис! Аренда GPU позволила нам значительно ускорить наши вычисления и сократить время на обработку данных. Рекомендуем!",
  },  
];

const Testimonials: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-8 sm:py-12">
      <h2 className="mb-10 sm:mb-20 text-3xl sm:text-4xl md:text-5xl text-center font-bold text-white">
        Отзывы наших довольных пользователей
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="mb-6 sm:mb-10 flex h-full flex-col justify-between text-left text-base sm:text-lg italic text-zinc-400"
          >
            <p className="mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            <div className="relative flex items-end not-italic text-white">
              <span className="border-t-2 border-blue-500 pt-2 text-sm sm:text-base text-zinc-400">
                {testimonial.name}
              </span>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

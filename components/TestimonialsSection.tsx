import React from 'react';
import Card from './Card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Accounting Pro",
      role: "Бухгалтерия",
      testimonial: "Аренда GPU оказалась невероятно удобной для закрытия документов по бухгалтерии. Теперь мы можем обрабатывать большие объемы данных гораздо быстрее и эффективнее. Это значительно упростило нашу работу и сократило время на выполнение задач.",
      avatar: ""
    },
    {
      name: "Kazakhstan Data Center",
      role: "Дата-центр",
      testimonial: "Наконец-то нашел GPU на территории Казахстана! Это позволяет нам соблюдать законодательство о трансграничной передаче персональных данных и при этом использовать мощные вычислительные ресурсы. Очень доволен сервисом!",
      avatar: ""
    },
    {
      name: "Tech Solutions",
      role: "IT Компания",
      testimonial: "Отличный сервис! Аренда GPU позволила нам значительно ускорить наши вычисления и сократить время на обработку данных. Рекомендуем!",
      avatar: ""
    }
  ];

  return (
    <section className="w-full h-full flex items-center justify-center lg:max-h-[600px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы наших довольных пользователей
          </h2>
          <p className="text-xl text-foreground">
            Присоединяйтесь к сотням довольных исследователей ИИ и разработчиков
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="testimonial"
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


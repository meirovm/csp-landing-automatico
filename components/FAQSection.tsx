import React from 'react';
import Card from './Card';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Почему я должен использовать AUTOMATICO, а не сторонний рынок?",
      answer: "AUTOMATICO избегает комиссий посредников, предлагает прямой доступ к оборудованию и согласовывает наши интересы с вашими, обеспечивая высокую надежность и ориентированность на клиента."
    },
    {
      question: "Могу ли я получить индивидуальную конфигурацию сервера?",
      answer: "Мы можем предоставить вам индивидуальный сервер при условии предоплаты. Пожалуйста, свяжитесь с нами."
    },
    {
      question: "Как осуществляется поддержка?",
      answer: "Поддержка по электронной почте и Discord, а также с превентивными мерами для предотвращения будущих проблем."
    },
    {
      question: "Как рассчитывается оплата?",
      answer: "Оплата рассчитывается поминутно за использование GPU. Вы платите только за время работы вашего инстанса."
    }
  ];

  return (
    <section className="w-full h-full flex items-center justify-center mt-14 md:min-h-[900px]" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-foreground">
            Всё, что вам нужно знать о нашем сервисе аренды GPU
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              variant="faq"
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


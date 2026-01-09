import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AUTOMATICO - GPU в дата-центрах Казахстана | Прямая аренда без посредников</title>
        <meta
          name="description"
          content="Арендуйте мощные GPU напрямую у владельца дата-центра в Казахстане. RTX 4090, RTX 5090, H100, A100. Без посредников, без обязательств, без скрытых платежей. Аренда по минутам."
        />
        <meta
          name="keywords"
          content="аренда GPU Казахстан, RTX 4090 аренда, RTX 5090 аренда, GPU дата-центр, вычисления ИИ, машинное обучение, майнинг криптовалют, GPU хостинг, облачные GPU, AUTOMATICO"
        />
        <link rel="canonical" href="https://automatico.kz/" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="AUTOMATICO - GPU в дата-центрах Казахстана" />
        <meta property="og:description" content="Арендуйте мощные GPU напрямую у владельца дата-центра. RTX 4090, RTX 5090, H100, A100. Без посредников, без обязательств." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatico.kz/" />
        <meta property="og:site_name" content="AUTOMATICO" />
        <meta property="og:image" content="https://automatico.kz/logo1.png" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AUTOMATICO - GPU в дата-центрах Казахстана" />
        <meta name="twitter:description" content="Арендуйте мощные GPU напрямую у владельца дата-центра. RTX 4090, RTX 5090, H100, A100. Без посредников." />
        <meta name="twitter:image" content="https://automatico.kz/logo1.png" />

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Почему я должен использовать AUTOMATICO, а не сторонний рынок?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'AUTOMATICO избегает комиссий посредников, предлагает прямой доступ к оборудованию и согласовывает наши интересы с вашими, обеспечивая высокую надежность и ориентированность на клиента.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Могу ли я получить индивидуальную конфигурацию сервера?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Мы можем предоставить вам индивидуальный сервер при условии предоплаты. Пожалуйста, свяжитесь с нами.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Как осуществляется поддержка?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Поддержка по электронной почте и Discord, а также с превентивными мерами для предотвращения будущих проблем.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Как рассчитывается оплата?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Оплата рассчитывается поминутно за использование GPU. Вы платите только за время работы вашего инстанса.',
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AUTOMATICO',
              url: 'https://automatico.kz',
              logo: 'https://automatico.kz/logo1.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+7-706-68-68-101',
                contactType: 'customer service',
                availableLanguage: ['Russian', 'English'],
              },
              sameAs: [
                'https://discord.gg/Jyu5rV5N',
              ],
            }),
          }}
        />
      </Head>
      
      <main>
        <Navbar />
        <Hero />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;

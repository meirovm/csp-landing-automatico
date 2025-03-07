import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

const queryClient = new QueryClient();

// SEO Configuration
const seoConfig = {
  titleTemplate: '%s | <<Brand>>',
  defaultTitle: '<<Brand>> - Datacenter-Hosted GPUs | AI, ML, and Crypto Mining',
  description: '<<Brand>> offers high-performance GPU hosting solutions powered by CloudRift. ' +
    'Rent directly from the datacenter with no middlemen. No commitment, no hidden fees. ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://<<Domain>>/',
    siteName: '<<Brand>>',
    title: '<<Brand>> - Datacenter-Hosted GPUs',
    description: 'Rent high-performance GPUs directly from the datacenter. ' +
      'No middlemen, no commitment, Tier 3 design with high-speed network. ',
    images: [
      {
        url: 'https://<<Domain>>/logo1.png',
        width: 800,
        height: 600,
        alt: '<<Brand>> Logo',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: '<<Brand>>, datacenter-hosted GPUs, direct GPU rental, no middlemen, AI computing, machine learning, cryptocurrency mining, <<Other Keywords>>'
    }
  ]
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={instrumentSans.variable}>
        <DefaultSeo {...seoConfig} />
        <Head>
          <link rel="icon" href="/logo1.png" type="image/png"/>
          <meta
              name="google-site-verification"
              content="XaOwYfGVLof09aZx12Qi6AhoCAKGJknTS9AN-OsoExQ"
          />
          <meta
              name="google-site-verification"
              content="7vpiZQBp0xIZ3jkWov3tTbltaI3fr53pcIFL3V3WIDU"
          />
          <link
              href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
              rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-K5XLCN5NMT"/>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
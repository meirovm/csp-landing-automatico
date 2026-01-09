import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Instrument_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from 'next/head';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  variable: '--font-instrument-sans',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/logo1.png" type="image/png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${instrumentSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

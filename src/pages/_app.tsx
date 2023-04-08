import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

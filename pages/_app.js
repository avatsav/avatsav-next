import '@/styles/global.css';
import '@/styles/fonts.css';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo.config';
import MDXComponents from '@/components/mdx/MDXComponents';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';

export default function App({Component, pageProps}) {
  SyntaxHighlighter.registerLanguage('kotlin', kotlin);
  SyntaxHighlighter.registerLanguage('java', java);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={ MDXComponents }>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
        </Head>
        <DefaultSeo { ...SEO } />
        <Component { ...pageProps } />
      </MDXProvider>
    </ThemeProvider>
  );
}

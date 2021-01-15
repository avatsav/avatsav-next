import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Image from "next/image";

const url = 'https://avatsav.dev/404';
const title = '404 – Abhijith Srivatsav';

// Source of Obiwan Kenobi icon: https://www.iconninja.com/obiwan-kenobi-icon-898644

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url: url,
          title: title
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-row items-center tooltip mb-3">
          <Image
            src="/404.svg"
            alt="kenobi"
            width={75}
            height={75}
            aria-hidden="true"
            className="tooltip"
            priority
          />
          <span className="tooltip-text ml-2 p-1 rounded-md">Hello there.</span>
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          This isn't the page you're looking for.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It seems you've found something that used to exist, or you spelled something
          wrong. Can you double check that URL?
        </p>
        <Link href="/">
          <a
            className="p-3 sm:p-3  bg-gray-200 dark:bg-gray-900 text-center rounded-md text-black dark:text-white transition-opacity hover:opacity-70">
            Return Home.
          </a>
        </Link>
      </div>
    </Container>
  );
}

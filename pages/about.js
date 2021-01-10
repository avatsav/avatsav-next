import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Image from "next/image";

const url = 'https://avatsav.dev/about';
const title = 'About Me – Abhijith Srivatsav';

export default function About() {
  return (
    <Container>
      <NextSeo
        title={ title }
        canonical={ url }
        openGraph={ {
          url: url,
          title: title
        } }
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white mb-8">
          About me
        </h1>
        <div className="mb-4">
          <Image
            src="/avatar.webp"
            alt="Picture of Abhi."
            width={ 250 }
            height={ 250 }
            aria-label="Picture of Abhi."
            className="rounded-md"
            priority
          />
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          <p>
            Hey, I'm Abhi. I'm a Software Engineer specializing in developing Android apps, living in the beautiful city
            of Munich. I work at Holidu as a Team Lead of Native apps development.
          </p>
          <p>
            🚧<strong>This section is under construction. Do check back later.</strong> 🚧
          </p>
        </div>
      </article>
    </Container>
  );
}

import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import BlogSeo from '@/components/BlogSeo';

export default function BlogLayout({children, frontMatter}) {
  return (
    <Container>
      <BlogSeo
        url={ `https://avatsav.dev/blog/${ frontMatter.slug }` }
        { ...frontMatter }
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          { frontMatter.title }
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-8 w-full">
          { format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy') }
          { '  —  ' }
          { frontMatter.readingTime.text }
        </p>
        <div className="prose dark:prose-dark max-w-none w-full">
          { children }
        </div>
      </article>
    </Container>
  );
}

import Container from '../components/Container';
import BlogPostItem from "@/components/items/BlogPostItem";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Link from "next/link";

export default function Home({recentPosts}) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          Hey, I'm Abhi.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-normal">
          I'm a <span className="underline">Software Engineer</span> specializing in developing Android apps, living in
          the beautiful city of Munich.
          I work at <a href="https://www.holidu.de">Holidu</a> as a Team Lead of Native apps development.
        </p>
        { recentPosts.length >= 1 && <div className="flex flex-col w-full justify-center">
          <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
            Recent Posts
          </h3>
          { recentPosts.map((frontMatter) => (
            <BlogPostItem key={ frontMatter.title } { ...frontMatter } />
          )) }
          <Link href="/blog">
            <a
              rel="noopener noreferrer"
              className="pt-3 inline-flex text-base items-center text-gray-900 dark:text-gray-100 transition-opacity hover:opacity-70"
            >
              { "All posts" }{ ' ' }
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   className="fill-current text-black dark:text-gray-400 mx-1 h-5 w-5">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </Link>
        </div> }
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('blog');
  const recentPosts = allPosts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.draft == null || frontMatter.draft === false)
    .slice(0, 2)
  return {props: {recentPosts}};
}
import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import Code from "@/components/mdx/Code";
import YoutubeVideo from "@/components/mdx/YoutubeVideo";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <Link href={ href }>
        <a { ...props } />
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" { ...props } />;
};

function InlineCode({children}) {
  return (
    <code className="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-200 p-1 rounded">
      { children }
    </code>
  );
}

const MDXComponents = {
  a: CustomLink,
  inlineCode: InlineCode,
  code: Code,
  Image,
  Tweet,
  YoutubeVideo
}

export default MDXComponents;

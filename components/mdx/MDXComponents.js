import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import Code from "@/components/mdx/Code";
import YoutubeVideo from "@/components/mdx/YoutubeVideo";
import clsx from "clsx";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function InlineCode({ children }) {
  return (
    <code className={clsx(
      'p-1',
      'text-black dark:text-gray-200',
      'rounded bg-gray-200 dark:bg-gray-800',
    )}>
      {children}
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

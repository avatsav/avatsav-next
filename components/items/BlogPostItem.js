import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import clsx from "clsx";

const BlogPostItem = ({ title, summary, publishedAt, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row">
            <h4
              className={clsx(
                'w-full',
                'mb-2 ',
                'font-medium text-lg md:text-xl',
                'text-gray-900 dark:text-gray-100',
                'transition-opacity hover:opacity-70'
              )}>
              {title}
            </h4>
            <p className={clsx(
              'w-32',
              'mb-4 md:mb-0',
              'text-left md:text-right',
              'text-sm text-gray-600 dark:text-gray-400',
            )}>
              {publishedAt ? format(parseISO(publishedAt), 'MMM dd, yyyy') : ""}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostItem;

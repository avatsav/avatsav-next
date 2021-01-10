import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const BlogPostItem = ({title, summary, publishedAt, slug}) => {
  return (
    <Link href={ `/blog/${ slug }` }>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row">
            <h4
              className="font-medium text-lg md:text-xl transition-opacity hover:opacity-70 mb-2 w-full text-gray-900 dark:text-gray-100">
              { title }
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-left md:text-right w-32 mb-4 md:mb-0">
              { publishedAt ? format(parseISO(publishedAt), 'MMM dd, yyyy') : "" }
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{ summary }</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostItem;

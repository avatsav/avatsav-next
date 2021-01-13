import Link from 'next/link';
import clsx from "clsx";

export default function SnippetItem(
  {
    title,
    description,
    slug,
    logo,
    ...rest
  }) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a className={clsx(
        'w-full',
        'p-4',
        'rounded bg-white dark:bg-gray-900',
        'border border-grey-200 dark:border-gray-800',
        'dark:hover:border-blue-500 hover:border-blue-500',
      )}
         {...rest}
      >
        <h3 className={clsx(
          'text-left',
          'font-bold text-lg',
          'text-gray-900 dark:text-gray-100'
        )}>
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}

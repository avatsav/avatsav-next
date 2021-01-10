import Link from 'next/link';

export default function SnippetItem(
  {
    title,
    description,
    slug,
    logo,
    ...rest
  }) {
  return (
    <Link href={ `/snippets/${ slug }` }>
      <a className="bg-white dark:bg-gray-900 border border-grey-200 dark:border-gray-800 rounded dark:hover:border-blue-500 hover:border-blue-500 p-4 w-full"
         { ...rest }
      >
        <h3 className="text-lg font-bold text-left text-gray-900 dark:text-gray-100">
          { title }
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{ description }</p>
      </a>
    </Link>
  );
}

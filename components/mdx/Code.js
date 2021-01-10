import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { base16AteliersulphurpoolLight as LightTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { atomDark as DarkTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Code({children, className}) {
  const {theme} = useTheme();
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => setMounted(true), []);

  const prismTheme = theme === 'light' ? LightTheme : DarkTheme;
  const backgroundColor = theme === 'light' ? '#FAFAFA' : '#1D1F21'
  const [ languageClass, title ] = (className).split(':');
  const language = languageClass.replace(/language-/, '');

  return (
    mounted &&
    <div className="my-4 rounded-md text-base overflow-hidden border dark:border-gray-800">
      { title != null &&
      <div
        className="flex items-center space-x-2 w-full px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-b dark:border-gray-800">
        <span className="text-sm font-mono font-bold">{ title }</span>
      </div>
      }
      <SyntaxHighlighter
        language={ language }
        style={ {...prismTheme} }
        PreTag={
          function PreTag({children, style}) {
            return (
              <pre style={ {
                ...style,
                margin: 0,
                border: "none",
                borderRadius: '0',
                background: backgroundColor,
                padding: "16px"
              } }>
                { children }
              </pre>
            );
          } }
        CodeTag={
          function CodeTag({children}) {
            return (
              <code style={ {background: backgroundColor} }>
                { children }
              </code>
            );
          } }
      >
        { children.trim() }
      </SyntaxHighlighter>
    </div>
  );
}

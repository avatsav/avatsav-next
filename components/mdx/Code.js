import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';
import {
  atomDark as DarkTheme,
  base16AteliersulphurpoolLight as LightTheme
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from "clsx";

function CodeTitle({ title }) {
  return <div
    className={clsx(
      'flex',
      'items-center space-x-2 w-full',
      'px-4 py-2',
      'bg-gray-200 dark:bg-gray-800',
      'text-gray-600 dark:text-gray-300',
      'border-b dark:border-gray-800'
    )}>
    <span className="text-sm font-mono font-bold">{title}</span>
  </div>
}

function CodeContainer({ children }) {
  return <div className={clsx(
    'my-4',
    'rounded-md',
    'text-base',
    'border dark:border-gray-800',
    'overflow-hidden'
  )}>
    {children}
  </div>
}


export default function Code({ children, className }) {
  const { theme } = useTheme();
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => setMounted(true), []);
  
  const prismTheme = theme === 'light' ? LightTheme : DarkTheme;
  const backgroundColor = theme === 'light' ? '#FAFAFA' : '#1D1F21'
  const [ languageClass, title ] = (className).split(':');
  const language = languageClass.replace(/language-/, '');
  
  return (
    mounted &&
    <CodeContainer>
      {title != null && <CodeTitle title={title}/>}
      <SyntaxHighlighter
        language={language}
        style={{ ...prismTheme }}
        PreTag={
          function PreTag({ children, style }) {
            return (
              <pre style={{
                ...style,
                margin: 0,
                border: "none",
                borderRadius: '0',
                background: backgroundColor,
                padding: "16px"
              }}>
                {children}
              </pre>
            );
          }}
        CodeTag={
          function CodeTag({ children }) {
            return (
              <code style={{ background: backgroundColor }}>
                {children}
              </code>
            );
          }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </CodeContainer>
  );
}

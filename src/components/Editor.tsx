import React, {useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

type Sourcecode = {
    sourcecode: string;
  };

function CodeEditor(sourcecode?: string) {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    if (sourcecode) {
        setCode(sourcecode)
    }
    console.log(code)
  },[sourcecode])

  return (
    <Editor
      value={`${code.sourcecode}`}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16
      }}
    />
  );
}

export { CodeEditor }
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; // Example style, you can use another

import Prism from 'prismjs';
import { highlight } from 'prismjs/components/prism-core';
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';

import type { PistacheWeb3function } from '@/interfaces';

function CodeEditor({ sourcecode }: PistacheWeb3function) {
  const [code, setCode] = useState();

  useEffect(() => {
    if (sourcecode) {
      setCode(sourcecode);
    }
    console.log(sourcecode);
  }, [sourcecode]);

  return (
    <Editor
      value={`${code}`}
      onValueChange={(scode) => setCode(scode)}
      highlight={(hcode) =>
        highlight(hcode, Prism.languages.javascript, 'javascript')
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
}

export { CodeEditor };

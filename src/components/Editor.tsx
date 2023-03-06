import 'prismjs/themes/prism.css'; // Example style, you can use another

import Prism from 'prismjs';
import { highlight } from 'prismjs/components/prism-core';
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';

import type { PistacheWeb3function } from '@/interfaces';

function CodeEditor(props: PistacheWeb3function) {
  const [code, setCode] = useState<string>();

  useEffect(() => {
    if (props.sourcecode) {
      setCode(props.sourcecode);
      props?.setW3fSourcecode(props.sourcecode);
    }
  }, []);

  return (
    <Editor
      name={props?.name}
      value={`${code}`}
      onValueChange={(scode) => setCode(scode)}
      highlight={(hcode) =>
        highlight(hcode, Prism.languages.javascript, 'javascript')
      }
      padding={9}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
}

export { CodeEditor };

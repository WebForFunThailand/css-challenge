import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/ext-language_tools';

interface EditorProps {
  mode: 'html' | 'css';
  name: string;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: (value: string, event?: any) => void;
}

const Editor = ({
  mode,
  name,
  onChange,
  readOnly,
  defaultValue,
}: EditorProps) => (
  <AceEditor
    {...{ mode, name, onChange, readOnly, defaultValue }}
    theme="tomorrow"
    fontSize={14}
    showPrintMargin
    showGutter
    highlightActiveLine
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showLineNumbers: true,
    }}
    style={{
      width: `100%`,
      display: `block`,
      minWidth: `25vw`,
      height: `25vw`,
      border: `1px #777 solid`,
    }}
  />
);

export default Editor;

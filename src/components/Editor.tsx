import React, { FunctionComponent } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';

interface EditorProps {
  mode: 'html' | 'css';
  name: string;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: (value: string, event?: any) => void;
  width: string;
  theme: string;
}

const Editor: FunctionComponent<EditorProps> = ({
  mode,
  name,
  onChange,
  readOnly,
  defaultValue,
  width,
  theme,
}) => (
  <AceEditor
    {...{ mode, name, onChange, readOnly, defaultValue }}
    theme={theme}
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
      width,
      display: `block`,
      height: `400px`,
    }}
  />
);

export default Editor;

import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { scope } from './scope'
import Demo from './demo'
import CopyClipboard from './copy-clipboard'
import copy from 'copy-to-clipboard'
// import { useEditable } from 'use-editable'

export const LiveCode = (props) => {
  const [copied, setCopied] = React.useState(false)
  React.useEffect(() => {
    if (copied) copy(props.children.props.children.trim())
    const timeoutId = setTimeout(() => {
      setCopied(false)
    }, 2000)
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [copied, props.children.props.children])

  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={scope}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      transformCode={code => '/* @jsx mdx */' + code}
      disabled={props.disabled}
    >
      {!props.disabled && (
        <Demo>
          <LivePreview />
        </Demo>
      )}
      <div className='relative p-4 pt-6 rounded-xl bg-[#2a2734]'>
        <CopyClipboard text={copied ? 'Copied' : 'Copy'} onCopied={() => setCopied(true)} />
        <div className='ml-3 flex text-xs uppercase text-gray-400 font-medium font-roboto'>
          Editable Example
        </div>
        <LiveEditor className='w-full mt-3' />
      </div>
      {!props.disabled && (<LiveError className='mt-6 block p-3 whitespace-pre-wrap text-sm bg-red-700 rounded-lg text-white' />)}
    </LiveProvider>
  )
}

/* const editorRef = React.useRef(null);
  const [code, setCode] = React.useState(props.children.props.children.trim());
  const onEditableChange = React.useCallback((code) => {
    setCode(code.slice(0, -1));
  }, []);

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2
  }); */

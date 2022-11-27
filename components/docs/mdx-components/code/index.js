import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { scope } from './scope'
import Demo from './demo'
import CopyClipboard from './copy-clipboard'
import copy from 'copy-to-clipboard'
// import { useEditable } from 'use-editable'

const LiveCode = (props) => {
  /* const editorRef = React.useRef(null);
  const [code, setCode] = React.useState(props.children.props.children.trim());
  const onEditableChange = React.useCallback((code) => {
    setCode(code.slice(0, -1));
  }, []);

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2
  }); */

  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) copy(props.children.props.children.trim())

    const timeoutId = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [copied])

  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={scope}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
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

const SyntaxHighlighter = props => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const components = {
  pre: props => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    if (props) {
      return (
        <div className='live-code-content'>
          <LiveCode {...props} disabled={matches.groups.lang === 'js' && true} />
        </div>
      )
    } else {
      return (
        <div className='offline-code-content'>
          <SyntaxHighlighter {...props} />
        </div>
      )
    }
  }
}

import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import copy from 'copy-to-clipboard'
import Demo from './demo'
import CopyClipboard from './copy-clipboard'
import { scope } from './scope'

const ReactCodeLive = ({ code, noInline, language, disabled, bg, ...rest }) => {
  const [copied, setCopied] = React.useState(false)
  const [editorCode, setEditorCode] = React.useState(code)
  React.useEffect(() => {
    if (copied && editorCode) copy(editorCode)

    const timeoutId = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [copied, editorCode, setEditorCode])

  const handleOnChange = (newCode) => setEditorCode(newCode)

  return (
    <div style={{ marginTop: '40px' }}>
      <LiveProvider
        code={editorCode}
        scope={scope}
        noInline={noInline}
        disabled={disabled}
        {...rest}
      >
        {!disabled && (
          <Demo>
            <LivePreview />
          </Demo>
        )}
        <div className='relative p-4 pt-6 rounded-xl bg-[#2a2734]'>
          <CopyClipboard text={copied ? 'Copied' : 'Copy'} onCopied={() => setCopied(true)} />
          <div className='ml-3 flex text-xs uppercase text-gray-400 font-medium font-roboto'>
            Editable Example
          </div>
          <LiveEditor onChange={handleOnChange} className='w-full mt-3' />
        </div>
        {!disabled && (<LiveError className='mt-6 block p-3 whitespace-pre-wrap text-sm bg-red-700 rounded-lg text-white' />)}
      </LiveProvider>
    </div>
  )
}

export default ReactCodeLive

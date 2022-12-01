import React from 'react'
import { LiveProvider, LivePreview, LiveEditor } from 'react-live'
import Demo from './demo'
import copy from 'copy-to-clipboard'
import CopyClipboard from './copy-clipboard'
import classNames from 'classnames'
import scope from 'components/docs/components/mdx/scope'

const SyntaxHighlighter = props => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''
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

  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={scope}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      disabled={language === 'js'}
    >
      {language === 'jsx' && (
        <Demo>
          <LivePreview className='live-preview' />
        </Demo>
      )}
      <div className='relative p-4 pt-6 rounded-xl bg-[#2a2734]'>
        <CopyClipboard text={copied ? 'Copied' : 'Copy'} onCopied={() => setCopied(true)} />
        <div className='ml-3 flex text-xs uppercase text-gray-400 font-medium font-roboto'>
          Example code
        </div>
        <LiveEditor className={classNames('!text-sm md:!text-base', className && className)} />
      </div>
      {/* <LiveError /> */}
    </LiveProvider>

  )
}

export default SyntaxHighlighter

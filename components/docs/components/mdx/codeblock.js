import React from 'react'
import { LiveProvider, LivePreview } from 'react-live'
import Highlight, { defaultProps } from 'prism-react-renderer'
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

    >
      <Demo>
        <LivePreview className='live-preview' />
      </Demo>
      {/* <LiveEditor className='live-editor' /> */}
      <div className='relative p-4 pt-6 rounded-xl bg-[#2a2734]'>
        <CopyClipboard text={copied ? 'Copied' : 'Copy'} onCopied={() => setCopied(true)} />
        <div className='ml-3 flex text-xs uppercase text-gray-400 font-medium font-roboto'>
          Example code
        </div>
        <Highlight
          {...defaultProps} code={props.children.props.children.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={classNames('!text-sm md:!text-base', className && className)} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i} className='table-row'>
                  {/* <span className='table-cell text-right pr-4'>{i + 1}</span> */}
                  <div className='table-cell'>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      {/* <LiveError /> */}
    </LiveProvider>

  )
}

export default SyntaxHighlighter

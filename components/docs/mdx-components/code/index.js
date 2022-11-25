import React from 'react'
import { defaultProps } from 'prism-react-renderer'
import ReactCodeLive from './react-live-code'

export const components = {
  pre: (props) => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <>
        <ReactCodeLive
          {...defaultProps}
          disabled={matches.groups.lang === 'js' && true}
          code={props.children.props.children.trim()}
          language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
        />
      </>
    )
  },
  wrapper: ({ children }) => <>{children}</>
}

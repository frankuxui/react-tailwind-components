import { LiveCode } from './live-code'
import { SyntaxHighlighter } from './highlight'

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

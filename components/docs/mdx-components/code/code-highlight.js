import Highlight, { Prism } from 'prism-react-renderer'
import React from 'react'
import { Line, Pre } from './styles'

const CodeHighlight = ({ theme, code, language, prism }) => {
  return (
    <Highlight
      Prism={prism || Prism}
      code={code}
      theme={theme}
      language={language}

    >
      {({ className: _className, tokens, getLineProps, getTokenProps, style: _style }) => (
        <Pre className={_className} spellCheck='false'>
          {tokens.map((line, lineIndex) => (
            // eslint-disable-next-line react/jsx-key
            <Line {...getLineProps({ line, key: `line-${lineIndex}` })}>
              {line
                .filter((token) => !token.empty)
                .map((token, tokenIndex) => (
                  <span
                    key={token}
                    {...getTokenProps({ token, key: `token-${tokenIndex}` })}
                  />
                ))}
              {'\n'}
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default CodeHighlight

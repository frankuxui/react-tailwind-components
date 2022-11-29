import SyntaxHighlighter from 'components/docs/components/mdx/codeblock'

export const components = {
  pre: props => {
    return (
      <div className='code-content'>
        <SyntaxHighlighter {...props} />
      </div>
    )
  }
}

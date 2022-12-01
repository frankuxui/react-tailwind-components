import React from 'react'
import classNames from 'classnames'

const Demo = ({ children }) => {
  const classListed = 'relative mb-4 mt-8 rounded-xl border border-slate-200 pt-20 pl-6 pr-6 pb-6 after:absolute after:top-7 after:left-6 after:text-sm after:uppercase after:text-slate-300 after:content-["Example"]'

  const demoRef = React.useRef(null)
  const [theme, setTheme] = React.useState('light')

  const handleTheme = (e) => {
    if (e.target) {
      if (theme === 'light') {
        setTheme('dark')
        demoRef.current.classList.add('dark')
        demoRef.current.classList.remove('light')
      } else {
        setTheme('light')
        demoRef.current.classList.add('light')
        demoRef.current.classList.remove('dark')
      }
      // theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  }
  return (
    <div
      className={classNames(
        classListed,
        theme,
        theme === 'light' ? 'bg-white' : 'bg-slate-800'
      )}
      ref={demoRef}
    >
      <button
        className={classNames(
          'absolute right-4 top-4 h-9 w-9 rounded-full transition-colors',
          theme === 'light' ? 'bg-slate-100' : 'bg-slate-700'
        )}
        onClick={(e) => handleTheme(e)}
      >
        {theme === 'light' ? '🌞' : '🌙'}
      </button>

      {/* <IFrame styleSelector='link[data-frame]'>
        </IFrame> */}
      {children}
    </div>
  )
}

export default Demo

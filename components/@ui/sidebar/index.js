import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import SidebarHeader from 'components/@ui/sidebar/sidebar-header'
import SidebarBody from 'components/@ui/sidebar/sidebar-body'
import SidebarFooter from 'components/@ui/sidebar/sidebar-footer'
import { useTheme } from 'components/@ui/hooks/useTheme'

function SidebarRef ({
  children,
  className,
  defaultOpened = false,
  buttonClose = true,
  closeSize = '24',
  staticBackdrop = false,
  blur = false,
  ...rest
}, ref) {
  const theme = useTheme().theme.sidebar
  const [isOpen, setIsOpen] = React.useState(defaultOpened)
  const [isBrowser, setIsBrowser] = React.useState(false)

  // Body overflow hidden

  React.useEffect(() => {
    if (isBrowser) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
  }, [isOpen, isBrowser])

  // Close callback

  const close = React.useCallback(() => setIsOpen(false), [])
  React.useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  // static backdrop callback

  const handleStaticSidebar = () => {
    document.querySelector('.sidebar-content').style.transform = 'scale(1.01)'
    setTimeout(() => {
      document.querySelector('.sidebar-content').style.transform = 'scale(1)'
    }
    , 90)
  }

  // key scape config

  const handleEscape = React.useCallback(
    (event) => {
      if (staticBackdrop) {
        if (event.keyCode === 27) handleStaticSidebar()
      } else {
        if (event.keyCode === 27) close()
      }
    }, [close, staticBackdrop]
  )
  React.useEffect(() => {
    setIsBrowser(true)
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  const SidebarComponent = (
    isOpen && (
      <div className={classNames(theme.base, className && className)} {...rest}>
        <div className={classNames(theme.backdrop, blur && theme.blur[blur ? 'on' : 'off'])} onClick={staticBackdrop === true ? handleStaticSidebar : close} />
        <div className={classNames('sidebar-content', theme.content)}>
          {buttonClose && (
            <button
              className={classNames(
                theme.close
              )}
              onClick={close}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={closeSize}
                height={closeSize}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          )}
          {children}
        </div>
      </div>
    )
  )

  if (isBrowser) {
    return ReactDOM.createPortal(SidebarComponent, document.getElementById('portal'))
  } else {
    return null
  }
}

const Sidebar = React.forwardRef(SidebarRef)
export default Sidebar

//
// Partials

Sidebar.Header = SidebarHeader
Sidebar.Body = SidebarBody
Sidebar.Footer = SidebarFooter

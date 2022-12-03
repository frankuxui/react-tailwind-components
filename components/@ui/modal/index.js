import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import ModalFooter from 'components/@ui/modal/modal-footer'
import ModalBody from 'components/@ui/modal/modal-body'
import ModalTitle from 'components/@ui/modal/modal-title'
import ModalHeader from 'components/@ui/modal/modal-header'
import { useTheme } from 'components/@ui/hooks/useTheme'

function ModalRef ({
  children,
  animation = false,
  defaultOpened = false,
  size = 'md',
  buttonClose = true,
  staticBackdrop = false,
  border = false,
  rounded = 'md',
  blur = false,
  scrollable = false,
  closeSize = 24,
  ...rest
}, ref) {
  const theme = useTheme().theme.modal
  const [isOpen, setIsOpen] = React.useState(defaultOpened)
  const [isBrowser, setIsBrowser] = React.useState(false)
  const contentRef = React.useRef(null)
  // Body overflow hidden

  React.useEffect(() => {
    if (isBrowser) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
  }, [isOpen, isBrowser])

  // Close callback

  const close = React.useCallback((event) => setIsOpen(false), [])
  React.useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close
    }),
    [close]
  )
  // static backdrop callback

  const handleStaticModal = React.useCallback(() => {
    contentRef.current.style.transform = 'scale(1.01)'
    setTimeout(() => {
      contentRef.current.style.transform = 'scale(1)'
    }, 90)
  }, [])

  // New close function
  const handleClose = React.useCallback((e) => {
    if (staticBackdrop) {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        handleStaticModal()
      }
    } else if (contentRef.current && !contentRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }, [staticBackdrop, handleStaticModal])

  // key scape config

  const handleEscape = React.useCallback(
    (event) => {
      if (event.keyCode === 27) handleClose(event)
    },
    [handleClose]
  )

  React.useEffect(() => {
    setIsBrowser(true)
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false)
      document.addEventListener('click', handleClose, true)
    } else {
      return () => {
        document.removeEventListener('keydown', handleEscape, false)
        document.removeEventListener('click', handleClose, true)
      }
    }
  }, [handleEscape, isOpen, handleClose])

  const modalComponent = (
    isOpen && (
      <>
        <div className={classNames('modal', theme.base, blur && theme.blur[blur ? 'on' : 'off'])} {...rest}>
          {/* <div className={classNames(theme.backdrop)} /> */}
          <div
            ref={contentRef}
            onClick={handleClose}
            className={classNames(
              'modal-content',
              theme.content,
              theme.size[size],
              theme.border[border ? 'on' : 'off'],
              theme.rounded[rounded],
              theme.scrollable[scrollable ? 'on' : 'off'],
              // animation && isOpen ? theme.animation.on : theme.animation.off
              animation && theme.fade[animation ? isOpen ? 'on' : 'off' : 'off']
            )}
          >
            {buttonClose && (
              <button className={classNames(theme.close)} onClick={close}>
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
      </>
    )
  )

  if (isBrowser) {
    return ReactDOM.createPortal(modalComponent, document.getElementById('portal'))
  } else {
    return null
  }
}

const Modal = React.forwardRef(ModalRef)
export default Modal

// Partials

Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Body = ModalBody
Modal.Footer = ModalFooter

// StyledModalContent.propTypes = {
//   size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
//   buttonClose: PropTypes.bool,
//   fade: PropTypes.bool,
//   defaultOpened: PropTypes.bool,
//   staticBackdrop: PropTypes.bool,
//   blur: PropTypes.bool
// }

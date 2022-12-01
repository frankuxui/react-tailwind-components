import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function ModalFooter ({ className, children, ...rest }) {
  const theme = useTheme().theme.modal
  return (
    <footer
      className={classNames(
        theme.footer,
        className && className
      )}
      {...rest}
    >
      {children}
    </footer>
  )
}

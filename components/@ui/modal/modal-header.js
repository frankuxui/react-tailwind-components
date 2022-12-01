import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function ModalHeader ({ className, children, ...rest }) {
  const theme = useTheme().theme.modal
  return (
    <header
      className={classNames(
        theme.header,
        className && className
      )}
      {...rest}
    >
      {children}
    </header>
  )
}

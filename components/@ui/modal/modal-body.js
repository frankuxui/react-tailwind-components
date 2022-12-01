import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function ModalBody ({ className, children, ...rest }) {
  const theme = useTheme().theme.modal
  return (
    <section
      className={classNames(
        theme.body,
        className && className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}

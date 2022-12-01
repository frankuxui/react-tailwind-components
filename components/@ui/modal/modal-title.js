import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function ModalTitle ({ className, children, ...rest }) {
  const theme = useTheme().theme.modal
  return (
    <h5
      className={classNames(
        theme.title
      )}
      {...rest}
    >
      {children}
    </h5>
  )
}

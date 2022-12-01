import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function SidebarBody ({ className, children, ...rest }) {
  const theme = useTheme().theme.sidebar
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

import classNames from 'classnames'
import { useAccordionContext } from './accordion-context'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function AccordionContent ({ children, className, ...props }) {
  const { isOpen } = useAccordionContext()
  const theme = useTheme().theme.accordion.content
  return (
    <div
      className={classNames(theme.base, className)}
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  )
}

import React, { cloneElement, useMemo } from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import AccordionContent from './accordion-content'
import AccordionPanel from './accordion-panel'
import AccordionTitle from './accrodion-title'

const AccordionComponent = ({
  alwaysOpen = false,
  children,
  border = true,
  className,
  ...rest
}) => {
  const theme = useTheme().theme.accordion

  const [isOpen, setOpen] = React.useState(0)
  const panels = useMemo(
    () =>
      React.Children.map(children, (child, i) =>
        cloneElement(child, { alwaysOpen, border, isOpen: isOpen === i, setOpen: () => setOpen(i) })
      ),
    [alwaysOpen, children, border, isOpen]
  )

  return (
    <div
      className={classNames(
        theme.base,
        theme.border[border ? 'on' : 'off'],
        className && className
      )}
      {...rest}
    >
      {panels}
    </div>
  )
}

AccordionComponent.displayName = 'Accordion'
AccordionPanel.displayName = 'Accordion.Panel'
AccordionTitle.displayName = 'Accordion.Title'
AccordionContent.displayName = 'Accordion.Content'

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
})

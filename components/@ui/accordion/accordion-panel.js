import classNames from 'classnames'
import { useState } from 'react'
import { AccordionPanelContext } from './accordion-context'

export default function AccordionPanel ({ children, className, defaultOpen, ...props }) {
  const { alwaysOpen } = props
  const [isOpen, setOpen] = useState(props.isOpen)

  const provider = alwaysOpen
    ? { ...props, isOpen, setOpen: () => setOpen(!isOpen) }
    : props

  return (
    <AccordionPanelContext.Provider value={provider}>
      <div className={classNames('panel', className)}>
        {children}
      </div>
    </AccordionPanelContext.Provider>
  )
}

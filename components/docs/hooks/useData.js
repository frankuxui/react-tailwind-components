import { useState } from 'react'

export const useData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return {
    sidebarOpen,
    setSidebarOpen
  }
}

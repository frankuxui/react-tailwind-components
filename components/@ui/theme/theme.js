/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

import { spacing } from '../utils/spacing'

// Accordion

const accordion = {
  base: 'overflow-hidden rounded-lg divide-y divide-secondary-light border-secondary-light bg-white',
  content: {
    base: 'py-4 px-4 last:rounded-b-lg first:rounded-t-lg'
  },
  border: {
    off: '',
    on: 'border'
  },
  title: {
    arrow: {
      base: 'h-6 w-6 shrink-0',
      open: {
        off: '',
        on: 'rotate-180'
      }
    },
    base: 'flex w-full items-center justify-between last:rounded-b-lg py-4 px-4 text-left font-medium transition-colors text-gray-500 hover:bg-gray-50',
    border: {
      off: '',
      on: ''
    },
    heading: '',
    open: {
      on: '',
      off: ''
    }
  }
}

// Alert

const alert = {
  base: 'flex items-start flex-col relative p-4 rounded-md',
  color: {
    primary: 'bg-primary-light',
    secondary: 'bg-secondary-light'
  }
}

// Avatar

const avatar = {
  base: 'inline-flex justify-center items-center space-x-4',
  img: {
    off: 'rounded relative overflow-hidden',
    on: 'rounded',
    placeholder: 'absolute w-auto h-auto -bottom-[5px]'
  },
  rounded: '!rounded-full',
  size: {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-24 h-24 text-4xl',
    '2xl': 'w-28 h-28 text-5xl'
  },
  stacked: 'ring-2 ring-gray-300',
  status: {
    away: 'bg-yellow-400',
    base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400'
  },
  statusPosition: {
    'bottom-left': '-bottom-1 -left-1',
    'bottom-center': '-botton-1 center',
    'bottom-right': '-bottom-1 -right-1',
    'top-left': '-top-1 -left-1',
    'top-center': '-top-1 center',
    'top-right': '-top-1 -right-1',
    'center-right': 'center -right-1',
    center: 'center center',
    'center-left': 'center -left-1'
  },
  initials: {
    text: 'font-medium',
    base: 'inline-flex overflow-hidden relative justify-center items-center',
    color: {
      primary: 'bg-primary text-white',
      'primary-light': 'bg-primary-light text-primary',
      secondary: 'bg-secondary text-white',
      'secondary-light': 'bg-secondary-light text-secondary'
    }
  }
}

// Badge

const badge = {
  base: 'group inline-flex items-center justify-center text-center flex-none rounded-full',
  color: {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  },
  size: {
    xs: 'h-6 text-xs px-2',
    sm: 'h-7 text-xs px-3',
    md: 'h-8 text-sm px-4',
    lg: 'h-9 text-base px-6'
  }
}

// Button

const button = {
  base: 'flex flex-none items-center justify-center flex-row font-normal rounded-md no-underline transition-colors',
  content: 'flex flex-none items-center justify-center flex-row space-x-2 no-underline',
  color: {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:bg-secondary-dark'
  },
  disabled: 'opacity-40 pointer-events-none',
  fullWidth: {
    on: 'w-full',
    off: ''
  },
  size: {
    sm: 'h-8 text-sm px-4',
    md: 'h-10 text-base px-6',
    lg: 'h-12 text-lg px-10',
    xl: 'h-14 text-xl px-12'
  }
}

// Button group

const buttonGroup = {
  base: 'inline-flex',
  position: {
    start: 'rounded-r-none',
    middle: '!rounded-none',
    end: 'rounded-l-none'
  }
}

// Card

const card = {
  base: 'flex flex-none flex-col relative break-inside-avoid min-w-0',
  content: {
    base: 'relative overflow-hidden rounded-2xl no-underline bg-white',
    border: {
      on: 'border border-gray-base divide-y divide-gray-base',
      off: ''
    }
  },
  header: {
    base: 'flex flex-none p-4'
  },
  body: {
    base: 'flex-auto p-4',
    border: 'border-t border-gray-base'
  },
  footer: {
    base: 'p-4',
    border: 'border-t border-gray-base'
  }
}

// Close

const close = {
  base: 'flex flex-none items-center justify-center cursor-pointer rounded-full p-2 hover:bg-slate-900/10 transition-colors'
}

// Flex

const flex = {
  base: 'flex w-full'
}

// Modal

const modal = {
  base: 'fixed flex items-start justify-center w-full h-full overflow-x-hidden overflow-y-auto outline-0 top-0 right-0 z-[70] bg-black/50',
  backdrop: 'w-full h-full absolute inset-0',
  content: 'relative flex flex-col w-full bg-white',
  fade: {
    on: 'animate-modal',
    off: ''
  },
  border: {
    on: 'divide-y divide-secondary-light',
    off: ''
  },
  blur: {
    on: 'backdrop-blur-sm',
    off: ''
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  },
  scrollable: {
    on: 'max-h-full overflow-hidden h-[calc(100%_-_(4rem)_*_2)]',
    off: 'overflow-hidden'
  },
  size: {
    xs: 'sm:max-w-[18rem] my-16 mx-4',
    sm: 'sm:max-w-[25rem] my-16 mx-4',
    md: 'sm:max-w-[34rem] my-16 mx-4',
    lg: 'sm:max-w-[50rem] my-16 mx-4',
    xl: 'sm:max-w-[70rem] my-16 mx-4',
    '2xl': 'sm:max-w-[80rem] my-16 mx-4',
    full: 'w-full rounded-none m-0 h-full sm:max-w-full sm:w-full'
  },
  close: 'absolute flex items-center justify-center flex-none top-5 right-5 z-[1] p-1.5 rounded-full transition-colors hover:bg-black/10',
  title: 'text-xl font-medium',
  header: 'flex-shrink-0 relative flex items-start justify-between flex-col pt-5 pl-5 pb-5 pr-20',
  body: 'flex-auto p-5 overflow-auto scrollbar',
  footer: 'flex-shrink-0 flex items-center justify-end flex-wrap p-5 space-x-2'
}

// Progress

const progress = {
  base: 'flex w-full overflow-hidden bg-gray-100',
  label: 'mb-1 flex justify-between font-medium',
  bar: 'flex items-center justify-center text-center text-xs font-medium leading-none text-blue-100',
  striped: {
    on: 'bg-striped bg-striped-size',
    off: ''
  },
  animated: {
    on: 'animate-striped',
    off: ''
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  },
  color: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    red: 'bg-red-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-400',
    indigo: 'bg-indigo-600',
    purple: 'bg-purple-600',
    cyan: 'bg-cyan-500',
    rose: 'bg-rose-500',
    sky: 'bg-sky-400',
    teal: 'bg-teal-400'
  },
  size: {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-5',
    '2xl': 'h-6'
  }
}

// Tag

const tag = {
  base: 'inline-flex flex-none items-center justify-center h-8 px-4 rounded-md',
  color: {
    primary: 'bg-primary text-white',
    'primary-light': 'bg-primary-light text-black',
    secondary: 'bg-secondary text-white',
    'secondary-light': 'bg-secondary-light text-black'
  }
}

// Sidebar

const sidebar = {
  base: 'fixed z-50 inset-0 overflow-hidden',
  backdrop: 'fixed inset-0 bg-black/20',
  blur: {
    on: 'backdrop-blur-sm',
    off: ''
  },
  content: 'relative flex flex-col bg-white w-80 max-h-screen min-h-screen max-w-[calc(100%_-_3rem)]',
  close: 'absolute flex items-center justify-center flex-none top-5 right-5 z-[1] p-1.5 rounded-full transition-colors hover:bg-slate-100',
  header: 'flex-[0_1_0%] pt-6 pl-6 pb-6 pr-20',
  body: 'flex-1 overflow-auto px-6 scrollbar',
  footer: 'flex-[0_0_5rem] p-6'
}

// Spinner

const spinner = {
  base: 'inline animate-spin',
  color: {
    primary: 'fill-primary',
    secondary: 'fill-secondary'
  },
  light: {
    off: {
      base: 'text-[rgb(0_0_0_/_30%)]',
      color: {
        primary: '',
        secondary: ''
      }
    },
    on: {
      base: 'text-[rgb(255_255_255_/_25%)]',
      color: {
        primary: 'fill-white',
        secondary: 'fill-secondary'
      }
    }
  },
  size: {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12'
  }
}

// Text

const text = {
  base: '',
  variant: {
    headline1: 'text-5xl font-bold',
    headline2: 'text-4xl font-bold',
    headline3: 'text-3xl font-medium',
    headline4: 'text-2xl font-bold',
    headline5: 'text-xl font-bold',
    headline6: 'text-lg font-normal',
    body1: 'text-base',
    body2: 'text-sm',
    body3: 'text-xs'
  },
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  }
}

export default {
  accordion,
  alert,
  avatar,
  badge,
  button,
  buttonGroup,
  card,
  close,
  flex,
  modal,
  progress,
  tag,
  sidebar,
  spinner,
  text
}

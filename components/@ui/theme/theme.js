/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

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
  base: 'inline-flex items-center justify-center text-center flex-none rounded-full',
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
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark'
  },
  disabled: 'opacity-40 pointer-events-none',
  size: {
    sm: 'h-8 text-sm px-4',
    md: 'h-10 text-base px-6',
    lg: 'h-12 text-lg px-10',
    xl: 'h-14 text-xl px-12'
  }
}

// Card

const card = {
  base: 'flex flex-none flex-col relative break-inside-avoid min-w-0',
  content: {
    base: 'relative overflow-hidden rounded-2xl no-underline bg-white',
    border: 'border border-gray-base'
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

// Progress

const progress = {
  base: 'relative'
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
  alert,
  avatar,
  badge,
  button,
  card,
  close,
  tag,
  progress,
  spinner,
  text
}

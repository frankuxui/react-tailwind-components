/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

// Alert

const alert = {
  base: 'flex items-start flex-col relative p-4 rounded-md',
  color: {
    base: 'bg-gray-base text-black',
    primary: 'bg-violet-200',
    secondary: 'bg-gray-300'
  }
}

// Badge

const badge = {
  base: 'inline-flex items-center justify-center text-center flex-none rounded-full text-sm',
  color: {
    base: 'bg-gray-base text-black',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  },
  size: {
    base: 'px-4 h-8',
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
    base: 'bg-gray-base text-black hover:bg-slate-300',
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark'
  },
  disabled: 'opacity-40 pointer-events-none',
  size: {
    base: 'h-10 px-6',
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
  badge,
  button,
  card,
  close,
  text
}

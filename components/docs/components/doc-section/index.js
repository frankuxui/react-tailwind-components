import React from 'react'
import CardHome from '../card-home'
import { IconComponent, IconTheme, IconView } from '../icons'

const DocsSections = () => {
  return (
    <div className='sm:columns-2 max-w-[50rem] mt-10'>
      <CardHome
        link='/vistas'
        title='Vistas'
        icon={<IconView />}
        description='Listado de vistas implementadas.'
      />
      <CardHome
        link='/docs/components'
        title='Componentes'
        icon={<IconComponent />}
        description='Sección para el desarrollo de componentes implementados en la web.'
      />
      <CardHome
        link='/docs/theme'
        title='Theme'
        icon={<IconTheme />}
        description='Uso correto del tema e implementacion de colores y tipografías.'
      />
    </div>
  )
}

export default DocsSections

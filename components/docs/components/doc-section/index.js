import React from 'react'
import CardHome from '../card-home'
import { IconComponent, IconContext, IconDeploy, IconFolder, IconPackage, IconTheme, IconView } from '../icons'

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
      <CardHome
        link='/'
        title='Deploy'
        icon={<IconDeploy />}
        description='Proceso de Distribución y compilación del proyecto para llevarlo a producción.'
      />
      <CardHome
        link='/'
        title='Context'
        icon={<IconContext />}
        description='Uso correto e implementacion de contextos.'
      />
      <CardHome
        link='/'
        title='Estructura del proyecto'
        icon={<IconFolder />}
        description='Uso correto de la estructura de directorios y archivos.'
      />
      <CardHome
        link='/'
        title='NPM'
        icon={<IconPackage />}
        description='Uso correto de la estructura de directorios y archivos.'
      />
    </div>
  )
}

export default DocsSections

import Footer from 'components/docs/views/footer'
import Hero from 'components/docs/views/hero'
import DefaultLayout from 'components/docs/layout/layout-default'

export default function Home () {
  return (
    <>
      <DefaultLayout htmlTitle='React tailwind components' htmlDescription='Guía de vistas, componentes y pautas a seguir para el uso de buenas prácticas en el desarrollo.' />
      <div className='docs-container'>
        <main className='docs-main'>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}

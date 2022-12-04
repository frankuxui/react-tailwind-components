import Footer from 'components/docs/views/footer'
import Hero from 'components/docs/views/hero'
import DefaultLayout from 'components/docs/layout/layout-default'

export default function Home () {
  return (
    <>
      <DefaultLayout title='React tailwind components' description='Guía de vistas, componentes y pautas a seguir para el uso de buenas prácticas en el desarrollo.' />
      <div className='flex flex-col justify-between min-h-screen'>
        <main className='pt-16 px-8 flex flex-col justify-center items-center'>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}

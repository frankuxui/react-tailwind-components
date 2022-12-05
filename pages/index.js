import Footer from 'components/docs/views/footer'
import Hero from 'components/docs/views/hero'
import Seo from 'components/docs/components/seo'
import { lodash } from 'components/docs/utils/lodash'

export default function Home () {
  return (
    <>
      <Seo
        title={lodash('homepage.seo.title')}
        description={lodash('homepage.seo.description')}
      />
      <div className='flex flex-col justify-between min-h-screen'>
        <main className='pt-16 px-8 flex flex-col justify-center items-center'>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}

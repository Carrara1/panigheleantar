import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problemas from '@/components/Problemas'
import Servicos from '@/components/Servicos'
import QuemSomos from '@/components/QuemSomos'
import Resultados from '@/components/Resultados'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problemas />
        <Servicos />
        <QuemSomos />
        <Resultados />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

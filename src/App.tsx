import { Layout } from './layout/Layout/Layout'
import { Faq } from './sections/Faq/Faq'
import { FreePack } from './sections/FreePack/FreePack'
import { Hero } from './sections/Hero/Hero'
import { HowItWorks } from './sections/HowItWorks/HowItWorks'
import { RequestTopic } from './sections/RequestTopic/RequestTopic'
import { Topics } from './sections/Topics/Topics'
import { WhatsInside } from './sections/WhatsInside/WhatsInside'

export default function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Topics />
      <WhatsInside />
      <FreePack />
      <RequestTopic />
      <Faq />
    </Layout>
  )
}

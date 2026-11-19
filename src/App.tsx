import { Layout } from './layout/Layout/Layout'
import { Hero } from './sections/Hero/Hero'
import { HowItWorks } from './sections/HowItWorks/HowItWorks'

export default function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
    </Layout>
  )
}

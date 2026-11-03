
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import FeatureStrip from './components/layout/FeatureStrip'
import HowItWorks from './components/layout/HowItWorks'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="min-h-screen">
         <Hero />
         <FeatureStrip />
         <HowItWorks />
        </section>

        <section id="shopper" className="min-h-screen">
          {/* Shopper section will be added here */}
        </section>

        <section id="merchant" className="min-h-screen">
          {/* Merchant section will be added here */}
        </section>

        <section id="about" className="min-h-screen">
          {/* About section will be added here */}
        </section>

        <section id="faq" className="min-h-screen">
          {/* FAQ section will be added here */}
        </section>

        <section id="signin">
          {/* Sign-in section will be added here */}
        </section>

        <section id="get-started">
          {/* Get-started section will be added here */}
        </section>
      </main>
    </>
  )
}

export default App

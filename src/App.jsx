import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-gray-900">Flames Media – Meta Ads Agentur Kassel</p>
            <p className="text-sm text-gray-600 mt-2">Performance-getriebene Kampagnen für DACH. Fokus auf klare KPIs und messbare Ergebnisse.</p>
          </div>
          <div className="sm:text-right text-sm text-gray-600">
            <p>Kurt-Schumacher-Str. 1 • 34117 Kassel</p>
            <p className="mt-1">© {new Date().getFullYear()} Flames Media</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

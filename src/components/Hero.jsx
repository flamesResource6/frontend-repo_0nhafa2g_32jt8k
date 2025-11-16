import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            META ADS AGENTUR AUS KASSEL
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Planbare Kundengewinnung mit leistungsstarken Meta Ads
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Wir helfen ambitionierten Unternehmen in Deutschland, über Facebook & Instagram profitabel zu skalieren – mit datengetriebenen Creatives, präzisem Targeting und klarer Performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#termin" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white font-medium px-6 py-3 shadow hover:shadow-lg transition-all">Kostenlose Erstberatung</a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 font-medium px-6 py-3 ring-1 ring-gray-200 hover:bg-gray-50">Unsere Ergebnisse</a>
          </div>
        </div>
      </div>
    </section>
  )
}

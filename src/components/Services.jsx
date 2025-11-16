import { Target, LineChart, Video, FlaskRound as Flask } from 'lucide-react'

export default function Services(){
  const items = [
    {
      icon: Target,
      title: 'Strategie & Offer',
      text: 'Analyse, Positionierung und KPI-Plan – die Basis für profitables Wachstum.'
    },
    {
      icon: Video,
      title: 'Creative Produktion',
      text: 'UGC, Hooks, Test-Frameworks – systematisch performende Ads statt Zufall.'
    },
    {
      icon: Flask,
      title: 'Testing & Skalierung',
      text: 'Hypothesen, Split-Tests, Budgetsteuerung – klare Learnings, klare Ergebnisse.'
    },
    {
      icon: LineChart,
      title: 'Tracking & Reporting',
      text: 'Server-Side Tracking, GA4, Dashboards – volle Transparenz über alle Kanäle.'
    },
  ]

  return (
    <section id="leistungen" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Leistungen</h2>
          <p className="mt-3 text-gray-600">Ein ganzheitliches System aus Strategie, Creatives, Testing und Reporting.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon,title,text}) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-fuchsia-500/50 to-blue-600/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CTA(){
  return (
    <section id="termin" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-10 sm:p-14">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0,transparent_40%),radial-gradient(circle_at_80%_0%,#a78bfa_0,transparent_40%),radial-gradient(circle_at_50%_100%,#fb7185_0,transparent_40%)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Kostenlose Potentialanalyse sichern</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Erhalte innerhalb von 48h eine klare Einschätzung zu Angebot, Creatives und Skalierungschancen – unverbindlich und individuell.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input className="w-full rounded-md bg-white text-gray-900 px-4 py-3 placeholder:text-gray-400 focus:outline-none" placeholder="E-Mail-Adresse" />
              <button className="rounded-md bg-white text-gray-900 font-semibold px-6 py-3">Analyse anfordern</button>
            </form>
            <p className="mt-3 text-xs text-white/60">100% Datenschutz. Kein Spam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

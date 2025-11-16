export default function Logos(){
  const logos = ['Meta','Instagram','Shopify','HubSpot','Klaviyo','GA4']
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-xs uppercase tracking-wider mb-6">Zertifiziert & integriert</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-70">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-md bg-gray-50 border border-gray-100 grid place-items-center text-sm font-medium text-gray-500">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

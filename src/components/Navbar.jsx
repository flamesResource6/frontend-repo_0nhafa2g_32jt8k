import { useState } from 'react'
import { Menu, X, Rocket, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#cases', label: 'Cases' },
    { href: '#agentur', label: 'Agentur' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white shadow-md"><Rocket size={18} /></div>
            <span className="font-semibold tracking-tight text-gray-900">Flames Media</span>
            <span className="ml-2 rounded bg-blue-600/10 px-2 py-0.5 text-xs font-medium text-blue-700">Meta Ads</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#termin" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 shadow-sm hover:shadow transition-shadow">
              <Phone size={16} /> Kostenlose Beratung
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-gray-200 bg-white/70">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="#termin" className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 mt-2">
                <Phone size={16} /> Kostenlose Beratung
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

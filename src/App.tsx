import { useEffect, useRef, useState } from 'react'
import './App.css'

const fragrances = [
  {
    id: 1,
    name: 'Blue Talisman',
    brand: 'Ex Nihilo Paris',
    type: 'Eau de Parfum',
    image: '/images/colognes4.jpeg',
    description:
      'Crafted for those who command attention effortlessly. Fresh citrus and aquatic notes open into aromatic lavender and spicy accords, settling into a warm, long-lasting trail of amber, musk, and woody notes.',
    notes: {
      top: 'Citrus · Aquatic',
      heart: 'Lavender · Spicy Accords',
      base: 'Amber · Musk · Woody',
    },
  },
  {
    id: 2,
    name: 'Love Hibiscus',
    brand: 'Amouage',
    type: 'Eau de Parfum',
    image: '/images/colognes4 (1).jpeg',
    description:
      'The vivacious mystery of femininity. Tart hibiscus and passion fruit meet frankincense in perfect harmony, anchored by sandalwood, Indian papyrus, and vanilla for an indulgent, sensuous journey.',
    notes: {
      top: 'Hibiscus · Passion Fruit · Frankincense',
      heart: 'Sugar-coated Palmier',
      base: 'Sandalwood · Papyrus · Vanilla',
    },
  },
  {
    id: 3,
    name: 'Sequence',
    brand: 'Amouage',
    type: 'Essence Parfum · 30% Concentration',
    image: '/images/colognes5.jpeg',
    description:
      'Time moves in cycles. Lush lychee and raspberry open with the sweetness of life, deepened by saffron and rose, before descending into a profound base of leather, oud, and ambery woods.',
    notes: {
      top: 'Lychee · Raspberry · Saffron',
      heart: 'Rose · Osmanthus · Tonka Bean',
      base: 'Oud · Leather · Ambery Woods',
    },
  },
  {
    id: 4,
    name: 'Paradoxe Intense',
    brand: 'Prada',
    type: 'Eau de Parfum',
    image: '/images/colognes5 (1).jpeg',
    description:
      'Intense contrasts. The powerful lift of delicate jasmine meets the vibrant warmth of an amber accord, intensified by a subtle moss note — a saturation of olfactory sensation like no other.',
    notes: {
      top: 'Bergamot · Neroli · Pear',
      heart: 'Neroli · Jasmine · Moss Accord',
      base: 'Amber · Vanilla · White Musk',
    },
  },
  {
    id: 5,
    name: 'Paradoxe Radical Essence',
    brand: 'Prada',
    type: 'Parfum',
    image: '/images/colognes5 (2).jpeg',
    description:
      'Rethinking gourmand scents entirely. Neroli and orange flower open unexpectedly into a salted pistachio heart, grounded by sandalwood — addictive from first spray to dry down.',
    notes: {
      top: 'Neroli Oil · Orange Flower Absolute',
      heart: 'Salted Pistachio Accord',
      base: 'Sandalwood Accord',
    },
  },
  {
    id: 6,
    name: 'Guidance 46',
    brand: 'Amouage',
    type: 'Exceptional Extrait · 46% Concentration',
    image: '/images/colognes5 (3).jpeg',
    description:
      'Dosed at a staggering 46% oil concentration. A study in light and shade, fragility and strength — paradoxes brought together with an immediacy only the art of perfumery can achieve.',
    notes: {
      top: 'Pear · Frankincense · Pink Pepper · Bitter Almond',
      heart: 'Saffron · Rose · Sambac Jasmine · Osmanthus',
      base: 'Sandalwood · Ambergris · Vanilla · Oud',
    },
  },
  {
    id: 7,
    name: 'Cargo de Nuit',
    brand: 'Prada Olfactories',
    type: 'Eau de Parfum · 100ml',
    image: '/images/colognes5 (4).jpeg',
    description:
      'Inspired by the mystery of a night voyage in the ocean. Musk and aldehydes crash into woody mineral depths, leaving a smooth amber trail that haunts every room you walk into.',
    notes: {
      top: 'Musk · Aldehydes',
      heart: 'Woody · Mineral',
      base: 'Amber',
    },
  },
  {
    id: 8,
    name: 'Guidance',
    brand: 'Amouage',
    type: 'Eau de Parfum',
    image: '/images/colognes6 (1).jpeg',
    description:
      'An enthralling journey through paradoxes — fragility and strength, subtlety and boldness — brought together in a signature that commands presence without demanding it.',
    notes: {
      top: 'Pear · Frankincense · Pink Pepper',
      heart: 'Saffron · Rose · Jasmine',
      base: 'Sandalwood · Ambergris · Vanilla',
    },
  },
  {
    id: 9,
    name: 'Paradoxe Virtual Flower',
    brand: 'Prada',
    type: 'Eau de Parfum',
    image: '/images/colognes6 (2).jpeg',
    description:
      'A floral musky signature capturing the airy, luminous scent of jasmine. Avant-garde and fresh with a comforting second-skin sensation — light as air, impossible to ignore.',
    notes: {
      top: 'Vert de Bergamot',
      heart: 'Jasmine Accord',
      base: 'Musk · Ambrette',
    },
  },
  {
    id: 10,
    name: 'Paradigme',
    brand: 'Prada',
    type: 'Eau de Parfum · 100ml',
    image: '/images/colognes6 (3).jpeg',
    description:
      'Sophistication and avant-garde in an unexpected masculine ambery woody scent. Oscillating between enveloping warmth and exhilarating freshness — this is a new olfactive paradigm.',
    notes: {
      top: 'Calabrian Bergamot Heart',
      heart: 'Bourbon Geranium',
      base: 'Ambery Woods',
    },
  },
  {
    id: 11,
    name: 'Outlands',
    brand: 'Amouage',
    type: 'Essence Parfum · 30% Concentration',
    image: '/images/colognes6 (4).jpeg',
    description:
      'The edge of imagination. Uncharted mysteries. From bright citrus into rich patchouli terrain, to an amber accord reverberating with balsams and resins — an invitation into the beyond.',
    notes: {
      top: 'Cardamom · Bergamot · Lemon · Sichuan Pepper',
      heart: 'Patchouli · Rose · Saffron · Cumin',
      base: 'Benzoin · Amber · Frankincense · Oud · Musks',
    },
  },
]

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function FragranceCard({ f, index }: { f: (typeof fragrances)[0]; index: number }) {
  const { ref, inView } = useInView()
  const [flipped, setFlipped] = useState(false)
  const waMsg = encodeURIComponent(
    `Hi Titan Colognes! I'm interested in ${f.name} by ${f.brand}. How much is it? 🖤`
  )
  const waUrl = `https://wa.me/+256 751 682412?text=${waMsg}`

  return (
    <div
      ref={ref}
      id={`fragrance-${f.id}`}
      className={`card-wrapper${inView ? ' in-view' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div
        className={`card${flipped ? ' flipped' : ''}`}
        onClick={() => setFlipped((v) => !v)}
        role="button"
        aria-label={`${f.name} - tap to see details`}
      >
        {/* FRONT */}
        <div className="card-face card-front">
          <div className="card-img-wrap">
            <img src={f.image} alt={f.name} loading="lazy" />
            <div className="card-img-overlay" />
          </div>
          <div className="card-body">
            <span className="card-brand">{f.brand}</span>
            <h3 className="card-name">{f.name}</h3>
            <span className="card-type">{f.type}</span>
            <span className="card-hint">Tap to explore ↗</span>
          </div>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <div className="card-back-inner">
            <div>
              <span className="card-brand">{f.brand}</span>
              <h3 className="card-name">{f.name}</h3>
            </div>
            <p className="card-desc">{f.description}</p>
            <div className="notes-block">
              {(['top', 'heart', 'base'] as const).map((k) => (
                <div key={k} className="note-row">
                  <span className="note-label">{k}</span>
                  <span className="note-val">{f.notes[k]}</span>
                </div>
              ))}
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <WhatsAppIcon />
              Enquire to Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      heroRef.current?.style.setProperty('--scroll', `${window.scrollY * 0.35}px`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const filteredFragrances = fragrances.filter((f) => {
    const q = searchQuery.toLowerCase()
    return (
      f.name.toLowerCase().includes(q) ||
      f.brand.toLowerCase().includes(q) ||
      f.type.toLowerCase().includes(q)
    )
  })

  const scrollToFragrance = (id: number) => {
    setDrawerOpen(false)
    setTimeout(() => {
      document.getElementById(`fragrance-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 380)
  }

  return (
    <div className="app">
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={
                {
                  '--px': `${Math.random() * 100}%`,
                  '--py': `${Math.random() * 100}%`,
                  '--pd': `${Math.random() * 5 + 4}s`,
                  '--pdelay': `${Math.random() * 5}s`,
                  '--psize': `${Math.random() * 2.5 + 1}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className="hero-content">
          <div className="logo-3d-wrap">
            <img src="/images/colognes_logo.png" alt="Titan Colognes logo" className="hero-logo" />
          </div>
          <div className="hero-rule" />
          <h1 className="hero-title">TITAN COLOGNES</h1>
          <p className="hero-sub">Scent is power. Power is presence.</p>
          <p className="hero-tagline">
            Premium fragrances curated for men who leave a mark wherever they go.
          </p>
          <a href="#collection" className="hero-cta">
            Explore the Collection
          </a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* ── COLLECTION ── */}
      <section id="collection" className="collection">
        <div className="section-head">
          <span className="section-label">THE COLLECTION</span>
          <h2 className="section-title">Signature Fragrances</h2>
          <div className="section-rule" />
        </div>

        {/* ── STICKY SEARCH BAR ── */}
        <div className="search-bar-wrap">
          <div className="search-bar-inner">
            <span className="search-icon-wrap"><SearchIcon /></span>
            <input
              type="search"
              className="search-input"
              placeholder="Search by name, brand or type…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search fragrances"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="cards-grid">
          {filteredFragrances.length > 0 ? (
            filteredFragrances.map((f, i) => (
              <FragranceCard key={f.id} f={f} index={i} />
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-text">No fragrances found for "{searchQuery}"</span>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="section-head">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-rule" />
        </div>
        <div className="contact-grid">
          <a
            href="https://wa.me/+256 751 682412?text=Hi%20Titan%20Colognes!%20I%20would%20love%20to%20buy%20a%20fragrance%20%F0%9F%96%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp-card"
          >
            <WhatsAppIcon />
            <div>
              <span className="contact-label">WhatsApp</span>
              <span className="contact-val">0789 230 136</span>
            </div>
          </a>

          <a
            href="https://x.com/titan_colognes"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <div>
              <span className="contact-label">X (Twitter)</span>
              <span className="contact-val">@titan_colognes</span>
            </div>
          </a>

          <a
            href="https://instagram.com/titan_colognes"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <div>
              <span className="contact-label">Instagram</span>
              <span className="contact-val">@titan_colognes</span>
            </div>
          </a>

          <a href="mailto:titancolognes1@gmail.com" className="contact-card">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div>
              <span className="contact-label">Email</span>
              <span className="contact-val">titancolognes1@gmail.com</span>
            </div>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p className="footer-built">Built by TMaria</p>
      </footer>

      {/* ── BROWSE BUTTON ── */}
      <button
        className="browse-btn"
        onClick={() => setDrawerOpen(true)}
        aria-label="Browse all fragrances"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        Browse All
      </button>

      {/* ── DRAWER OVERLAY ── */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
      )}

      {/* ── DRAWER ── */}
      <div className={`drawer${drawerOpen ? ' open' : ''}`} role="dialog" aria-label="Fragrance collection">
        <div className="drawer-header">
          <span className="drawer-title">Collection</span>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">✕</button>
        </div>
        <div className="drawer-list">
          {fragrances.map((f) => (
            <button key={f.id} className="drawer-item" onClick={() => scrollToFragrance(f.id)}>
              <span className="drawer-item-brand">{f.brand}</span>
              <span className="drawer-item-name">{f.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

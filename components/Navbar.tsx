'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
      borderBottom: '1px solid rgba(26,46,74,0.1)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img src="/logo.png" alt="Panighél & Antar" style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }} />
            <div>
              <div className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--navy)', letterSpacing: '0.04em', lineHeight: 1 }}>
                Panighél <span style={{ color: 'var(--gold)' }}>&</span> Antar
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '3px' }}>
                Sociedade de Advogados
              </div>
            </div>
          </a>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s', fontWeight: 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--navy)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-sec)')}>
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ padding: '10px 20px', fontSize: '0.73rem' }}>
              Falar com Especialista
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
            <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ height: '1.5px', background: 'var(--navy)', display: 'block', transition: 'all 0.3s',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px,4px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1 }} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid var(--border)', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ textAlign: 'center' }}>
            Falar com Especialista
          </a>
        </div>
      )}

      <style>{`
        .hamburger { display: none; }
        @media (max-width: 768px) { .nav-links { display: none !important; } .hamburger { display: block !important; } }
      `}</style>
    </nav>
  )
}

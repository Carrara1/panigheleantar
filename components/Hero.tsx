'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const wa = "https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista"

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--white)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', background: 'linear-gradient(180deg, var(--gold), var(--navy))' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'start' }} className="hero-grid">

          <div style={{ opacity: 0, animation: 'fadeUp 0.9s ease 0.1s forwards' }}>
            <div className="eyebrow" style={{ marginBottom: '28px' }}>
              <span className="line" />Especialistas em Regularização Imobiliária
            </div>

            {/* QUADRO DESTAQUE */}
            <div style={{ background: 'var(--navy)', border: '3px solid var(--gold)', padding: '40px 44px', marginBottom: '32px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -3, left: -3, width: '24px', height: '24px', borderTop: '4px solid var(--gold-light)', borderLeft: '4px solid var(--gold-light)' }} />
              <div style={{ position: 'absolute', top: -3, right: -3, width: '24px', height: '24px', borderTop: '4px solid var(--gold-light)', borderRight: '4px solid var(--gold-light)' }} />
              <div style={{ position: 'absolute', bottom: -3, left: -3, width: '24px', height: '24px', borderBottom: '4px solid var(--gold-light)', borderLeft: '4px solid var(--gold-light)' }} />
              <div style={{ position: 'absolute', bottom: -3, right: -3, width: '24px', height: '24px', borderBottom: '4px solid var(--gold-light)', borderRight: '4px solid var(--gold-light)' }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, lineHeight: 1.4, color: '#ffffff', marginBottom: '16px' }}>
                  {'Seu imóvel tem algum problema que impede a venda, o financiamento, a escritura ou a transferência?'.split(' ').map((word, i) => (
                    <span key={i} style={{ display: 'inline-block', marginRight: '0.25em', minWidth: 'max-content', animation: `wordLight 14s ease-in-out ${i * 0.35}s infinite` }}>{word}</span>
                  ))}
                </h1>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', margin: '20px 0' }} />

                <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--gold-light)', lineHeight: 1.2 }}>
                  {'Nós temos a solução.'.split(' ').map((word, i) => (
                    <span key={i} style={{ display: 'inline-block', marginRight: '0.25em', animation: `wordLight 14s ease-in-out ${(i + 20) * 0.35}s infinite` }}>{word}</span>
                  ))}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-sec)', lineHeight: 1.8, marginBottom: '32px', fontWeight: 300 }}>
              Somos especialistas em resolver situações jurídicas complexas que travam imóveis. Já destravamos mais de 300 casos em São Paulo.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Quero resolver meu imóvel
              </a>
              <a href="#servicos" className="btn-outline-navy">Ver como resolvemos →</a>
            </div>
          </div>

          <div style={{ opacity: 0, animation: 'fadeUp 0.9s ease 0.4s forwards' }} className="hero-card">
            <div className="card-white" style={{ padding: '36px 32px' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Problemas que resolvemos</div>
              {['✔ Imóvel com indisponibilidade','✔ Imóvel sem escritura','✔ Conflito com construtora','✔ Inventário travando venda','✔ Matrícula irregular','✔ Área divergente na matrícula','✔ Construção irregular ou sem habite-se','✔ Financiamento negado por pendência'].map((item, i) => (
                <div key={i} style={{ fontSize: '0.88rem', color: 'var(--navy)', padding: '7px 0', borderBottom: i < 7 ? '1px solid var(--border)' : 'none', fontWeight: 400 }}>{item}</div>
              ))}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-sec)' }}>Fale agora: </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--navy)', fontWeight: 500 }}>11 97132-7586</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'var(--border)', marginTop: '16px' }}>
              {[{ n: '300+', label: 'Casos Resolvidos' },{ n: '20+', label: 'Anos de Exp.' },{ n: '100%', label: 'Foco Imobiliário' }].map(stat => (
                <div key={stat.label} style={{ background: 'var(--white)', padding: '16px 12px', textAlign: 'center' }}>
                  <div className="font-display" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1 }}>{stat.n}</div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wordLight { 0%, 100% { color: inherit; text-shadow: none; } 5% { color: #fff7a0; text-shadow: 0 0 12px rgba(255,247,160,1), 0 0 30px rgba(232,201,122,1), 0 0 60px rgba(232,201,122,0.8); } 10% { color: inherit; text-shadow: none; } }
        @media (min-width: 900px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; gap: 56px !important; } }
        @media (max-width: 899px) { .hero-card { max-width: 500px; } }
      `}</style>
    </section>
  )
}

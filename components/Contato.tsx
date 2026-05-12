'use client'
export default function Contato() {
  const wa = "https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista"
  return (
    <section id="contato" style={{ background: 'var(--white)' }} className="section-pad">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'var(--navy)', padding: '60px 40px', textAlign: 'center', marginBottom: '56px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '20px', color: 'var(--gold-light)' }}>
            <span className="line" style={{ background: 'var(--gold-light)' }} />Análise Gratuita<span className="line" style={{ background: 'var(--gold-light)' }} />
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.8rem)', fontWeight: 300, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            Imóvel travado?<br /><em className="text-gold" style={{ fontStyle: 'italic' }}>A gente resolve.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.75 }}>
            Fale agora com um especialista. Análise inicial gratuita e sem compromisso. Já destravamos mais de 300 casos em São Paulo.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '0.9rem', padding: '16px 36px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Quero resolver meu imóvel
          </a>
        </div>

        <div className="grid-4">
          {[
            { icon: '📱', label: 'WhatsApp', value: '+55 (11) 97132-7586', link: wa },
            { icon: '✉️', label: 'E-mail', value: 'contato@panigheleantar.com.br', link: 'mailto:contato@panigheleantar.com.br' },
            { icon: '📍', label: 'Localização', value: 'São Paulo, SP — Brasil', link: null },
            { icon: '📘', label: 'Livro', value: 'Site do Livro — Como Regularizar um Imóvel', link: 'https://livro-imovel-irregular.vercel.app/' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{c.label}</div>
                {c.link ? (
                  <a href={c.link} target={c.link.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
                    style={{ fontSize: '0.9rem', color: 'var(--navy)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--navy)')}>{c.value}</a>
                ) : (
                  <div style={{ fontSize: '0.9rem', color: 'var(--navy)' }}>{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

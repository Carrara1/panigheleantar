'use client'
export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-deep)', color: 'rgba(255,255,255,0.7)', padding: '48px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <img src="/logo.png" alt="Panighél & Antar" style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} />
              <div>
                <div className="font-display" style={{ fontSize: '1.3rem', fontWeight: 300, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>
                  Panighél <span style={{ color: 'var(--gold-light)' }}>&</span> Antar
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '3px' }}>Sociedade de Advogados</div>
              </div>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', maxWidth: '260px', lineHeight: 1.65 }}>
              Especialistas em destravar imóveis com problemas jurídicos complexos. São Paulo, Brasil.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '14px' }}>Navegação</div>
              {[['#hero','Início'],['#servicos','Serviços'],['#quem-somos','Quem Somos'],['#resultados','Resultados'],['#contato','Contato']].map(([href, label]) => (
                <a key={href} href={href} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '14px' }}>Contato</div>
              <a href="https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '8px' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>+55 (11) 97132-7586</a>
              <a href="mailto:contato@panigheleantar.com.br"
                style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '8px' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>contato@panigheleantar.com.br</a>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>São Paulo, SP</div>
              <a href="https://livro-imovel-irregular.vercel.app/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>📘 Site do Livro</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Panighél & Antar Sociedade de Advogados.</div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>OAB/SP — Advocacia Especializada em Direito Imobiliário</div>
        </div>
      </div>
    </footer>
  )
}

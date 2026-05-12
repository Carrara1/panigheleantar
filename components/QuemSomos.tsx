'use client'
export default function QuemSomos() {
  return (
    <section id="quem-somos" style={{ background: 'var(--white)' }} className="section-pad">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="line" />Autoridade & Experiência<span className="line" />
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--navy)' }}>
            Conheça os <em className="text-gold" style={{ fontStyle: 'italic' }}>especialistas</em>
          </h2>
        </div>

        <div className="grid-2" style={{ marginBottom: '64px' }}>
          <div className="card-cream" style={{ padding: '36px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src="/danilo.png" alt="Dr. Danilo Carrara Panighél" style={{ width: '140px', height: '220px', borderRadius: '8px', objectFit: 'cover', objectPosition: 'center top', border: '3px solid var(--navy)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Sócio Fundador</div>
                <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2 }}>Dr. Danilo Carrara Panighél</h3>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {['Advogado formado pela UNICID (2003)','Pós-graduado em Direito Imobiliário e Incorporação de Edifícios (CIE)','Curso Prático de Incorporação — Universidade SECOVI','Atuação em incorporadoras de grande porte','Mais de 300 matrículas regularizadas'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginTop: '6px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-sec)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-gold)', padding: '16px' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>📘 Autor Publicado</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--navy)', fontWeight: 500, marginBottom: '10px', lineHeight: 1.4 }}>"Como Regularizar um Imóvel — Guia Completo e Atualizado"</div>
              <a href="https://www.amazon.com.br/Como-Regularizar-Im%C3%B3vel-Completo-Atualizado-ebook/dp/B0CZ7G1B5J" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.78rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '8px' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                Disponível na Amazon →
              </a>
              <a href="https://livro-imovel-irregular.vercel.app/" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.78rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 500, display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                Acesse o site do livro →
              </a>
            </div>
          </div>

          <div className="card-cream" style={{ padding: '36px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src="/alexi.jpg" alt="Dr. Alexi de Medeiros Antar" style={{ width: '140px', height: '220px', borderRadius: '8px', objectFit: 'cover', objectPosition: 'center top', border: '3px solid var(--navy)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Sócio</div>
                <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2 }}>Dr. Alexi de Medeiros Antar</h3>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {['Advogado formado pelo Mackenzie (2010)','Pós-graduado em Direito Contratual pela PUC-SP','Especialização em Incorporação de Edifícios (CIE)','15 anos de experiência em direito cível e imobiliário','Atuação em renomadas bancas advocatícias de São Paulo'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginTop: '6px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-sec)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '16px' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Especialidades</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-sec)', lineHeight: 1.65 }}>Direito Contratual · Direito Imobiliário · Direito Cível · Incorporação Imobiliária</div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--cream)', padding: '48px 40px', borderTop: '3px solid var(--navy)' }}>
          <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--navy)', textAlign: 'center', marginBottom: '40px' }}>
            Por que nos <em className="text-gold" style={{ fontStyle: 'italic' }}>escolher</em>
          </h3>
          <div className="grid-4">
            {[
              { icon: '🎯', title: 'Especialização Exclusiva', desc: 'Atuação 100% focada em Direito Imobiliário, Notarial e Registral.' },
              { icon: '🤝', title: 'Rede de Relacionamentos', desc: 'Amplo relacionamento com tabeliães, registradores e profissionais do setor.' },
              { icon: '🔬', title: 'Visão Técnica Profunda', desc: 'Análise criteriosa de matrículas, cadeias dominiais e registros complexos.' },
              { icon: '🏛️', title: 'Atuação Completa', desc: 'Da regularização perante prefeituras e cartórios à Receita Federal.' },
            ].map((d, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{d.icon}</div>
                <div style={{ width: '24px', height: '2px', background: 'var(--gold)', marginBottom: '10px' }} />
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '6px' }}>{d.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-sec)', lineHeight: 1.65 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
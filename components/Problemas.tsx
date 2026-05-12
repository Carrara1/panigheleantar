'use client'
const problems = [
  { icon: '⛔', title: 'Matrícula com indisponibilidade?', desc: 'Bloqueios registrais impedem venda, financiamento ou transferência. Sabemos como removê-los.' },
  { icon: '🏚️', title: 'Imóvel sem escritura ou inventário pendente?', desc: 'Situações sucessórias travadas por anos. Resolvemos judicial e extrajudicialmente.' },
  { icon: '🔒', title: 'Não consegue vender ou financiar?', desc: 'Pendências documentais bloqueiam negócios. Identificamos e eliminamos os impedimentos.' },
  { icon: '📋', title: 'Construção irregular ou sem habite-se?', desc: 'Regularização perante prefeituras, cartórios e Receita Federal.' },
  { icon: '⚖️', title: 'Conflito com construtora ou incorporadora?', desc: 'Adjudicação compulsória para garantir seus direitos sobre o imóvel.' },
  { icon: '🔍', title: 'Cadeia dominial irregular ou inconsistente?', desc: 'Due diligence profunda para detectar riscos ocultos antes de comprar.' },
]

export default function Problemas() {
  return (
    <section style={{ background: 'var(--cream)' }} className="section-pad">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="line" />Situações que Resolvemos<span className="line" />
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--navy)' }}>
            Seu imóvel está <em className="text-gold" style={{ fontStyle: 'italic' }}>travado</em>?
          </h2>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', maxWidth: '500px', margin: '14px auto 0', lineHeight: 1.75 }}>
            Se o seu imóvel tem um problema que parece sem solução, provavelmente é o tipo de caso em que atuamos.
          </p>
        </div>
        <div className="grid-3">
          {problems.map((p, i) => (
            <div key={i} className="card-white" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-sec)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <a href="https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer" className="btn-navy">
            Falar com um especialista agora
          </a>
        </div>
      </div>
    </section>
  )
}

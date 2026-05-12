'use client'
const resultados = [
  { before: 'Matrícula com indisponibilidade há 8 anos', after: 'Venda realizada em 60 dias após regularização' },
  { before: 'Financiamento negado por pendência registral', after: 'Financiamento aprovado e imóvel transferido' },
  { before: 'Imóvel sem escritura por 15 anos', after: 'Usucapião extrajudicial concluída com êxito' },
  { before: 'Construtora recusando escritura', after: 'Adjudicação compulsória — propriedade garantida' },
]
const depoimentos = [
  { texto: 'Tinha desistido de vender meu apartamento depois de 3 anos tentando resolver a matrícula. Em menos de 4 meses o escritório resolveu o que ninguém conseguia.', autor: 'Cliente — São Paulo, SP' },
  { texto: 'Profissionalismo técnico que eu nunca tinha visto em escritório jurídico. Resolveram uma situação que parecia impossível na nossa incorporação.', autor: 'Investidor Imobiliário — Campinas, SP' },
  { texto: 'Análise profunda, comunicação clara e resultado concreto. Recomendo para qualquer situação imobiliária complexa.', autor: 'Empresário — Grande São Paulo' },
]

export default function Resultados() {
  return (
    <section id="resultados" style={{ background: 'var(--cream)' }} className="section-pad">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="line" />Prova de Resultado<span className="line" />
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--navy)' }}>
            Antes e <em className="text-gold" style={{ fontStyle: 'italic' }}>depois</em>
          </h2>
        </div>

        <div className="grid-2" style={{ marginBottom: '72px' }}>
          {resultados.map((r, i) => (
            <div key={i} className="card-white" style={{ padding: '24px' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Situação anterior</div>
                <div style={{ fontSize: '0.87rem', color: 'var(--text-sec)', lineHeight: 1.55 }}>{r.before}</div>
              </div>
              <div style={{ color: 'var(--gold)', fontSize: '1.2rem', margin: '8px 0', textAlign: 'center' }}>↓</div>
              <div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Resultado obtido</div>
                <div style={{ fontSize: '0.87rem', color: 'var(--navy)', lineHeight: 1.55, fontWeight: 500 }}>{r.after}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', padding: '52px 40px', marginBottom: '72px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 300, color: '#fff' }}>
              Como <em className="text-gold" style={{ fontStyle: 'italic' }}>atuamos</em>
            </h2>
          </div>
          <div className="grid-4">
            {[
              { step: '01', title: 'Diagnóstico Estratégico', desc: 'Análise profunda da documentação e identificação de todos os impedimentos.' },
              { step: '02', title: 'Plano de Ação', desc: 'Mapeamento da estratégia jurídica mais eficiente para destravar o ativo.' },
              { step: '03', title: 'Execução Técnica', desc: 'Atuação precisa junto a cartórios, órgãos públicos e via judicial quando necessário.' },
              { step: '04', title: 'Entrega e Resultado', desc: 'Imóvel regularizado, documentação em ordem e patrimônio desbloqueado.' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display" style={{ fontSize: '2.8rem', fontWeight: 400, color: 'var(--gold-light)', lineHeight: 1, marginBottom: '12px', opacity: 0.9 }}>{s.step}</div>
                <div style={{ width: '24px', height: '2px', background: 'var(--gold)', marginBottom: '12px' }} />
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff', marginBottom: '6px' }}>{s.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--navy)' }}>
              O que dizem nossos <em className="text-gold" style={{ fontStyle: 'italic' }}>clientes</em>
            </h2>
          </div>
          <div className="grid-3">
            {depoimentos.map((d, i) => (
              <div key={i} className="card-white" style={{ padding: '28px 24px' }}>
                <div className="font-display" style={{ fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '12px', opacity: 0.4 }}>"</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-sec)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>{d.texto}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '1px', background: 'var(--gold)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>{d.autor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

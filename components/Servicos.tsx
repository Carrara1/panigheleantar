'use client'
const services = [
  { category: 'Sucessão & Aquisição', items: [
    { title: 'Recupere a propriedade mesmo sem escritura', sub: 'Adjudicação Compulsória', desc: 'Construtora ou vendedor se recusando a assinar? Garantimos seu direito de propriedade judicialmente.' },
    { title: 'Transforme posse em propriedade oficial', sub: 'Usucapião Judicial e Extrajudicial', desc: 'Imóvel sem documentação há anos? Regularizamos e formalizamos sua propriedade.' },
    { title: 'Destrave heranças que travam imóveis', sub: 'Inventário Judicial e Extrajudicial', desc: 'Inventário parado impedindo venda ou transferência? Resolvemos judicial e extrajudicialmente.' },
  ]},
  { category: 'Registro & Documentação', items: [
    { title: 'Remova bloqueios que impedem venda ou financiamento', sub: 'Indisponibilidades e Gravames', desc: 'Matrícula bloqueada? Removemos penhoras, arrestos e indisponibilidades com precisão técnica.' },
    { title: 'Corrija erros na matrícula e destrave negócios', sub: 'Retificação de Área e Matrícula', desc: 'Divergência de metragem ou dados incorretos? Corrigimos e liberamos venda e financiamento.' },
    { title: 'Crie ou regularize a matrícula do seu imóvel', sub: 'Regularização e Abertura de Matrícula', desc: 'Imóvel sem matrícula ou com pendências? Criamos e saneamos do zero.' },
  ]},
  { category: 'Regularização & Edificação', items: [
    { title: 'Regularize construção e libere venda ou financiamento', sub: 'Construção e Ampliação Irregular', desc: 'Obra sem habite-se ou fora do registro? Regularizamos perante prefeituras e cartórios.' },
    { title: 'Regularize seu imóvel rural ou urbano', sub: 'REURB e Georreferenciamento', desc: 'Imóvel rural ou em área de regularização? Atuamos com georreferenciamento e REURB.' },
    { title: 'Resolva pendências com Prefeitura e Receita Federal', sub: 'Órgãos Públicos', desc: 'IPTU irregular, CNIB ou pendências fiscais? Regularizamos em todas as esferas.' },
  ]},
  { category: 'Due Diligence & Operações', items: [
    { title: 'Descubra riscos ocultos antes de comprar', sub: 'Due Diligence para Aquisição', desc: 'Prestes a comprar um imóvel? Investigamos toda a cadeia dominial e histórico registral.' },
    { title: 'Análise profunda do histórico do imóvel', sub: 'Cadeias Dominiais', desc: 'Imóvel com histórico complexo? Mapeamos todos os vínculos e impedimentos registrais.' },
    { title: 'Estruturação jurídica completa de empreendimentos', sub: 'Incorporação e Desenvolvimento', desc: 'Suporte jurídico especializado para incorporadoras do planejamento à entrega.' },
  ]},
  { category: 'Alienação Fiduciária — Bancos, Incorporadoras e Construtoras', items: [
    { title: 'Consolidação da propriedade e gestão até o leilão', sub: 'Procedimento Extrajudicial Completo — Lei 9.514/97', desc: 'Intimação do devedor, consolidação, regularização da matrícula e preparação para leilão. Gestão completa do início ao fim.' },
    { title: 'Atuação judicial quando há resistência', sub: 'Contencioso Estratégico', desc: 'Defesa da consolidação em juízo, imissão na posse e estratégias para viabilização do leilão.' },
    { title: 'Segurança registral em todas as etapas', sub: 'Diferencial Técnico', desc: 'Experiência com cartórios e Direito Registral — tratamos como recuperação de ativo estruturada, não como mera formalidade.' },
  ]},
]

export default function Servicos() {
  return (
    <section id="servicos" style={{ background: 'var(--navy)' }} className="section-pad">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: 'var(--gold-light)' }}>
            <span className="line" style={{ background: 'var(--gold-light)' }} />Como Resolvemos<span className="line" style={{ background: 'var(--gold-light)' }} />
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: '#fff' }}>
            Cada problema tem <em className="text-gold" style={{ fontStyle: 'italic' }}>uma solução</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '500px', margin: '14px auto 0', lineHeight: 1.75 }}>
            Não descrevemos serviços — resolvemos problemas reais que travam patrimônio.
          </p>
        </div>
        <div className="grid-2">
          {services.map((group, gi) => (
            <div key={gi} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '32px 28px', transition: 'border-color 0.3s', gridColumn: gi === services.length - 1 && services.length % 2 !== 0 ? '1 / -1' : undefined }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,151,42,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '18px', height: '1px', background: 'var(--gold)' }} />{group.category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {group.items.map((item, ii) => (
                  <div key={ii} style={{ paddingBottom: ii < group.items.length - 1 ? '16px' : 0, borderBottom: ii < group.items.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold-light)', marginBottom: '4px', letterSpacing: '0.05em' }}>{item.sub}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '16px' }}>Não encontrou seu caso? Provavelmente também resolvemos.</p>
          <a href="https://wa.me/5511971327586?text=Ol%C3%A1%2C%20preciso%20regularizar%20um%20im%C3%B3vel%20e%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Falar com especialista agora
          </a>
        </div>
      </div>
    </section>
  )
}

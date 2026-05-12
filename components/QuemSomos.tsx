'use client'
export default function BotaoDiagnostico() {
  return (
    <div style={{ background: '#fff', padding: '16px 32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href="#diagnostico" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#c0392b', color: '#fff', fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 700, padding: '12px 32px', borderRadius: '6px', textDecoration: 'none', animation: 'pulsaRed 1.4s ease-in-out infinite' }}>
        Faça seu diagnóstico gratuito aqui
        <span style={{ display: 'inline-block', animation: 'seta 0.7s ease-in-out infinite' }}>↓</span>
      </a>
      <style>{`
        @keyframes pulsaRed {
          0%, 100% { box-shadow: 0 0 0 0 rgba(192,57,43,.6); background: #c0392b; }
          50% { box-shadow: 0 0 0 12px rgba(192,57,43,0); background: #e74c3c; }
        }
        @keyframes seta {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  )
}
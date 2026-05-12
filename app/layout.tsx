import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Panighél & Antar | Especialistas em Regularização Imobiliária',
  description: 'Destravamos imóveis com problemas jurídicos complexos. Especialistas em adjudicação compulsória, indisponibilidades e regularização estratégica de ativos imobiliários.',
  keywords: 'regularização imobiliária, adjudicação compulsória, indisponibilidade de imóvel, usucapião, advogado imobiliário, São Paulo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

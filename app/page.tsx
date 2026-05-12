"use client";
import React, { useState, useRef, useEffect } from "react";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbyXT-2tuOu1C_ms6_AwXETEAtgrgNOlgkYQwy0AH0RZrm70PE_tT-7Aj857YMEmNQpJ/exec";

async function enviarParaSheets(dados: Record<string, string>): Promise<void> {
  try {
    await fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify(dados),
    });
  } catch (e) {}
}

const PERGUNTAS = [
  {
    id: "P1",
    texto: "Qual é a sua situação principal?",
    opcoes: [
      { id: "sem_escritura", label: "Comprei e paguei, mas não tenho escritura" },
      { id: "gaveta",        label: "Tenho contrato de gaveta" },
      { id: "heranca",       label: "É herança / inventário" },
      { id: "bloqueio",      label: "Existe bloqueio ou indisponibilidade na matrícula" },
      { id: "nome_errado",   label: "O imóvel não está no meu nome" },
      { id: "posse",         label: "Tenho posse longa, sem nenhum registro" },
      { id: "construtora",   label: "Problema com construtora ou incorporadora" },
      { id: "sem_doc",       label: "Não tenho nenhuma documentação" },
    ],
  },
  {
    id: "P2",
    texto: "O imóvel está registrado em seu nome na matrícula?",
    opcoes: [
      { id: "sim",     label: "Sim, está no meu nome" },
      { id: "nao",     label: "Não, ainda não está" },
      { id: "nao_sei", label: "Não sei / nunca consultei" },
    ],
  },
  {
    id: "P3",
    texto: "Qual documentação você possui?",
    opcoes: [
      { id: "contrato",         label: "Tenho contrato ou recibo" },
      { id: "escritura_nreg",   label: "Tenho escritura, mas não registrada" },
      { id: "inventario_feito", label: "Inventário feito, mas não registrado no cartório" },
      { id: "nada",             label: "Não tenho nada formal" },
    ],
  },
  {
    id: "P4",
    texto: "Qual é o seu objetivo principal?",
    opcoes: [
      { id: "regularizar", label: "Regularizar e ter a escritura no seu nome" },
      { id: "vender",      label: "Vender o imóvel" },
      { id: "herdar",      label: "Transferir para herdeiros" },
      { id: "resolver",    label: "Resolver um problema jurídico urgente" },
    ],
  },
];

interface Doc { g: string; i: string[]; }
interface Diag {
  titulo: string;
  tipo: string;
  resumo: string[];
  favoraveis: string[];
  atencao: string[];
  documentos: Doc[];
}

const D: Record<string, Diag> = {
  sem_escritura: {
    titulo: "Imóvel adquirido sem escritura definitiva",
    tipo: "Regularização Documental",
    resumo: [
      "Com base nas informações que você forneceu, identificamos que sua situação se enquadra em um cenário comum de imóvel adquirido sem a formalização da escritura e registro na matrícula.",
      "Isso significa que, juridicamente, a propriedade ainda não está regularizada, o que pode gerar dificuldades para venda, financiamento ou transmissão futura para herdeiros.",
      "Na maioria dos casos como o seu, existe solução jurídica viável, sendo necessário analisar a documentação disponível e a cadeia de aquisição para definir o melhor caminho.",
    ],
    favoraveis: [
      "Situação extremamente comum e com soluções jurídicas bem consolidadas",
      "Existência de contrato ou recibo como ponto de partida",
      "Mercado imobiliário brasileiro oferece múltiplos caminhos de regularização",
    ],
    atencao: [
      "Quanto mais tempo sem regularizar, maiores os riscos jurídicos e fiscais",
      "A situação do vendedor original precisa ser verificada nos cartórios",
      "Possíveis débitos de IPTU podem necessitar de regularização prévia",
    ],
    documentos: [
      { g: "Seus documentos", i: ["RG e CPF — originais e cópias", "Comprovante de residência", "Certidão de estado civil"] },
      { g: "Documentos do imóvel", i: ["Contrato ou recibo de compra original", "Carnês de IPTU pagos", "Contas de água e luz do imóvel"] },
      { g: "Sobre o vendedor", i: ["Nome completo e CPF do vendedor", "Endereço atual do vendedor", "Se falecido: nome dos herdeiros"] },
    ],
  },
  gaveta: {
    titulo: "Contrato de gaveta — transferência informal",
    tipo: "Regularização de Contrato Particular",
    resumo: [
      "Sua situação indica a existência de um contrato particular não registrado em cartório, o chamado contrato de gaveta.",
      "Esse tipo de situação é muito comum no Brasil, mas juridicamente frágil: perante terceiros, o vendedor ainda figura como proprietário.",
      "A regularização é possível e existem caminhos específicos para formalizar a transferência definitiva da propriedade para o seu nome.",
    ],
    favoraveis: [
      "Situação muito comum com precedentes jurídicos bem estabelecidos",
      "Contrato de gaveta serve como prova da negociação realizada",
      "Existência de pagamentos e posse reforçam sua posição jurídica",
    ],
    atencao: [
      "Dívidas do vendedor podem atingir o imóvel enquanto estiver no nome dele",
      "Falecimento do vendedor pode complicar e encarecer o processo",
      "Quanto antes regularizar, menor o risco",
    ],
    documentos: [
      { g: "Seus documentos", i: ["RG e CPF", "Comprovante de residência", "Certidão de estado civil"] },
      { g: "Documentos do contrato", i: ["Contrato de gaveta original", "Comprovantes de pagamento", "Declaração de quitação se houver"] },
      { g: "Imóvel e vendedor", i: ["Matrícula atualizada — Cartório de Registro de Imóveis", "IPTU do imóvel — Prefeitura", "Dados completos do vendedor: nome, CPF, endereço"] },
    ],
  },
  heranca: {
    titulo: "Imóvel em situação de herança não regularizada",
    tipo: "Inventário e Partilha",
    resumo: [
      "Com base nas informações fornecidas, o imóvel faz parte de uma herança ainda não regularizada por inventário.",
      "Sem o inventário, não é possível transferir formalmente a propriedade para os herdeiros, o que impede venda, financiamento ou qualquer regularização futura.",
      "O procedimento pode ser realizado de forma judicial ou extrajudicial em cartório, dependendo das características do caso.",
    ],
    favoraveis: [
      "Inventário extrajudicial em cartório é mais rápido e econômico quando possível",
      "Herdeiros em acordo facilita muito o processo",
      "Documentação do falecido costuma estar disponível nos registros públicos",
    ],
    atencao: [
      "Existência de menor herdeiro obriga o inventário judicial",
      "Dívidas do falecido podem afetar o valor a ser partilhado",
      "Imposto de transmissão ITCMD incide sobre a herança",
    ],
    documentos: [
      { g: "Documentos do falecido", i: ["Certidão de óbito — Cartório de Registro Civil", "RG, CPF e certidão de casamento do falecido", "Certidão de nascimento dos herdeiros"] },
      { g: "Documentos do imóvel", i: ["Matrícula atualizada — Cartório de Registro de Imóveis", "IPTU do imóvel — Prefeitura", "Escritura ou contrato de compra original"] },
      { g: "Herdeiros", i: ["RG e CPF de todos os herdeiros", "Certidão de casamento se houver", "Declaração de inexistência de outros herdeiros se aplicável"] },
    ],
  },
  bloqueio: {
    titulo: "Bloqueio ou indisponibilidade registrada na matrícula",
    tipo: "Cancelamento de Restrição Registral",
    resumo: [
      "Sua situação indica a existência de restrições ou bloqueios registrados na matrícula do imóvel, como indisponibilidade decretada por ordem judicial, administrativa ou fiscal.",
      "Esse tipo de situação pode impedir transferências e gerar insegurança jurídica significativa, especialmente se relacionado a dívidas do proprietário ou de terceiros.",
      "Dependendo da origem do bloqueio, é possível buscar o cancelamento administrativo ou judicial da restrição, restaurando a plena disponibilidade do imóvel.",
    ],
    favoraveis: [
      "Indisponibilidades têm prazo e podem ser contestadas",
      "Se originada por erro, o cancelamento pode ser rápido",
      "Existem vias extrajudiciais para alguns tipos de bloqueio",
    ],
    atencao: [
      "Origem do bloqueio precisa ser identificada antes de qualquer medida",
      "Bloqueio judicial exige atuação no processo de origem",
      "Dívidas vinculadas podem precisar ser quitadas ou renegociadas",
    ],
    documentos: [
      { g: "Documentos do imóvel", i: ["Matrícula atualizada com histórico completo — Cartório de RI", "Certidão de ônus reais e ações reipersecutórias", "IPTU e situação fiscal — Prefeitura"] },
      { g: "Seus documentos", i: ["RG e CPF", "Comprovante de propriedade ou aquisição", "Procuração se representado por terceiro"] },
      { g: "Sobre o bloqueio", i: ["Número do processo judicial se houver", "Certidão CNIB — Central Nacional de Indisponibilidade de Bens", "Informações sobre a dívida ou ação de origem"] },
    ],
  },
  nome_errado: {
    titulo: "Imóvel registrado em nome de terceiro",
    tipo: "Regularização Dominial",
    resumo: [
      "Mesmo com a aquisição realizada, o imóvel ainda consta em nome de terceiros no registro do cartório de imóveis.",
      "Isso representa um risco relevante: juridicamente, o proprietário perante terceiros ainda é quem consta na matrícula.",
      "Existem caminhos jurídicos para regularizar essa situação e transferir a propriedade formalmente, dependendo da forma como o imóvel foi adquirido.",
    ],
    favoraveis: [
      "Com documentação da aquisição, a regularização tem base jurídica sólida",
      "Posse e pagamentos realizados são elementos importantes",
      "Múltiplos instrumentos jurídicos disponíveis conforme o caso",
    ],
    atencao: [
      "Cada dia sem regularização aumenta o risco jurídico",
      "Situação do vendedor nos cartórios precisa ser verificada",
      "Possíveis dívidas do nome constante na matrícula podem atingir o bem",
    ],
    documentos: [
      { g: "Seus documentos", i: ["RG e CPF", "Contrato de compra, recibo ou escritura", "Comprovantes de pagamento"] },
      { g: "Imóvel", i: ["Matrícula atualizada — Cartório de Registro de Imóveis", "IPTU — Prefeitura", "Certidão de ônus e ações"] },
      { g: "Proprietário registral", i: ["Nome completo e CPF de quem consta na matrícula", "Endereço atual", "Se falecido: certidão de óbito"] },
    ],
  },
  posse: {
    titulo: "Posse prolongada sem registro formal",
    tipo: "Usucapião",
    resumo: [
      "Com base nas informações fornecidas, seu caso indica uma posse prolongada sobre o imóvel, sem que haja registro formal em seu nome no cartório.",
      "Em muitos casos como esse, é possível regularizar a propriedade por meio de usucapião, mecanismo jurídico que reconhece a propriedade a quem exerce posse mansa, pacífica e ininterrupta por determinado período.",
      "A viabilidade e o prazo dependem do tempo de posse, da forma de ocupação e da situação do imóvel nos registros públicos.",
    ],
    favoraveis: [
      "Posse longa e pacífica é o elemento central do usucapião",
      "Testemunhos de vizinhos e documentos antigos reforçam o caso",
      "Usucapião extrajudicial em cartório é mais rápido quando aplicável",
    ],
    atencao: [
      "Interrupção da posse pode comprometer o prazo legal necessário",
      "Área e confrontantes precisam ser levantados com precisão",
      "Existência de conflitos ou disputas exige análise cuidadosa",
    ],
    documentos: [
      { g: "Seus documentos", i: ["RG e CPF", "Certidão de estado civil", "Comprovantes de residência — os mais antigos possíveis"] },
      { g: "Posse e imóvel", i: ["Qualquer contrato, recibo ou documento da aquisição", "Carnês de IPTU pagos", "Contas de água e luz no endereço", "Fotos antigas do imóvel"] },
      { g: "Testemunhas", i: ["Nome e endereço de 2 vizinhos que podem testemunhar", "Declaração informal de tempo de moradia se possível"] },
    ],
  },
  construtora: {
    titulo: "Imóvel adquirido de construtora com pendência",
    tipo: "Regularização de Incorporação Imobiliária",
    resumo: [
      "O imóvel foi adquirido de construtora ou incorporadora, mas não houve regularização completa da propriedade.",
      "Nesse tipo de caso, o adquirente possui direitos bem protegidos pela legislação, e existem medidas jurídicas específicas para garantir a regularização.",
      "Inclusive com possibilidade de responsabilizar a construtora pelos custos do processo.",
    ],
    favoraveis: [
      "Legislação protege fortemente o adquirente de boa-fé",
      "Construtoras têm obrigação legal de providenciar a escritura",
      "Contrato de compra é base sólida para exigir regularização",
    ],
    atencao: [
      "Construtora em dificuldade financeira pode complicar o processo",
      "Registro do memorial de incorporação precisa ser verificado",
      "Habite-se e averbação da construção são etapas necessárias",
    ],
    documentos: [
      { g: "Contrato e pagamentos", i: ["Contrato de compra e venda original", "Comprovantes de quitação ou histórico de pagamentos", "Declaração de quitação emitida pela construtora"] },
      { g: "Imóvel", i: ["Memorial de incorporação — Cartório de RI", "IPTU do imóvel — Prefeitura", "Habite-se ou Auto de Conclusão — Prefeitura"] },
      { g: "Seus documentos", i: ["RG e CPF", "Certidão de estado civil", "Comprovante de residência"] },
    ],
  },
  sem_doc: {
    titulo: "Imóvel sem documentação formal",
    tipo: "Reconstrução de Cadeia Documental",
    resumo: [
      "Sua situação envolve ausência ou insuficiência de documentação formal sobre o imóvel, cenário que exige análise técnica cuidadosa.",
      "A falta de documentos não impede necessariamente a regularização, mas exige uma investigação nos cartórios, prefeitura e registros históricos.",
      "Em muitos casos, é possível estruturar a regularização mesmo partindo de situações com pouca documentação.",
    ],
    favoraveis: [
      "Cartórios e prefeituras guardam registros históricos que podem ser recuperados",
      "Testemunhos e outros elementos podem suprir ausência de documentos",
      "Legislação brasileira prevê mecanismos específicos para esses casos",
    ],
    atencao: [
      "Tempo de investigação pode ser maior que em casos com documentação",
      "Situação do imóvel nos registros públicos precisa ser apurada primeiro",
      "Cada caso exige estratégia específica após diagnóstico completo",
    ],
    documentos: [
      { g: "O que você tiver", i: ["Qualquer documento físico relacionado ao imóvel", "Fotos antigas", "Recibos, cartas ou qualquer correspondência sobre o bem"] },
      { g: "Seus documentos", i: ["RG e CPF", "Certidão de estado civil", "Comprovante de onde você mora atualmente"] },
      { g: "Informações importantes", i: ["Endereço completo do imóvel", "Nome de quem vendeu mesmo que informal", "Há quanto tempo você tem relação com o imóvel"] },
    ],
  },
  inventario_feito: {
    titulo: "Inventário concluído mas não registrado em cartório",
    tipo: "Registro de Formal de Partilha",
    resumo: [
      "Mesmo com o inventário judicial ou extrajudicial concluído, o imóvel ainda não foi transferido formalmente na matrícula do cartório de imóveis.",
      "Isso significa que, do ponto de vista registral, o herdeiro ainda não figura como proprietário perante terceiros.",
      "A regularização exige o cumprimento das etapas de registro do formal de partilha ou carta de adjudicação no cartório competente.",
    ],
    favoraveis: [
      "Inventário concluído representa a parte mais complexa já resolvida",
      "Processo de registro é mais simples e rápido que o inventário",
      "Documentação do inventário já está organizada",
    ],
    atencao: [
      "ITCMD — imposto de transmissão deve estar quitado para registrar",
      "Certidões do cartório onde corre o inventário precisam estar atualizadas",
      "Prazo para registro após conclusão do inventário deve ser observado",
    ],
    documentos: [
      { g: "Do inventário", i: ["Formal de partilha ou carta de adjudicação originais", "Certidão de trânsito em julgado — Fórum", "Comprovante de pagamento do ITCMD — Fazenda Estadual"] },
      { g: "Seus documentos", i: ["RG e CPF do herdeiro registrando", "Certidão de habilitação como herdeiro", "Certidão de estado civil"] },
      { g: "Do imóvel", i: ["Matrícula atualizada — Cartório de Registro de Imóveis", "IPTU — Prefeitura"] },
    ],
  },
};

function classificar(r: Record<string, string>): string {
  if (r.P1 === "heranca" && r.P3 === "inventario_feito") return "inventario_feito";
  if (r.P1 === "heranca") return "heranca";
  if (r.P1 === "bloqueio") return "bloqueio";
  if (r.P1 === "gaveta") return "gaveta";
  if (r.P1 === "posse") return "posse";
  if (r.P1 === "construtora") return "construtora";
  if (r.P1 === "sem_doc") return "sem_doc";
  if (r.P1 === "nome_errado") return "nome_errado";
  if (r.P1 === "sem_escritura" && r.P3 === "escritura_nreg") return "nome_errado";
  return "sem_escritura";
}

function track(ev: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", ev);
  }
}

export default function Diagnostico() {
  const [tela, setTela] = useState<"cadastro" | "perguntas" | "resultado">("cadastro");
  const [form, setForm] = useState({ nome: "", email: "", tel: "" });
  const [erros, setErros] = useState<Record<string, string>>({});
  const [etapa, setEtapa] = useState(0);
  const [res, setRes] = useState<Record<string, string>>({});
  const [sel, setSel] = useState<string | null>(null);
  const [caso, setCaso] = useState<string | null>(null);
  const topo = useRef<HTMLDivElement>(null);
  const scroll = () => setTimeout(() => topo.current?.scrollIntoView({ behavior: "smooth" }), 60);

  useEffect(() => { setSel(null); }, [etapa]);

  const mascaraTel = (v: string) => {
    const n = v.replace(/\D/g, "").slice(0, 11);
    if (n.length <= 2) return n;
    if (n.length <= 7) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
    return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
  };

  const validar = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim() || form.nome.trim().split(" ").length < 2) e.nome = "Informe nome e sobrenome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (form.tel.replace(/\D/g, "").length < 10) e.tel = "Telefone inválido";
    setErros(e);
    return !Object.keys(e).length;
  };

  const avancar = () => {
    if (!sel) return;
    const novas = { ...res, [PERGUNTAS[etapa].id]: sel };
    setRes(novas);
    track("step_" + (etapa + 1) + "_completo");
    if (etapa < PERGUNTAS.length - 1) {
      setEtapa(e => e + 1);
    } else {
      const c = classificar(novas);
      setCaso(c);
      track("diagnostico_concluido");
      const objetivo = PERGUNTAS[3].opcoes.find(o => o.id === novas.P4)?.label || "";
      enviarParaSheets({
        nome: form.nome,
        email: form.email,
        tel: form.tel,
        caso: c,
        tipo: D[c]?.tipo || "",
        objetivo,
      });
      setTela("resultado");
      scroll();
    }
  };

  const reiniciar = () => {
    setTela("cadastro");
    setForm({ nome: "", email: "", tel: "" });
    setErros({});
    setEtapa(0);
    setRes({});
    setSel(null);
    setCaso(null);
    scroll();
  };

  const diag = caso ? D[caso] : null;
  const objetivo = PERGUNTAS[3].opcoes.find(o => o.id === res.P4)?.label || "";
  const wa = encodeURIComponent(`Olá! Me chamo ${form.nome}. Fiz o diagnóstico no site${diag ? ` (${diag.tipo})` : ""} e gostaria de dar o próximo passo.`);

  const goldLine = <div style={{ height: "3px", background: "linear-gradient(90deg,#b8963a,#d4a84e,#b8963a)" }} />;
  const navy = "#0a1e3d";
  const gold = "#b48c3c";
  const goldD = "#8a6420";
  const goldP = "#fdf5e0";
  const goldB = "#d4a84e";

  return (
    <section id="diagnostico" style={{ padding: "80px 0", background: "#fff" }} ref={topo}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: gold, fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Diagnóstico Gratuito</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: navy, marginBottom: "12px" }}>
            Descubra a solução em <em style={{ color: gold, fontStyle: "italic" }}>4 perguntas</em>
          </h2>
          <p style={{ color: "#6a80a0", fontSize: "14px" }}>Sem compromisso · Resultado imediato · Atendimento especializado</p>
        </div>

        {tela === "cadastro" && (
          <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "12px", boxShadow: "0 2px 14px rgba(10,30,61,.07)", overflow: "hidden" }}>
            {goldLine}
            <div style={{ padding: "32px" }}>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: "20px", fontWeight: 700, color: navy, marginBottom: "4px" }}>Seus dados para contato</h3>
              <p style={{ color: "#6a80a0", fontSize: "13px", marginBottom: "24px" }}>Usamos apenas para enviar o resultado e entrar em contato.</p>
              {([
                ["nome", "Nome completo *", "Ex: João da Silva Santos", "text", false],
                ["email", "E-mail *", "seuemail@gmail.com", "email", false],
                ["tel", "WhatsApp / Telefone *", "(11) 99999-0000", "text", true],
              ] as [string, string, string, string, boolean][]).map(([k, l, ph, t, mask]) => (
                <div key={k} style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: navy, marginBottom: "6px" }}>{l}</label>
                  <input
                    type={t}
                    value={(form as Record<string, string>)[k]}
                    placeholder={ph}
                    onChange={e => setForm(p => ({ ...p, [k]: mask ? mascaraTel(e.target.value) : e.target.value }))}
                    style={{ width: "100%", border: `1.5px solid ${erros[k] ? "#e05050" : "#dde4f0"}`, borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: navy, background: erros[k] ? "#fdf0ee" : "#f8faff", outline: "none", boxSizing: "border-box" }}
                  />
                  {erros[k] && <p style={{ fontSize: "12px", color: "#e05050", marginTop: "4px" }}>{erros[k]}</p>}
                </div>
              ))}
              <p style={{ color: "#6a80a0", fontSize: "12px", marginBottom: "20px" }}>🔒 Seus dados são usados apenas para enviar o resultado. Sem spam.</p>
              <button
                onClick={() => { if (validar()) { track("click_diagnostico_inicio"); setTela("perguntas"); scroll(); } }}
                style={{ width: "100%", background: navy, border: `2px solid ${goldB}`, borderRadius: "6px", padding: "14px", fontFamily: "Georgia,serif", fontSize: "18px", color: "#fff", fontWeight: 700, cursor: "pointer" }}
              >
                Iniciar diagnóstico
              </button>
              <p style={{ textAlign: "center", color: "#6a80a0", fontSize: "12px", marginTop: "10px", fontStyle: "italic" }}>4 perguntas · Resposta imediata · Sem compromisso</p>
            </div>
            {goldLine}
          </div>
        )}

        {tela === "perguntas" && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "10px", padding: "16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "14px", boxShadow: "0 2px 8px rgba(10,30,61,.05)" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: `2px solid ${goldB}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: navy, fontFamily: "Georgia,serif", flexShrink: 0 }}>{etapa + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: navy }}>Olá, {form.nome.split(" ")[0].charAt(0).toUpperCase() + form.nome.split(" ")[0].slice(1)}!</div>
                <div style={{ fontSize: "12px", color: "#6a80a0" }}>{etapa === 0 ? "Vamos entender sua situação" : `${etapa} de ${PERGUNTAS.length} respondidas`}</div>
              </div>
              <div style={{ width: "80px" }}>
                <div style={{ height: "4px", background: "#e8eef8", borderRadius: "100px" }}>
                  <div style={{ height: "100%", width: `${(etapa / PERGUNTAS.length) * 100}%`, background: goldB, borderRadius: "100px", transition: "width .5s ease" }} />
                </div>
              </div>
            </div>

            <div style={{ background: "#fff", border: `2px solid ${navy}`, borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 32px rgba(10,30,61,.1)" }}>
              <div style={{ borderBottom: `3px solid ${goldB}`, padding: "22px 24px", background: "#fff" }}>
                <div style={{ fontSize: "11px", color: gold, textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700, marginBottom: "10px" }}>Pergunta {etapa + 1}</div>
                <p style={{ fontFamily: "Georgia,serif", fontSize: "20px", fontWeight: 700, color: navy, lineHeight: 1.4 }}>{PERGUNTAS[etapa].texto}</p>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {PERGUNTAS[etapa].opcoes.map(op => (
                    <button key={op.id} onClick={() => setSel(op.id)}
                      style={{ textAlign: "left", display: "flex", alignItems: "center", gap: "12px", borderRadius: "8px", padding: "12px 16px", border: `2px solid ${sel === op.id ? navy : "#dde4f0"}`, background: sel === op.id ? "#f0f4fa" : "#f8faff", cursor: "pointer", fontSize: "14px", color: sel === op.id ? navy : "#4a6080", fontWeight: sel === op.id ? 600 : 400 }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: `2px solid ${sel === op.id ? navy : "#c0cce0"}`, background: sel === op.id ? navy : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {sel === op.id && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />}
                      </div>
                      {op.label}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {etapa > 0 && (
                    <button onClick={() => { setEtapa(e => e - 1); setSel(null); }}
                      style={{ padding: "10px 20px", border: "1px solid #dde4f0", borderRadius: "6px", color: "#6a80a0", fontSize: "13px", background: "#fff", cursor: "pointer" }}>
                      ← Voltar
                    </button>
                  )}
                  <button onClick={avancar} disabled={!sel}
                    style={{ flex: 1, padding: "12px", borderRadius: "6px", fontFamily: "Georgia,serif", fontSize: "17px", fontWeight: 700, border: `2px solid ${sel ? goldB : "#dde4f0"}`, background: sel ? navy : "#f0f4fa", color: sel ? "#fff" : "#6a80a0", cursor: sel ? "pointer" : "not-allowed" }}>
                    {etapa < PERGUNTAS.length - 1 ? "Próxima →" : "Ver meu diagnóstico →"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {tela === "resultado" && diag && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 14px rgba(10,30,61,.07)", marginBottom: "14px" }}>
              {goldLine}
              <div style={{ padding: "26px 28px" }}>
                <div style={{ fontSize: "11px", color: gold, textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700, marginBottom: "10px" }}>Diagnóstico concluído</div>
                {objetivo && (
                  <div style={{ background: "#f8faff", border: "1px solid #dde4f0", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: "#4a6080", marginBottom: "18px", lineHeight: 1.6 }}>
                    Com base nas informações fornecidas, e considerando seu objetivo de <strong style={{ color: navy }}>{objetivo.toLowerCase()}</strong>, identificamos o seguinte cenário:
                  </div>
                )}
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "22px", fontWeight: 700, color: navy, marginBottom: "14px", lineHeight: 1.3 }}>{diag.titulo}</h3>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: goldD, background: goldP, border: `1px solid ${goldB}`, borderRadius: "4px", padding: "4px 12px" }}>{diag.tipo}</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#1a5a30", background: "#eaf5ee", border: "1px solid #6abf8a", borderRadius: "4px", padding: "4px 12px" }}>Solução viável</span>
                </div>
              </div>
              {goldLine}
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "10px", overflow: "hidden", marginBottom: "12px" }}>
              <div style={{ background: "#f8faff", borderBottom: "1px solid #dde4f0", padding: "10px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "3px", height: "16px", background: goldB, borderRadius: "2px" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: navy, textTransform: "uppercase", letterSpacing: "2px" }}>Diagnóstico do seu caso</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {diag.resumo.map((p, i) => <p key={i} style={{ fontSize: "14px", color: "#4a6080", lineHeight: 1.75 }}>{p}</p>)}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
              <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: "#eaf5ee", borderBottom: "1px solid #c0e0c8", padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "3px", height: "16px", background: goldB, borderRadius: "2px" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#1a5a30", textTransform: "uppercase", letterSpacing: "1.5px" }}>A seu favor</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  {diag.favoraveis.map((p, i) => (
                    <div key={i} style={{ fontSize: "12px", color: "#4a6080", padding: "6px 0", borderBottom: "1px solid #f0f4f8", display: "flex", gap: "6px", lineHeight: 1.4 }}>
                      <span style={{ color: "#1a5a30", fontWeight: 700, flexShrink: 0 }}>+</span>{p}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: goldP, borderBottom: `1px solid ${goldB}50`, padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "3px", height: "16px", background: goldB, borderRadius: "2px" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: goldD, textTransform: "uppercase", letterSpacing: "1.5px" }}>Pontos de atenção</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  {diag.atencao.map((p, i) => (
                    <div key={i} style={{ fontSize: "12px", color: "#4a6080", padding: "6px 0", borderBottom: "1px solid #f0f4f8", display: "flex", gap: "6px", lineHeight: 1.4 }}>
                      <span style={{ color: gold, fontWeight: 700, flexShrink: 0 }}>!</span>{p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "10px", overflow: "hidden", marginBottom: "16px" }}>
              {goldLine}
              <div style={{ background: "#f8faff", borderBottom: "1px solid #dde4f0", padding: "16px 22px" }}>
                <h4 style={{ fontFamily: "Georgia,serif", fontSize: "19px", fontWeight: 700, color: navy, marginBottom: "4px" }}>📋 Lista de documentos</h4>
                <p style={{ fontSize: "12px", color: "#6a80a0" }}>Reúna tudo abaixo antes de nos contatar.</p>
              </div>
              <div style={{ padding: "20px 22px" }}>
                {diag.documentos.map((grupo, gi) => (
                  <div key={gi} style={{ marginBottom: gi < diag.documentos.length - 1 ? "20px" : "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <div style={{ height: "2px", width: "14px", background: goldB, borderRadius: "2px" }} />
                      <span style={{ fontSize: "11px", fontWeight: 700, color: navy, textTransform: "uppercase", letterSpacing: "1.5px" }}>{grupo.g}</span>
                    </div>
                    {grupo.i.map((item, ii) => (
                      <div key={ii} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", color: "#4a6080", padding: "8px 0", borderBottom: "1px solid #f0f4f8", lineHeight: 1.5 }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "3px", border: `1.5px solid ${goldB}`, background: goldP, flexShrink: 0, marginTop: "2px" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {goldLine}
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde4f0", borderRadius: "12px", overflow: "hidden", marginBottom: "12px", textAlign: "center" }}>
              {goldLine}
              <div style={{ padding: "32px 24px" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔒</div>
                <h4 style={{ fontFamily: "Georgia,serif", fontSize: "22px", fontWeight: 700, color: navy, marginBottom: "8px" }}>O próximo passo é com o especialista</h4>
                <div style={{ width: "40px", height: "2px", background: goldB, margin: "0 auto 14px", borderRadius: "2px" }} />
                <p style={{ fontSize: "13px", color: "#6a80a0", maxWidth: "360px", margin: "0 auto 20px", lineHeight: 1.75 }}>
                  A análise completa do caso, elaboração dos documentos e acompanhamento até o registro em cartório são realizados pelo nosso time jurídico.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
                  {["Atendimento com especialista", "Casos complexos são nossa especialidade"].map((g, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#1a5a30", fontWeight: 500 }}>
                      <span>✔</span>{g}
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/5511971327586?text=${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("click_whatsapp")}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", borderRadius: "6px", padding: "14px 28px", fontFamily: "Georgia,serif", fontSize: "17px", color: "#fff", fontWeight: 700, textDecoration: "none" }}
                >
                  💬 Falar com especialista no WhatsApp
                </a>
                <p style={{ fontSize: "11px", color: "#6a80a0", marginTop: "12px" }}>contato@panigheleantar.com.br</p>
              </div>
              {goldLine}
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}><button onClick={() => { const w = window.open('', '_blank')!; w.document.write('<html><head><title>Diagnostico Panighel e Antar</title><style>body{font-family:Georgia,serif;padding:40px;max-width:700px;margin:0 auto}h1{color:#0a1e3d;font-size:24px;margin-bottom:4px}h2{color:#0a1e3d;margin-top:24px;font-size:18px}h3{color:#0a1e3d;margin-top:20px;font-size:15px}p{line-height:1.8;color:#444}li{line-height:2;color:#444}.logo-area{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:3px solid #d4a84e;margin-bottom:24px}.sub{font-size:11px;letter-spacing:0.2em;color:#6a80a0;text-transform:uppercase}.footer{margin-top:40px;padding-top:16px;border-top:1px solid #ddd;font-size:12px;color:#888}</style></head><body><div class=logo-area><img src="https://www.panigheleantar.com.br/logo.png" style="height:60px" /><div><div style="font-family:Georgia,serif;font-size:24px;font-weight:700;color:#0a1e3d">Panighél <span style="color:#d4a84e">&</span> Antar</div><div class=sub>Sociedade de Advogados</div></div></div><p style="font-size:12px;color:#6a80a0">Sociedade de Advogados | contato@panigheleantar.com.br | (11) 97132-7586</p><h1>' + diag.titulo + '</h1><p><b>Tipo:</b> ' + diag.tipo + '</p><h2>Diagnóstico do caso</h2>' + diag.resumo.map(p => '<p>' + p + '</p>').join('') + '<h2>A seu favor</h2><ul>' + diag.favoraveis.map(p => '<li>' + p + '</li>').join('') + '</ul><h2>Pontos de atenção</h2><ul>' + diag.atencao.map(p => '<li>' + p + '</li>').join('') + '</ul><h2>Lista de documentos</h2>' + diag.documentos.map(g => '<h3>' + g.g + '</h3><ul>' + g.i.map(i => '<li>' + i + '</li>').join('') + '</ul>').join('') + '<div class=footer>Documento gerado em ' + new Date().toLocaleDateString('pt-BR') + ' | Panighél & Antar</div></body></html>'); w.document.close(); setTimeout(() => w.print(), 500); }} style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #dde4f0", background: "#f8faff", color: "#0a1e3d", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>Imprimir / Salvar PDF</button></div><button onClick={reiniciar} style={{ width: "100%", background: "#fff", border: "1px solid #dde4f0", borderRadius: "8px", padding: "12px", color: "#6a80a0", cursor: "pointer", fontSize: "13px" }}>
              ↺ Fazer novo diagnóstico
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
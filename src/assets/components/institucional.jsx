import { useState } from "react";

const pilares = [
  {
    id: "missao",
    titulo: "Missão",
    icone: "fa-solid fa-scale-balanced",
    resumo: "Excelência jurídica, pessoalidade e rigor técnico.",
    conteudo:
      "Prestar assistência jurídica de excelência, pautada na pessoalidade e no rigor técnico, assegurando que cada cliente receba orientação precisa e soluções eficazes para suas demandas, independentemente da complexidade da causa.",
  },
  {
    id: "visao",
    titulo: "Visão",
    icone: "fa-solid fa-eye",
    resumo: "Referência em advocacia estratégica e proteção de direitos.",
    conteudo:
      "Ser referência em advocacia estratégica e planejamento jurídico, consolidando o escritório pela integridade de sua atuação e pela capacidade de viabilizar o acesso à justiça e a proteção de direitos perante o Judiciário e órgãos administrativos.",
  },
  {
    id: "valores",
    titulo: "Valores",
    icone: "fa-solid fa-gavel",
    resumo: "Princípios que pautam nossa atuação ética e profissional.",
    itens: [
      "Ética",
      "Respeito",
      "Comprometimento",
      "Responsabilidade Profissional e Social",
      "Atualização Técnica",
    ],
  },
];

export function Institucional() {
  const [todosAbertos, setTodosAbertos] = useState(false);

  return (
    <section className="w-full flex justify-center items-center p-4 sm:p-6 md:p-10 min-h-screen pb-20 md:pb-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
        
        {/* Bloco Inicial: História + Espaço para Foto dos Sócios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-amber-500/30 pb-10">
          
          {/* Texto de Apresentação com Fundo Off-White Suave */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
            <h2 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Nossa História: O Encontro entre a Vocação e a Experiência
            </h2>
            <p className="bg-stone-50 text-stone-900 text-sm sm:text-base md:text-lg leading-relaxed p-5 sm:p-6 rounded-2xl border border-amber-500/40 shadow-xl font-normal">
              <strong className="text-amber-700 font-bold">A Silva RAAS & ONS Sociedade de Advogados</strong> é o resultado de uma parceria sólida, iniciada ainda na infância. Roberto e Osni compartilhavam, desde os primeiros anos escolares, o propósito comum de ingressar na advocacia — um objetivo que norteou suas trajetórias e hoje define a identidade desta banca.
            </p>
          </div>

          {/* MANTIDO ESCURO: Espaço Reservado para Foto de Perfil / Sócios */}
          <div className="lg:col-span-5 w-full h-72 sm:h-80 md:h-96 bg-black rounded-2xl border-2 border-dashed border-amber-500/50 flex flex-col items-center justify-center p-6 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-60" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-500 text-2xl">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                Espaço Reservado
              </span>
              <p className="text-gray-300 font-medium text-xs sm:text-sm max-w-xs">
                Foto de Perfil dos Sócios / Apresentação da Equipe
              </p>
            </div>
          </div>
        </div>

        {/* MANTIDO ESCURO: Destaque: Cards de Diretrizes Institucionais */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between items-center gap-4 text-center sm:text-left">
            <h3 className="text-amber-400 font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <i className="fa-solid fa-circle-info text-xs"></i>
              Diretrizes Institucionais
            </h3>

            {/* Botão de Ação */}
            <button
              onClick={() => setTodosAbertos((prev) => !prev)}
              className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-500 active:scale-95 text-black font-bold text-xs uppercase rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2 touch-manipulation"
            >
              <span>{todosAbertos ? "Ocultar Detalhes" : "Visualizar Todos"}</span>
              <span>{todosAbertos ? "▲" : "▼"}</span>
            </button>
          </div>

          {/* Grid dos Cards de Diretrizes (Preservados no Tema Escuro) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar) => (
              <div
                key={pilar.id}
                className={`rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                  todosAbertos
                    ? "bg-black border-amber-400 shadow-xl shadow-amber-500/10 scale-[1.01]"
                    : "bg-neutral-950 border-amber-500/30"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg sm:text-xl font-bold uppercase text-amber-400">
                      {pilar.titulo}
                    </h4>
                    <i className={`${pilar.icone} text-2xl text-amber-500`}></i>
                  </div>

                  <p className="text-gray-200 font-medium text-xs sm:text-sm mb-4">
                    {pilar.resumo}
                  </p>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      todosAbertos ? "max-h-72 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    {pilar.conteudo && (
                      <p className="text-gray-100 text-xs sm:text-sm leading-relaxed pt-3 border-t border-amber-500/40">
                        {pilar.conteudo}
                      </p>
                    )}

                    {pilar.itens && (
                      <ul className="text-gray-100 text-xs sm:text-sm space-y-2 pt-3 border-t border-amber-500/40 list-disc list-inside">
                        {pilar.itens.map((item, index) => (
                          <li key={index} className="text-amber-300 font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção Inferior com Fundo Claro e Texto Escuro */}
        <div className="flex flex-col gap-6">
          <h3 className="text-amber-400 font-bold uppercase text-xs sm:text-sm tracking-wider text-center sm:text-left">
            Fundamentos da Nossa Atuação
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Trajetórias */}
            <article className="text-center p-6 rounded-2xl bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-colors flex flex-col gap-3 shadow-lg">
              <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                Trajetórias que somam
              </h4>
              <p className="text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                O diferencial do nosso escritório reside na maturidade de seus sócios. Antes de consolidarem a atuação jurídica, ambos trilharam caminhos que conferem ao escritório uma visão 360º das demandas de nossos clientes.
              </p>
            </article>

            {/* Card Prática Jurídica */}
            <article className="text-center p-6 rounded-2xl bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-colors flex flex-col gap-3 shadow-lg">
              <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                A Consolidação da Prática Jurídica
              </h4>
              <p className="text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                O reencontro acadêmico e a fundação da sociedade representam a união de competências técnicas com a prática jurídica atualizada. Escolhemos o Direito como ferramenta de segurança jurídica, aplicando a seriedade e a ética que sempre pautaram nossas vidas profissionais.
              </p>
            </article>

            {/* Card Filosofia */}
            <article className="text-center md:col-span-2 p-6 sm:p-8 rounded-2xl bg-stone-50 border-2 border-amber-500/60 flex flex-col gap-3 shadow-xl">
              <h4 className="text-base sm:text-lg md:text-xl font-bold uppercase text-amber-700">
                Nossa Filosofia de Trabalho
              </h4>
              <p className="text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Entendemos que, por trás de cada processo, existe uma história de vida ou um patrimônio que merece respeito e transparência. Na nossa sociedade, o cliente encontra advogados que compreendem o valor da confiança e que utilizam sua experiência acumulada para viabilizar soluções eficazes, seja no Judiciário ou em órgãos administrativos. Unimos a precisão de quem conhece o rigor técnico com a estratégia de quem compreende as relações humanas, garantindo uma advocacia madura, ética e focada em resultados.
              </p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
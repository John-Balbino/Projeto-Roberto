import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="w-full flex justify-center items-center p-4 sm:p-6 md:p-10 min-h-screen pb-20 md:pb-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
        
        {/* Banner Hero de Alto Impacto com Foto de Fundo */}
        <div className="relative rounded-br-lg overflow-hidden border-2 border-amber-500/50 shadow-2xl min-h-[480px] sm:min-h-[520px] flex items-center p-6 sm:p-10 md:p-14 group">
          
          {/* Foto de Fundo do Banner */}
          <div className="box-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

          {/* Degradê Escuro para Garantir Leitura com Alto Contraste */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          {/* Conteúdo do Manifesto sobre a Imagem */}
          <div className="relative z-10 max-w-2xl flex flex-col gap-5 text-left">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-br-lg  bg-amber-500 animate-pulse"></span>
              Silva, Raas & Ons • Sociedade de Advogados
            </span>

            <h2 className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Manifesto Silva, Raas & Ons: Onde o Direito Encontra o Humano
            </h2>

            <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed font-normal bg-black/40 backdrop-blur-xs p-4 sm:p-5 rounded-br-lg border border-amber-500/30">
              Na <strong className="text-amber-400 font-bold">Silva, Raas & Ons Sociedade de Advogados</strong>, compreendemos que a advocacia transcende a mera aplicação de normas e procedimentos técnicos. Para nós, o Direito é, fundamentalmente, sobre pessoas. Cada processo que conduzimos e cada consulta que realizamos representam uma oportunidade de gerar impacto social positivo.
            </p>

            {/* Container do Botão com a classe button aplicada no Link */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contato"
                className="button inline-flex items-center justify-center no-underline"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Grade de Princípios e Valores (Off-White Confortável) */}
        <div className="flex flex-col gap-6">
          <h3 className="text-amber-400 font-bold uppercase text-xs sm:text-sm tracking-wider text-center sm:text-left">
            Nossos Princípios Fundamentais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Filosofia */}
            <article className="p-6 rounded-br-lg bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-all flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                  Filosofia
                </h4>
                <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-normal">
                  Nossa Filosofia de atuação está alicerçada na premissa de que o Direito deve servir como um instrumento de mudança. Não nos limitamos à resolução de conflitos; buscamos a transformação social através de uma advocacia estratégica e consciente. Acreditamos que a técnica jurídica, quando aliada a um propósito claro, possui a força necessária para romper barreiras e promover o progresso coletivo.
                </p>
              </div>
            </article>

            {/* 2. Dignidade da Pessoa Humana */}
            <article className="p-6 rounded-br-lg bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-all flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                  Dignidade da Pessoa Humana
                </h4>
                <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-normal">
                  A Dignidade da Pessoa Humana é o centro gravitacional de todas as nossas ações. Reconhecemos que, por trás de cada demanda jurídica, existe uma história de vida, uma dor a ser sanada ou uma esperança a ser protegida. Nosso compromisso inegociável é garantir que o indivíduo seja sempre respeitado em sua essência, assegurando que o sistema legal funcione como um escudo protetor de seus direitos fundamentais.
                </p>
              </div>
            </article>

            {/* 3. Isonomia e Ética */}
            <article className="p-6 rounded-br-lg bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-all flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                  Isonomia e Ética
                </h4>
                <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-normal">
                  Pautamos nossa conduta pela busca incessante da Isonomia, lutando para que a igualdade de direitos seja uma prática efetiva e não apenas um conceito teórico. Essa jornada é guiada por uma Ética rigorosa, fundamentada na integridade e na transparência. Atuamos com a clareza de que a justiça só é plena quando exercida com honestidade intelectual e respeito absoluto às instituições e aos indivíduos.
                </p>
              </div>
            </article>

            {/* 4. Responsabilidade e Confiança */}
            <article className="p-6 rounded-br-lg bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-all flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                  Responsabilidade e Confiança
                </h4>
                <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-normal">
                  Assumimos uma Responsabilidade profunda com o destino de nossos clientes. Entendemos a gravidade das questões que nos são confiadas e respondemos a elas com excelência técnica e dedicação integral. É através dessa entrega que construímos a Confiança, o elo mais precioso de nossa relação profissional. Zelamos por essa segurança mútua, sabendo que ela é a base para o sucesso de qualquer causa.
                </p>
              </div>
            </article>

            {/* 5. Amor pela Justiça */}
            <article className="p-6 rounded-br-lg bg-stone-50 border border-amber-500/50 hover:border-amber-600 transition-all flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold uppercase text-amber-700">
                  Amor pela Justiça
                </h4>
                <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-normal">
                  O Amor pela Justiça é o motor que impulsiona nosso escritório. É esse sentimento que humaniza nossa técnica e nos motiva diariamente na defesa da liberdade e dos direitos civis. Para a Silva, Raas & Ons, a advocacia não é um fardo, mas uma vocação exercida com paixão e cuidado genuíno pelo próximo, transformando o rigor da lei em um acolhimento necessário e transformador.
                </p>
              </div>
            </article>

            {/* 6. Card de Chamada para Ação */}
            <article className="p-6 rounded-br-lg bg-black border-2 border-amber-500/60 flex flex-col items-center justify-center gap-4 text-center shadow-xl">
              <div className="w-12 h-12 rounded-br-lg  bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-500 text-xl">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <p className="text-amber-400 font-bold text-sm sm:text-base">
                Silva, Raas & Ons Sociedade de Advogados
              </p>
              <p className="text-gray-300 text-xs">
                Excelência e dedicação.
              </p>
              <Link
                to="/contato"
                className="button w-full text-center no-underline"
              >
                Contato
              </Link>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
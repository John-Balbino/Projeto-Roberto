import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../img/area-civil.jpg";
import img2 from "../img/area-médica.jpg";
import img3 from "../img/area-trabalhista.jpg";
import img4 from "../img/area-previdencia.jpg";

const areas = [
  {
    id: "civil",
    title: "Civil",
    icon: "fa-solid fa-city",
    image: img1,
    description:
      "Atuação na proteção e defesa de direitos em questões de relações patrimoniais e pessoais. Abrange discussões envolvendo contratos, responsabilidade civil, direito imobiliário, sucessões, família e inventários, com foco na busca por soluções que preservem os interesses dos clientes por meio de vias administrativas ou judiciais.",
  },
  {
    id: "medico",
    title: "Direito Médico",
    icon: "fa-solid fa-kit-medical",
    image: img2,
    description:
      "Assessoria voltada a questões envolvendo a relação entre profissionais de saúde, estabelecimentos hospitalares e pacientes. A atuação compreende a análise de casos de responsabilidade médica e hospitalar, discussões sobre erro profissional, além de orientação preventiva a clínicas e profissionais quanto aos aspectos jurídicos da prática da medicina.",
  },
  {
    id: "trabalhista",
    title: "Trabalhista",
    icon: "fa-solid fa-briefcase",
    image: img3,
    description:
      "Defesa de direitos e interesses nas relações de trabalho, tanto na perspectiva do empregado quanto do empregador. A atuação inclui reclamações trabalhistas, rescisões contratuais, verbas e direitos laborais, acordos e negociações, bem como consultoria preventiva para empresas em matéria de conformidade trabalhista.",
  },
  {
    id: "previdenciario",
    title: "Previdenciário",
    icon: "fa-solid fa-people-group",
    image: img4,
    description:
      "Orientação e representação em demandas junto ao INSS e ao Poder Judiciário, com dedicação especial ao planejamento previdenciário. A atuação compreende análise de regimes de previdência, revisões de benefícios, concessões, planejamento de aposentadoria e questões relacionadas à comprovação de tempo de contribuição e condições especiais de trabalho.",
  },
];

export function Area() {
  const [activeArea, setActiveArea] = useState(null);

  const toggleArea = (id) => {
    setActiveArea((prev) => (prev === id ? null : id));
  };

  const selectedAreaObj = areas.find((item) => item.id === activeArea);

  return (
    <section className="w-full flex justify-center items-center p-4 sm:p-6 md:p-10 min-h-screen pb-20 md:pb-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col gap-2 text-center sm:text-left border-b border-amber-500/30 pb-4">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Especialidades Jurídicas
          </span>
          <h2 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl">
            Áreas de Atuação
          </h2>
          <p className="text-black text-xs sm:text-sm max-w-2xl">
            Clique em uma das áreas abaixo para visualizar os detalhes da nossa atuação especializada.
          </p>
        </div>

        {/* Grid de Cards Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => {
            const isOpen = activeArea === area.id;

            return (
              <div key={area.id} className="flex flex-col gap-3">
                {/* Card da Área com Encaixe de Imagem Otimizado */}
                <div
                  onClick={() => toggleArea(area.id)}
                  aria-expanded={isOpen}
                  className={`relative group cursor-pointer aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-2xl bg-neutral-900 select-none ${
                    isOpen
                      ? "border-amber-400 ring-4 ring-amber-500/30 scale-[1.02]"
                      : "border-amber-500/40 hover:border-amber-400 hover:scale-[1.01]"
                  }`}
                >
                  {/* Imagem de Fundo com Encaixe Ajustado */}
                  <img
                    src={area.image}
                    alt={area.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Degradê Suave para Não Ofuscar a Foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent group-hover:via-black/20 transition-colors duration-500" />

                  {/* Informações do Rodapé do Card */}
                  <div className="absolute inset-0 p-3.5 sm:p-4 flex flex-col justify-end">
                    <div className="flex justify-between items-center bg-black/85 backdrop-blur-md p-3 rounded-xl border border-amber-500/50 shadow-lg">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <i className={`${area.icon} text-amber-400 text-base shrink-0`}></i>
                        <h3 className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wide truncate">
                          {area.title}
                        </h3>
                      </div>

                      <span className="text-amber-400 text-xs font-bold ml-2 shrink-0">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* VISÃO MOBILE/TABLET: Painel de Texto Inline */}
                {isOpen && (
                  <div className="lg:hidden p-5 rounded-2xl bg-stone-50 border-2 border-amber-500 text-stone-900 shadow-2xl animate-fadeIn flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 border-b border-amber-500/30 pb-2">
                      <i className={`${area.icon} text-amber-700 text-lg`}></i>
                      <h4 className="text-amber-800 font-bold text-sm uppercase">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-stone-900 text-xs leading-relaxed font-normal">
                      {area.description}
                    </p>
                    <Link
                      to="/contato"
                      className="button w-full text-center text-xs py-2.5 mt-1 no-underline"
                    >
                      Consultar Atendimento
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* VISÃO DESKTOP: Painel de Texto Expandido */}
        {selectedAreaObj && (
          <div className="hidden lg:flex flex-col gap-4 p-8 rounded-2xl bg-stone-50 border-2 border-amber-500/60 shadow-2xl animate-fadeIn text-stone-900">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-700 text-xl">
                  <i className={selectedAreaObj.icon}></i>
                </div>
                <h3 className="text-amber-800 text-xl font-bold uppercase tracking-wide">
                  {selectedAreaObj.title}
                </h3>
              </div>
              <Link
                to="/contato"
                className="button text-xs py-2.5 px-6 no-underline"
              >
                Falar com Especialista
              </Link>
            </div>
            <p className="text-stone-900 text-base leading-relaxed font-normal">
              {selectedAreaObj.description}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
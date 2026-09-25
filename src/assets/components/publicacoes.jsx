import { useState } from "react";
import imgCivil from "../img/area-civil.jpg";
import imgMedico from "../img/area-médica.jpg";
import imgTrabalhista from "../img/area-trabalhista.jpg";
import imgPrevidencia from "../img/area-previdencia.jpg";

const noticias = [
  {
    id: 1,
    categoria: "Civil",
    data: "24 Set, 2026",
    titulo: "Novas diretrizes para contratos imobiliários e segurança jurídica",
    resumo: "Entenda as principais mudanças na legislação imobiliária e como elas impactam compradores, vendedores e contratos de locação.",
    conteudo: "As recentes atualizações nas normas de contratos imobiliários trouxeram mudanças significativas para o mercado. Com foco na segurança jurídica e na transparência das negociações, o novo entendimento prevê prazos mais rígidos para rescisões e novas regras para garantias locatícias. É fundamental que tanto compradores quanto vendedores fiquem atentos às cláusulas sobre multas e reajustes contratuais.",
    imagem: imgCivil,
    destaque: true,
  },
  {
    id: 2,
    categoria: "Direito Médico",
    data: "18 Set, 2026",
    titulo: "Responsabilidade civil e o uso de inteligência artificial na medicina",
    resumo: "Como a justiça tem interpretado diagnósticos e pareceres auxiliados por ferramentas automatizadas de IA.",
    conteudo: "A inteligência artificial tem revolucionado a medicina, mas também impõe novos desafios éticos e jurídicos. Em casos de erros diagnósticos ou falhas em procedimentos que utilizaram sistemas automatizados, a responsabilidade jurídica continua recaindo sobre o profissional de saúde e a instituição hospitalar. A documentação adequada do consentimento informado do paciente torna-se indispensável.",
    imagem: imgMedico,
    destaque: false,
  },
  {
    id: 3,
    categoria: "Trabalhista",
    data: "10 Set, 2026",
    titulo: "Trabalho remoto e auxílio home office: O que diz a jurisprudência?",
    resumo: "Diretrizes sobre teletrabalho, ajuda de custo para equipamentos e controle de jornada de trabalho.",
    conteudo: "Com a consolidação do modelo de trabalho híbrido e home office, a jurisprudência trabalhista pacificou entendimentos sobre a obrigatoriedade do ressarcimento de despesas operacionais pelo empregador e os limites do controle de ponto à distância. Empresas e colaboradores precisam adequar seus contratos de trabalho para evitar passivos desnecessários.",
    imagem: imgTrabalhista,
    destaque: false,
  },
  {
    id: 4,
    categoria: "Previdenciário",
    data: "02 Set, 2026",
    titulo: "Planejamento Previdenciário: Por que realizar a análise antecipada?",
    resumo: "Saiba como o estudo preventivo de contribuições ao INSS garante a escolha da melhor regra de aposentadoria.",
    conteudo: "O planejamento previdenciário é um estudo minucioso que analisa todo o histórico de contribuições junto ao INSS. Realizar essa análise previamente evita indeferimentos e garante o enquadramento na regra de transição mais vantajosa para o segurado, calculando o valor exato do benefício antes mesmo do pedido formal.",
    imagem: imgPrevidencia,
    destaque: false,
  },
];

export function Publicacoes() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [noticiaAberta, setNoticiaAberta] = useState(null);

  const categorias = ["Todas", ...new Set(noticias.map((n) => n.categoria))];

  const noticiasFiltradas =
    categoriaAtiva === "Todas"
      ? noticias
      : noticias.filter((n) => n.categoria === categoriaAtiva);

  const destaque = noticiasFiltradas.find((n) => n.destaque) || noticiasFiltradas[0];
  const secundarias = noticiasFiltradas.filter((n) => n.id !== destaque?.id);

  return (
    <section className="flex flex-col p-4 md:p-8 min-h-screen gap-8 max-w-7xl mx-auto pb-20 md:pb-10">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-700/50 pb-4 gap-4">
        <div>
          <span className="text-amber-500 text-xs uppercase tracking-widest font-semibold">
            Informativo Jurídico
          </span>
          <h2 className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
            Publicações & Artigos
          </h2>
        </div>

        {/* Filtros por Categorias */}
        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                categoriaAtiva === cat
                  ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700 border border-amber-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grade Principal de Notícias */}
      {destaque && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Notícia Destaque Principal (Hero - 7 Colunas no Desktop) */}
          <article
            onClick={() => setNoticiaAberta(destaque)}
            className="lg:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden border border-amber-700/40 bg-gray-900/40 flex flex-col justify-end min-h-[420px] transition-all duration-300 hover:border-amber-500/50 shadow-xl"
          >
            <img
              src={destaque.imagem}
              alt={destaque.titulo}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative p-6 md:p-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500 text-black font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                  {destaque.categoria}
                </span>
                <span className="text-gray-400 text-xs">{destaque.data}</span>
              </div>

              <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-amber-400 transition-colors">
                {destaque.titulo}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-2">
                {destaque.resumo}
              </p>

              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold pt-2">
                Ler matéria completa <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>

          {/* Lista Secundária de Notícias (5 Colunas no Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {secundarias.slice(0, 3).map((noticia) => (
              <article
                key={noticia.id}
                onClick={() => setNoticiaAberta(noticia)}
                className="group cursor-pointer flex gap-4 p-3 rounded-xl border border-gray-700/30 bg-black hover:bg-gray-800/40 hover:border-amber-500/40 transition-all duration-200"
              >
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover flex-shrink-0 border border-amber-500"
                />
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-500 text-[11px] font-semibold">
                        {noticia.categoria}
                      </span>
                      <span className="text-gray-500 text-[10px]">• {noticia.data}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {noticia.titulo}
                    </h4>
                  </div>
                  <span className="text-xs text-white flex items-center gap-1">
                    Leia mais <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* MODAL / LEITOR DE NOTÍCIA COMPLETA */}
      {noticiaAberta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Imagem do Cabeçalho do Modal */}
            <div className="relative h-60 w-full flex-shrink-0">
              <img
                src={noticiaAberta.imagem}
                alt={noticiaAberta.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <button
                onClick={() => setNoticiaAberta(null)}
                className="absolute top-4 right-4 bg-black/60 text-white hover:text-amber-500 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Texto */}
            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500/20 text-amber-500 border border-amber-500/30 font-semibold text-xs px-2.5 py-1 rounded">
                  {noticiaAberta.categoria}
                </span>
                <span className="text-gray-400 text-xs">{noticiaAberta.data}</span>
              </div>

              <h3 className="text-white font-bold text-xl md:text-2xl">
                {noticiaAberta.titulo}
              </h3>

              <p className="text-amber-500/90 italic text-sm border-l-2 border-amber-500 pl-3">
                {noticiaAberta.resumo}
              </p>

              <hr className="border-gray-800 my-1" />

              <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3">
                <p>{noticiaAberta.conteudo}</p>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 border-t border-gray-800 flex justify-end bg-gray-950/50">
              <button
                onClick={() => setNoticiaAberta(null)}
                className="px-4 py-2 bg-amber-500 text-black font-bold text-xs uppercase rounded-lg hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
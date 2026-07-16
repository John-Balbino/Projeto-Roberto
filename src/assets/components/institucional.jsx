export function Institucional() {
  return (
    <section className="flex flex-col gap-8 ">
      <div>
        <div className="flex flex-col gap-2 inst-intro ">
          <h2 className=" p-4 w-95 md:w-125 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px] md:text-[25px]">
            Nossa História: O Encontro entre a Vocação e a Experiência
          </h2>
          <p className="text-[16px] md:text-[20px] w-100  md:w-145 p-4 ">
            <b>A Silva RAAS & ONS Sociedade de Advogados</b> é o resultado de
            uma parceria sólida, iniciada ainda na infância. Roberto e Osni
            compartilhavam, desde os primeiros anos escolares, o propósito comum
            de ingressar na advocacia — um objetivo que norteou suas trajetórias
            e hoje define a identidade desta banca.
          </p>
          <div className="box-img hidden md:block "></div>
        </div>
      </div>

      <article className="flex flex-col md:grid md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col gap-2 p-2 md:h-100  md:w-full">
          <h3 className="w-full p-2 uppercase  bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]
           border border-amber-900/50 rounded-br-lg ">
            Trajetórias que somam
          </h3>
          <p className="text-[16px] md:text-[20px] w-full ">
            O diferencial do nosso escritório reside na maturidade de seus
            sócios. Antes de consolidarem a atuação jurídica, ambos trilharam
            caminhos que conferem ao escritório uma visão 360º das demandas de
            nossos clientes:
          </p>
        </div>

        <div className="flex flex-col gap-2 p-2 md:h-100  ">
          <h3 className="w-full p-2 uppercase  bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]
           border border-amber-900/50 rounded-br-lg ">
            A Consolidação da Prática Jurídica
          </h3>
          <p className="text-[16px] md:text-[20px] w-full">
            O reencontro acadêmico e a fundação da sociedade representam a união
            de competências técnicas com a prática jurídica atualizada.
            Escolhemos o Direito como ferramenta de segurança jurídica,
            aplicando a seriedade e a ética que sempre pautaram nossas vidas
            profissionais.
          </p>
        </div>
        <div className="flex flex-col gap-2  p-2 md:h-full  ">
          <h3 className="w-full p-2 uppercase  bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]
           border border-amber-900/50 rounded-br-lg ">
            Nossa Filosofia de Trabalho
          </h3>
          <p className="text-[16px] md:text-[20px] w-full">
            Entendemos que, por trás de cada processo, existe uma história de
            vida ou um patrimônio que merece respeito e transparência. Na nossa
            sociedade, o cliente encontra advogados que compreendem o valor da
            confiança e que utilizam sua experiência acumulada para viabilizar
            soluções eficazes, seja no Judiciário ou em órgãos administrativos.
            Unimos a precisão de quem conhece o rigor técnico com a estratégia
            de quem compreende as relações humanas, garantindo uma advocacia
            madura, ética e focada em resultados.
          </p>
        </div>
      </article>

      <div className="flex flex-col md:grid md:grid-cols-3 p-6 gap-6 w-full h-full">
        <div className="bg-linear-to-b from-black via-black to-white   text-amber-500 rounded-xl ">
          <div className="flex justify-between items-center overflow-hidden">
            <h3 className="text-[24px] uppercase font-bold p-2">Missão</h3>
            <i className="fa-solid fa-scale-balanced p-2 opacity-70 text-[40px] leading-none truncate"></i>
          </div>

          <div className="bg-white rounded-xl">
            <p className="p-2 text-[20px] text-black border rounded-xl">
              Prestar assistência jurídica de excelência, pautada na
              pessoalidade e no rigor técnico, assegurando que cada cliente
              receba orientação precisa e soluções eficazes para suas demandas,
              independentemente da complexidade da causa.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-black via-black to-white text-amber-500 rounded-xl ">
          <div className="flex justify-between items-center overflow-hidden">
            <h3 className="text-[24px] uppercase font-bold p-2">Visão</h3>
            <i className="fa-solid fa-eye card-icons p-2 opacity-70 text-[40px] leading-none truncate"></i>
          </div>

          <div className="bg-white rounded-xl">
            <p className="p-2 text-[20px] text-black border rounded-xl">
              Ser referência em advocacia estratégica e planejamento jurídico,
              consolidando o escritório pela integridade de sua atuação e pela
              capacidade de viabilizar o acesso à justiça e a proteção de
              direitos perante o Judiciário e órgãos administrativos.
            </p>
          </div>
        </div>

        <div className="bg-black md:bg-linear-to-b from-black via-gray-300 to-white text-amber-500 rounded-xl ">
          <div className="flex justify-between items-center overflow-hidden">
            <h3 className="text-[24px] uppercase font-bold p-2">Valores</h3>
            <i className="fa-solid fa-gavel card-iconsp-2 opacity-70 text-[40px] leading-none truncate "></i>
          </div>

          <div className="bg-white rounded-xl ">
            <ul className="p-2  text-[20px] text-black list-disc list-inside border rounded-xl">
              <li>Ética</li>
              <li>Respeito</li>
              <li>Comprometimento</li>
              <li>Responsabilidade Profissional e Social</li>
              <li>Atualização Técnica</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}

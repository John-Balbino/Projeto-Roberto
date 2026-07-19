import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="flex flex-col p-2 md:p-0 gap-5 justify-between w-full">
      <div className="flex flex-col gap-2 relative home-intro ">
        <h2 className="p-4 w-full md:w-125 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]">
          Manifesto Silva, Raas & Ons: Onde o Direito Encontra o Humano
        </h2>
        <p className="text-[16px] w-full md:w-100 p-4 ">
          Na Silva, Raas & Ons Sociedade de Advogados, compreendemos que a
          advocacia transcende a mera aplicação de normas e procedimentos
          técnicos. Para nós, o Direito é, fundamentalmente, sobre pessoas. Cada
          processo que conduzimos e cada consulta que realizamos representam uma
          oportunidade de gerar impacto social positivo, reafirmando nosso papel
          como agentes ativos na construção de uma sociedade mais justa e
          equilibrada.
        </p>
        <div className="box-img hidden md:block"></div>
      </div>

      <article className="flex flex-col md:grid md:grid-cols-3 gap-5 p-2 md:p-4 ">
        <div className="flex flex-col gap-2 border-amber-900/50 rounded-br-lg border-2 p-2 ">
          <h3
            className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]
            shadow-2xl"
          >
            Filosofia
          </h3>
          <p>
            Nossa Filosofia de atuação está alicerçada na premissa de que o
            Direito deve servir como um instrumento de mudança. Não nos
            limitamos à resolução de conflitos; buscamos a transformação social
            através de uma advocacia estratégica e consciente. Acreditamos que a
            técnica jurídica, quando aliada a um propósito claro, possui a força
            necessária para romper barreiras e promover o progresso coletivo.
          </p>
        </div>
        <div className="flex flex-col gap-2  border-amber-900/50 rounded-br-lg border-2 p-2">
          <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]">
            Dignidade da Pessoa Humana
          </h3>
          <p>
            A Dignidade da Pessoa Humana é o centro gravitacional de todas as
            nossas ações. Reconhecemos que, por trás de cada demanda jurídica,
            existe uma história de vida, uma dor a ser sanada ou uma esperança a
            ser protegida. Nosso compromisso inegociável é garantir que o
            indivíduo seja sempre respeitado em sua essência, assegurando que o
            sistema legal funcione como um escudo protetor de seus direitos
            fundamentais.
          </p>
        </div>
        <div className="flex flex-col gap-2  border-amber-900/50 rounded-br-lg border-2 p-2">
          <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]">
            Isonomia e Ética
          </h3>
          <p>
            Pautamos nossa conduta pela busca incessante da Isonomia, lutando
            para que a igualdade de direitos seja uma prática efetiva e não
            apenas um conceito teórico. Essa jornada é guiada por uma Ética
            rigorosa, fundamentada na integridade e na transparência. Atuamos
            com a clareza de que a justiça só é plena quando exercida com
            honestidade intelectual e respeito absoluto às instituições e aos
            indivíduos.
          </p>
        </div>
        <div className="flex flex-col gap-2  border-amber-900/50 rounded-br-lg border-2 p-2">
          <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]">
            Responsabilidade e Confiança
          </h3>
          <p>
            Assumimos uma Responsabilidade profunda com o destino de nossos
            clientes. Entendemos a gravidade das questões que nos são confiadas
            e respondemos a elas com excelência técnica e dedicação integral. É
            através dessa entrega que construímos a Confiança, o elo mais
            precioso de nossa relação profissional. Zelamos por essa segurança
            mútua, sabendo que ela é a base para o sucesso de qualquer causa.
          </p>
        </div>
        <div className="flex flex-col gap-2  border-amber-900/50 rounded-br-lg border-2 p-2">
          <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px]">
            Amor pela Justiça
          </h3>
          <p>
            O Amor pela Justiça é o motor que impulsiona nosso escritório. É
            esse sentimento que humaniza nossa técnica e nos motiva diariamente
            na defesa da liberdade e dos direitos civis. Para a Silva, Raas &
            Ons, a advocacia não é um fardo, mas uma vocação exercida com paixão
            e cuidado genuíno pelo próximo, transformando o rigor da lei em um
            acolhimento necessário e transformador.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-center font-bold ">
            Silva, Raas & Ons Sociedade de Advogados
          </p>
          <button
            className="button"
          ><Link to="/contato">Contato</Link>
            
          </button>
        </div>
      </article>
    </section>
  );
}

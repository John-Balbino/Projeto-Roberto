import imgNoticia from "../../assets/img/foto-noticia.jpg";

export function Publicacoes() {
  return (
    <section className="flex flex-col gap-4 justify-between min-h-screen">
      <h2 className="p-2 w-95 md:w-125 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800 bg-clip-text text-transparent font-bold text-[20px] md:text-[25px]">
        Publicações
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 p-4">
        <div className="flex border border-black rounded-2xl md:w-full md:h-100 overflow-hidden">
          {/* Conteúdo ocupa metade */}
          <div className="flex flex-col gap-4 p-4 flex-1">
            <h3 className="uppercase font-bold">Noticia</h3>
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              autem ullam labore modi perferendis, ex ut voluptate et
              reprehenderit ipsum, cumque iste magni. Officiis exercitationem eos
              incidunt eaque quia minima.
            </p>
            <a href="">
              <button className="button">Saiba mais</button>
            </a>
          </div>

          {/* Imagem ocupa metade */}
          <div className="flex-1">
            <img
              src={imgNoticia}
              alt="imagem da noticia"
              className="w-full h-full object-cover rounded-2xl shape"
            />
          </div>
        </div>
        <div className="flex border border-black rounded-2xl md:w-full md:h-100 overflow-hidden">
          {/* Conteúdo ocupa metade */}
          <div className="flex flex-col gap-4 p-4 flex-1">
            <h3 className="uppercase font-bold">Noticia</h3>
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              autem ullam labore modi perferendis, ex ut voluptate et
              reprehenderit ipsum, cumque iste magni. Officiis exercitationem eos
              incidunt eaque quia minima.
            </p>
            <a href="">
              <button className="button">Saiba mais</button>
            </a>
          </div>

          {/* Imagem ocupa metade */}
          <div className="flex-1">
            <img
              src={imgNoticia}
              alt="imagem da noticia"
              className="w-full h-full object-cover rounded-2xl shape"
            />
          </div>
        </div>
        <div className="flex border border-black rounded-2xl md:w-full md:h-100 overflow-hidden">
          {/* Conteúdo ocupa metade */}
          <div className="flex flex-col gap-4 p-4 flex-1">
            <h3 className="uppercase font-bold">Noticia</h3>
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              autem ullam labore modi perferendis, ex ut voluptate et
              reprehenderit ipsum, cumque iste magni. Officiis exercitationem eos
              incidunt eaque quia minima.
            </p>
            <a href="">
              <button className="button">Saiba mais</button>
            </a>
          </div>

          {/* Imagem ocupa metade */}
          <div className="flex-1">
            <img
              src={imgNoticia}
              alt="imagem da noticia"
              className="w-full h-full object-cover rounded-2xl shape"
            />
          </div>
        </div>
        <div className="flex border border-black rounded-2xl md:w-full md:h-100 overflow-hidden">
          {/* Conteúdo ocupa metade */}
          <div className="flex flex-col gap-4 p-4 flex-1">
            <h3 className="uppercase font-bold">Noticia</h3>
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              autem ullam labore modi perferendis, ex ut voluptate et
              reprehenderit ipsum, cumque iste magni. Officiis exercitationem eos
              incidunt eaque quia minima.
            </p>
            <a href="">
              <button className="button">Saiba mais</button>
            </a>
          </div>

          {/* Imagem ocupa metade */}
          <div className="flex-1">
            <img
              src={imgNoticia}
              alt="imagem da noticia"
              className="w-full h-full object-cover rounded-2xl shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

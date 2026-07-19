import { useState } from "react";
import imgNoticia from "../../assets/img/foto-noticia.jpg";

const noticias = [
  { id: 1, titulo: "Notícia 1", conteudo: "Em breve", imagem: imgNoticia },
  { id: 2, titulo: "Notícia 2", conteudo: "Em breve", imagem: imgNoticia },
  { id: 3, titulo: "Notícia 3", conteudo: "Em breve", imagem: imgNoticia },
];

export function Publicacoes() {
  const [selecionada, setSelecionada] = useState(noticias[0]);
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <section className="flex min-h-screen relative">
      {/* Botão para abrir/fechar menu no mobile */}
      <button
        className="absolute top-0 right-0 md:hidden bg-amber-500 text-white px-3 py-2 rounded"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? "Fechar" : "Menu"}
      </button>

      {/* Menu lateral */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-2/3 md:w-35 bg-white border-r border-gray-300 p-4 transform transition-transform duration-300 ease-in-out
        ${menuAberto ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="font-bold text-[18px] md:text-lg mb-4">Publicações</h2>
        <ul className="flex flex-col gap-2">
          {noticias.map((noticia) => (
            <li
              key={noticia.id}
              className={`cursor-pointer p-2 rounded uppercase border-b border-gray-300 ${
                selecionada.id === noticia.id
                  ? "bg-amber-500 font-bold"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelecionada(noticia);
                setMenuAberto(false); // fecha menu ao clicar
              }}
            >
              {noticia.titulo}
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo da notícia selecionada */}
      <main className="flex-1 p-6 md:ml-0 ml-0">
        <h3 className="uppercase font-bold mb-4">{selecionada.titulo}</h3>
        <p className="mb-4">{selecionada.conteudo}</p>
        <img
          src={selecionada.imagem}
          alt={`Imagem de ${selecionada.titulo}`}
          className="w-80 h-80 object-center rounded-xl"
        />
      </main>
      
    </section>
  );
}

export function Contato() {
  return (
    <section className="flex flex-col min-h-screen ">
      {/* Formulário de contato */}
      <div className="p-4 flex flex-col gap-3">
        <div className=" flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-4 bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent ">
            Contato
          </h2>
          <div className="flex flex-col gap-5">
            <p>Canais de Atendimento abaixo :</p>
            <div className="flex gap-4 items-center">
              <a href="https://wa.me/5511961324380">
                <i className="fa-solid fa-phone text-amber-500 p-2 text-[30px] pointer hover:scale-110 hover:text-green-900 transition-all durantion-1000 "></i>
              </a>
              <p>+55 (11) 96132-4380</p>
            </div>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-envelope  text-amber-500 p-2 text-[30px] pointer hover:scale-110 hover:text-red-800 transition-all durantion-1000 "></i>
              <p>5cF4o@example.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col p-5 
        gap-4 border border-gray-500/50 "
        >
          <input
            className="bg-gray-300 p-2 rounded-2xl"
            type="text"
            name="nome"
            placeholder="Nome"
            required
          />

          <input
            className="bg-gray-300 p-2 rounded-2xl"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />

          <input
            className="bg-gray-300 p-2 rounded-2xl"
            type="tel"
            name="telefone"
            placeholder="Telefone"
          />

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows="5"
            required
            className="bg-gray-300 p-2 rounded-2xl"
          ></textarea>

          <button className="button self-end " type="submit">
            Enviar
          </button>
        </form>
      </div>
      {/* Endereço */}
      <div className="flex flex-col p-4 gap-6">
        <h2 className="text-2xl font-bold mb-4 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent">
          Endereço
        </h2>
        <div className="flex flex-col items-center gap-3">
          <p>Av. Ipanema, 382, sala 1 - São Paulo, SP</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8196512365816!2d-46.7089068!3d-23.682406699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502cca066dc1%3A0xfb62d1d568a122bd!2sAv.%20Ipanema%2C%20382%20-%20Veleiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004773-010!5e0!3m2!1spt-BR!2sbr!4v1783804052731!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen=""
            
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-2xl pointer w-full h-full md:w-100 md:h-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

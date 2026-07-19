export function Contato() {
  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const mensagem = e.target.mensagem.value;

    const texto = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
    const url = `https://wa.me/5511961324380?text=${texto}`;

    window.open(url, "_blank");
  };

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
              <p>silvaraasons.adv@gmail.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={enviarWhatsApp}
          className="flex flex-col gap-4 border border-amber-600 p-4"
        >
          <input
            className="bg-gray-300 p-2 rounded-xl hover:pointer"
            type="text"
            name="nome"
            placeholder="Nome"
            required
          />
          <input
            className="bg-gray-300 p-2 rounded-xl hover:pointer"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            className="bg-gray-300 p-2 rounded-xl hover:pointer"
            type="tel"
            name="telefone"
            placeholder="Telefone"
          />
          <textarea
            className="bg-gray-300 p-2 rounded-xl hover:pointer"
            name="mensagem"
            placeholder="Mensagem"
            required
          ></textarea>
          <button type="submit" className="button">
            Enviar via WhatsApp
          </button>
        </form>
      </div>
      {/* Endereço */}
      <div className="flex flex-col p-4 gap-6">
        <h2 className="text-2xl font-bold mb-4 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent">
          Endereço
        </h2>
        <div className="flex flex-col items-center gap-3">
          <p>Av. Ipanema, 382 - Sl 01 - Veleiros, São Paulo - SP</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.816933699101!2d-46.70879187177243!3d-23.68250385798539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51949f7c9deb%3A0x913932600dcfd9e!2sEscritorio%20de%20advocacia%20ROBERTO%20ARA%C3%9AJO%20ALVES%20DA%20SILVA%20%26%20OSNI%20NASCIMENTO%20DA%20SILVA%20SOCIEDADE%20DE%20ADVOGADOS.!5e0!3m2!1spt-BR!2sbr!4v1784213621533!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            className="rounded-2xl pointer w-full h-full md:w-100 md:h-100"
          ></iframe>
        </div>
      </div>
      {/*footer mobile*/}
       <div className="flex-col gap-2 text-[12px] items-start w-full bg-black text-white/70  p-4 md:hidden flex">
        <p className=""> © 2026 SILVA RAAS & ONS – Todos os direitos reservados.</p>
        <p className="">Site Desenvolvido por <a href="https://john-balbino.github.io/Portif-lio-3.0-react/" target="_blank" className="font-bold">John Balbino</a></p>
      </div>
    </section>
  );
}

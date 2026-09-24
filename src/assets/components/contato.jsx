export function Contato() {
  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const mensagem = e.target.mensagem.value;

    const texto = `Olá! Gostaria de um atendimento via site.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem}`;
    const url = `https://wa.me/5511961324380?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full flex justify-center items-center p-4 sm:p-6 md:p-10 min-h-screen text-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
        
        {/* Cabeçalho da Página */}
        <div className="flex flex-col gap-3 text-center sm:text-left border-b border-amber-500/30 pb-6">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Atendimento Personalizado
          </span>
          <h2 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl">
            Estamos prontos para atende-lo com agilidade e sigilo. Escolha o canal de sua preferência ou envie uma mensagem direta abaixo.
          </p>
        </div>

        {/* Seção Principal: Canais de Atendimento + Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card de Canais de Atendimento (Esquerda) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-black p-6 sm:p-8 rounded-2xl border border-amber-500/40 shadow-xl flex flex-col gap-6">
              <h3 className="text-lg sm:text-xl font-bold text-amber-400 uppercase tracking-wide border-b border-amber-500/20 pb-3">
                Canais de Atendimento
              </h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511961324380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-xl bg-neutral-950 border border-amber-500/20 hover:border-amber-400 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-semibold">
                    WhatsApp / Telefone
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                    +55 (11) 96132-4380
                  </span>
                </div>
              </a>

              {/* E-mail (Abre direto no Gmail) */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=advogados@silvaraaseons.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-xl bg-neutral-950 border border-amber-500/20 hover:border-amber-400 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-gray-400 uppercase font-semibold">
                    E-mail Corporativo
                  </span>
                  <span className="text-white font-bold text-xs sm:text-sm truncate group-hover:text-amber-400 transition-colors">
                    advogados@silvaraaseons.com.br
                  </span>
                </div>
              </a>

              {/* Horário */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-950 border border-amber-500/20">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-semibold">
                    Horário de Funcionamento
                  </span>
                  <span className="text-white font-bold text-xs sm:text-sm">
                    Segunda a Sexta: 08h às 18h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato (Direita) */}
          <div className="lg:col-span-7 bg-stone-50 text-stone-900 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/50 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-700 uppercase tracking-wide mb-2">
              Envie uma Mensagem
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm mb-6">
              Preencha os campos abaixo. Ao clicar em enviar, você será direcionado para o nosso WhatsApp com a mensagem formatada.
            </p>

            <form onSubmit={enviarWhatsApp} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-stone-700">
                  Nome Completo *
                </label>
                <input
                  className="bg-white text-stone-900 p-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase text-stone-700">
                    E-mail *
                  </label>
                  <input
                    className="bg-white text-stone-900 p-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                    type="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase text-stone-700">
                    Telefone / WhatsApp
                  </label>
                  <input
                    className="bg-white text-stone-900 p-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                    type="tel"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-stone-700">
                  Mensagem / Resumo da Causa *
                </label>
                <textarea
                  className="bg-white text-stone-900 p-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm min-h-[120px] resize-y"
                  name="mensagem"
                  placeholder="Descreva brevemente como podemos ajudá-lo(a)..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="button w-full mt-2 text-center cursor-pointer no-underline"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-base"></i>
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Seção de Endereço e Mapa */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h3 className="text-amber-400 font-bold uppercase text-xs sm:text-sm tracking-wider">
              Nossa Localização
            </h3>
            <p className="text-black text-sm sm:text-base font-medium flex items-center justify-center sm:justify-start gap-2">
              <i className="fa-solid fa-location-dot text-amber-500"></i>
              Av. Ipanema, 382 - Sl 01 - Veleiros, São Paulo - SP
            </p>
          </div>

          <div className="w-full h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.816933699101!2d-46.70879187177243!3d-23.68250385798539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51949f7c9deb%3A0x913932600dcfd9e!2sEscritorio%20de%20advocacia%20ROBERTO%20ARA%C3%9AJO%20ALVES%20DA%20SILVA%20%26%20OSNI%20NASCIMENTO%20DA%20SILVA%20SOCIEDADE%20DE%20ADVOGADOS.!5e0!3m2!1spt-BR!2sbr!4v1784213621533!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mapa de Localização do Escritório"
            ></iframe>
          </div>
        </div>

        {/* Rodapé Mobile */}
        <div className="flex flex-col md:hidden sm:flex-row justify-between items-center gap-2 text-[11px] sm:text-xs text-gray-400 border-t border-amber-500/20 pt-6 text-center">
          <p>© 2026 SILVA RAAS & ONS – Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://john-balbino.github.io/Portif-lio-3.0-react/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:underline"
            >
              John Balbino
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
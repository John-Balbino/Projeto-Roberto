import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const isContatoPage = location.pathname === "/contato";

  return (
    <footer
      className={`w-full bg-black/95 text-gray-300 border-t border-amber-500/30 pt-10 px-6 sm:px-10 md:px-16 ${
        isContatoPage ? "block pb-20 md:pb-6" : "hidden md:block pb-6"
      }`}
    >
      <div className="w-full flex flex-col gap-8">
        
        {/* Bloco Superior: Marca e Canais de Contato */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-amber-500/15">
          
          {/* Lado Esquerdo: Identificação do Escritório */}
          <div className="md:col-span-6 flex flex-col gap-2 text-center md:text-left">
            <h3 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold text-lg sm:text-xl tracking-wide">
              SILVA RAAS & ONS
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              Sociedade de Advogados • <span className="text-amber-500 font-medium">OAB/SP 67.322</span>
            </p>
            <p className="text-xs text-gray-400 max-w-lg hidden sm:block">
              Compromisso com a ética, excelência técnica e atendimento humanizado em todas as áreas do Direito.
            </p>
          </div>

          {/* Lado Direito: Botões de Acesso Rápido */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <a
              href="https://wa.me/5511961324380"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-gray-200 hover:text-amber-400 transition-all shadow-md"
            >
              <i className="fa-brands fa-whatsapp text-amber-500 text-base"></i>
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/silvaraaseons.adv?stkn=NGdheGg3eXVkMnho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-gray-200 hover:text-amber-400 transition-all shadow-md"
            >
              <i className="fa-brands fa-instagram text-amber-500 text-base"></i>
              <span>Instagram</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=advogados@silvaraaseons.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-gray-200 hover:text-amber-400 transition-all shadow-md"
            >
              <i className="fa-solid fa-envelope text-amber-500 text-base"></i>
              <span>E-mail</span>
            </a>
          </div>

        </div>

        {/* Bloco Inferior: Direitos Autorais e Créditos */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-gray-200 font-semibold">SILVA RAAS & ONS</strong> – Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Site Desenvolvido por{" "}
            <a
              href="https://john-balbino.github.io/Portif-lio-3.0-react/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors hover:underline"
            >
              John Balbino
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
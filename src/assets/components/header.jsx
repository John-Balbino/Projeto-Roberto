import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoimg from "../img/logo-site.jpg";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/institucional", label: "Institucional" },
    { path: "/area-de-atuacao", label: "Área de Atuação" },
    { path: "/publicacoes", label: "Publicações" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-2xl">
      {/* Topbar Informativa em Tom Âmbar */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 text-black px-4 sm:px-8 py-1.5 flex justify-between items-center text-xs font-semibold">
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/5511961324380"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>+55 (11) 96132-4380</span>
          </a>
        </div>
          <span className="hidden lg:flex items-center gap-1.5 opacity-90">
            <i className="fa-solid fa-location-dot text-xs"></i>
            Av. Ipanema, 382 - SL01 - São Paulo, SP
          </span>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline lg:hidden text-[11px] opacity-90">
            Av. Ipanema, 382 - SP
          </span>
          <a
            href="https://www.instagram.com/silvaraaseons.adv?stkn=NGdheGg3eXVkMnho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <i className="fa-brands fa-instagram text-base"></i>
            <span className="hidden md:inline">@silvaraaseons.adv</span>
          </a>
        </div>
      </div>

      {/* Main Header / Branding e Menu */}
      <div className="bg-black/95 backdrop-blur-md border-b border-amber-500/30 px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Branding / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoimg}
            alt="Silva Raas & Ons Logo"
            className="h-11 sm:h-14 w-auto object-contain rounded-lg border border-amber-500/30 group-hover:border-amber-400 transition-colors"
          />
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold text-base sm:text-lg md:text-xl tracking-wide leading-tight">
              SILVA RAAS & ONS
            </h1>
            <span className="text-gray-300 font-light text-[11px] sm:text-xs tracking-wider">
              Advogados Associados
            </span>
            <span className="text-amber-500/90 font-medium text-[9px] sm:text-[10px] tracking-widest uppercase">
              OAB/SP 67.322
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs md:text-sm font-medium uppercase tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? "text-amber-400 font-bold"
                    : "text-gray-200 hover:text-amber-400"
                } list`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão Hamburguer Mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-black transition-all cursor-pointer touch-manipulation"
        >
          <i className={`fa-solid ${open ? "fa-xmark text-lg" : "fa-bars text-base"}`}></i>
        </button>
      </div>

      {/* Menu Mobile Expansível */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl border-b border-amber-500/30 transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`p-3 rounded-xl border text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/20"
                    : "text-gray-200 border-amber-500/20 hover:border-amber-500/60 hover:bg-amber-500/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
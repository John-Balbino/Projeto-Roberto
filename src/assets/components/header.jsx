import logoimg from "../img/logo-site.jpg";
{/*import { useState } from "react";*/}
import { Link } from "react-router-dom";

export function Navbar() {
  {/*const [open, setOpen] = useState(false);*/}

  return (
    <header>
      {/* Top bar */}
      <div className="bg-amber-600 flex justify-between gap-1.5 text-[8px] md:text-[12px] font-bold items-center py-2">
        <div className="md:flex items-baseline gap-1.5 ">
          <a href="https://wa.me/5511961324380" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp text-[20px] md:text-[24px]"></i>
          </a>
          <span className="hidden md:flex md:text-[16px] ">+55 (11) 96132-4380</span>
        </div>
        <span className="text-[12px] md:text-[18px]">Av. Ipanema, 382 -SL01 - São Paulo, SP</span>
        <div className="flex gap-0.5 p-1">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook  text-[18px] md:text-[24px]"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin  text-[18px] md:text-[24px]"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram text-[18px] md:text-[24px]"></i>
          </a>
        </div>
      </div>

      {/* Logo + Menu */}
      <div className="bg-black flex flex-col lg:flex-row md:justify-between justify-center items-center gap-1 p-2">
        <div className=" flex flex-col lg:flex-row lg:text-[12px] items-center gap-2 md:gap-1 justify-center">
          <img src={logoimg} alt="imagem-logo" className="w-60 h-30  md:w-30 md:h-20" />
          <div className="flex flex-col gap-1 text-center font-bold">
            <h1 className="text-amber-600 text-2xl">SILVA RAAS & ONS</h1>
            <span className="text-amber-600 font-light">Advogados associados</span>
            <span className="text-amber-600 font-light">OAB/SP xxx</span>
          </div>
        </div>

        <nav className="flex flex-col justify-center items-center gap-10 p-2 text-center">
          {/* Menu desktop */}
          <ul className="hidden md:flex gap-10 text-lg lg:text-[16px] font-light uppercase text-amber-600">
            <Link className="list" to="/">Home</Link>
            <Link className="list" to="/institucional">Institucional</Link>
            <Link className="list" to="/area-de-atuacao">Área de atuação</Link>
            <Link className="list" to="/publicacoes">Publicações</Link>
            <Link className="list" to="/contato">Contato</Link>
          </ul>
            
          {/*
          {/* Botão hamburguer *
          <button
            className="text-amber-600 text-3xl cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

          {/* Menu mobile com transição *
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden 
              ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
            `}
          >
            <ul className="flex flex-col gap-2 mt-4 text-white">
              <Link className=" list-mobile" to="/">Home</Link>
              <Link className=" list-mobile" to="/institucional">Institucional</Link>
              <Link className=" list-mobile" to="/area-de-atuacao">Área de atuação</Link>
              <Link className=" list-mobile" to="/publicacoes">Publicações</Link>
              <Link className=" list-mobile" to="/contato">Contato</Link>
            </ul>
          </div>*/}
        </nav>
      </div>
    </header>
  );
}

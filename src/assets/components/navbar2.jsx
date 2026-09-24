import { Link, useLocation } from "react-router-dom";

export function MobileFooterMenu() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "fa-solid fa-house" },
    { path: "/institucional", label: "Institucional", icon: "fa-solid fa-building-columns" },
    { path: "/area-de-atuacao", label: "Área de Atuação", icon: "fa-solid fa-briefcase" },
    { path: "/publicacoes", label: "Publicações", icon: "fa-solid fa-newspaper" },
    { path: "/contato", label: "Contato", icon: "fa-solid fa-phone" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-black/90 backdrop-blur-md border-t border-amber-500/30 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] md:hidden z-50">
      <ul className="flex justify-around items-center py-2.5 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.path} className="flex-1 text-center">
              <Link
                to={item.path}
                aria-label={item.label}
                className={`relative inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 touch-manipulation ${
                  isActive
                    ? "text-amber-400 bg-amber-500/10 scale-110"
                    : "text-gray-400 hover:text-amber-300 active:scale-95"
                }`}
              >
                <i className={`${item.icon} text-xl`}></i>

                {/* Indicador discreto da página ativa */}
                {isActive && (
                  <span className="absolute -top-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
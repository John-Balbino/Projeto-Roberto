import { Link } from "react-router-dom";


export function MobileFooterMenu() {
  return (
    <nav className="sticky bottom-0 w-full  bg-white shadow-md border-t border-gray-200 md:hidden">
      <ul className="flex justify-around items-center py-2 text-amber-600">
        <li>
          <Link to="/" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-house text-3xl"></i>
           
          </Link>
        </li>
        <li>
          <Link to="/institucional" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-building text-3xl "></i>
            
          </Link>
        </li>
        <li>
          <Link to="/area-de-atuacao" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-briefcase text-3xl"></i>
            
          </Link>
        </li>
        <li>
          <Link to="/publicacoes" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-newspaper text-3xl"></i>
            
          </Link>
        </li>
        <li>
          <Link to="/contato" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-phone text-3xl"></i>
            
          </Link>
        </li>
      </ul>
    </nav>
  );
}
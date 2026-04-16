import React from "react";

function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10 text-white fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/dftechservice.png"
              alt="DF Tech Service"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* MENÚ */}
          <div className="hidden md:flex items-center gap-14 text-gray-200 font-medium text-lg">
            <a href="#servicios" className="relative group">
              <span className="transition duration-300 group-hover:text-blue-400">
                Servicios
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#nosotros" className="relative group">
              <span className="transition duration-300 group-hover:text-blue-400">
                Nosotros
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#contacto" className="relative group">
              <span className="transition duration-300 group-hover:text-blue-400">
                Contacto
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* ESPACIADO PARA QUE NO TAPE EL CONTENIDO */}
      <div className="pt-28 md:pt-32"></div>
    </>
  );
}

export default Navbar;

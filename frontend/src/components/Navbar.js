import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 shadow-md">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center">
          <img 
            src="/dftechservice.png"
            alt="DF Tech Service"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>

        {/* MENÚ */}
        <div className="hidden md:flex items-center gap-14 text-gray-300 font-medium text-xl">
          <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
          <a href="#nosotros" className="hover:text-blue-400 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Cargando...');
  const [backendStatus, setBackendStatus] = useState('desconectado');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.mensaje);
        setBackendStatus('conectado');
      })
      .catch(() => {
        setMessage('Error conectando al backend');
        setBackendStatus('desconectado');
      });
  }, []);

  return (
    <div className="bg-gray-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-400">DF Tech Service</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#servicios" className="hover:text-blue-400">Servicios</a>
          <a href="#nosotros" className="hover:text-blue-400">Nosotros</a>
          <a href="#contacto" className="hover:text-blue-400">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Soluciones Tecnológicas Modernas
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Desarrollo web, soporte técnico, redes y soluciones digitales para impulsar tu negocio.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Contáctanos
        </button>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">Desarrollo Web</h4>
            <p className="text-gray-400">Páginas modernas, rápidas y adaptadas a tu negocio.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">Soporte Técnico</h4>
            <p className="text-gray-400">Mantenimiento y reparación de equipos.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">Redes & Seguridad</h4>
            <p className="text-gray-400">Configuración de redes y protección de datos.</p>
          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-16 px-8 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Sobre Nosotros</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          En DF Tech Service ofrecemos soluciones tecnológicas confiables para empresas y personas. Nuestro objetivo es ayudarte a crecer con tecnología moderna y soporte profesional.
        </p>
      </section>

      {/* STATUS BACKEND */}
      <section className="py-12 text-center">
        <p className="mb-2">
          Backend: 
          <span className={`font-semibold ${
            backendStatus === "conectado" ? "text-green-400" : "text-red-400"
          }`}>
            {backendStatus}
          </span>
        </p>

        <p className="italic text-gray-400">"{message}"</p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 px-8 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contacto</h3>
        <p className="text-gray-300 mb-4">¿Listo para trabajar con nosotros?</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold"
        >
          Actualizar estado
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-950 text-gray-500">
        © 2026 DF Tech Service - Todos los derechos reservados
      </footer>

    </div>
  );
}

export default App;

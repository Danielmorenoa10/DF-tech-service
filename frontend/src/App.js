import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

function App() {
  const [message, setMessage] = useState("Cargando...");
  const [backendStatus, setBackendStatus] = useState("desconectado");
  const [open, setOpen] = useState(false);

  // ✅ FORMULARIO STATE
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.mensaje);
        setBackendStatus("conectado");
      })
      .catch(() => {
        setMessage("Error conectando al backend");
        setBackendStatus("desconectado");
      });
  }, []);

  // ✅ CAPTURAR INPUTS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ ENVIAR AL BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      alert(data.mensaje);

      // limpiar formulario
      setFormData({
        nombre: "",
        correo: "",
        mensaje: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error al enviar mensaje");
    }
  };

  return (
    <div className="bg-gray-950 text-white">
      <Navbar />

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Soluciones Tecnológicas
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Desarrollo web, soporte técnico, redes y soluciones digitales para
          impulsar tu negocio.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Contáctanos
        </button>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-16 px-8 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">
          Sobre Nosotros
        </h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          En DF Tech Service hacemos que la tecnología trabaje para ti.
          Brindamos soporte técnico, mantenimiento de equipos, desarrollo de
          software personalizado y automatización de procesos para optimizar tu
          negocio.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
          Nuestros Servicios
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["🌐", "Desarrollo Web", "Páginas modernas, rápidas y adaptadas a tu negocio."],
            ["🛠️", "Soporte Técnico", "Planes de mantenimiento preventivo."],
            ["📡", "Redes e Infraestructura", "Configuración y seguridad de redes."],
            ["🤖", "Automatización con IA", "Optimización de procesos."]
          ].map((item, i) => (
            <div key={i} className="group bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-blue-500/30 border border-transparent hover:border-blue-500">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item[0]}
              </div>
              <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {item[1]}
              </h4>
              <p className="text-gray-400 text-sm">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 px-8 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contacto</h3>
        <p className="text-gray-300 mb-10">
          ¿Quieres trabajar con nosotros? Déjanos tus datos
        </p>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left">

          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            placeholder="Mensaje"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold transition"
          >
            Enviar mensaje
          </button>

        </form>

        {/* REDES */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3">
          {open && (
            <div className="flex flex-col gap-3 mb-2">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="bg-pink-500 p-3 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
                <FaInstagram size={20} />
              </a>

              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="bg-blue-600 p-3 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
                <FaFacebookF size={20} />
              </a>

              <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="bg-black p-3 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
                <FaTiktok size={20} />
              </a>

              <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
                <FaWhatsapp size={20} />
              </a>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="bg-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            {open ? "✖" : "💬"}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-950 text-gray-500">
        © 2026 Desarrollado por DF Tech Service
      </footer>
    </div>
  );
}

export default App;

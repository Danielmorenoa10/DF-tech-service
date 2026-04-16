import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp,FaPlus } from "react-icons/fa";

function App() {
  const [message, setMessage] = useState("Cargando...");
  const [backendStatus, setBackendStatus] = useState("desconectado");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.mensaje);

      setFormData({
        nombre: "",
        correo: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error al enviar mensaje");
    }
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Soluciones Tecnológicas
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Desarrollo web, soporte técnico, redes y soluciones digitales para
          impulsar tu negocio.
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition"
        >
          Contáctanos
        </button>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-20 px-8 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">
          Sobre Nosotros
        </h3>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          En DF Tech Service hacemos que la tecnología trabaje para ti.
          Brindamos soporte técnico, mantenimiento de equipos, desarrollo de
          software personalizado y automatización de procesos para optimizar tu
          negocio.
        </p>
      </section>

            {/* NUESTRO PERSONAL */}
      <section id="personal" className="py-20 px-8 bg-gray-950">
        <h3 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Nuestro Personal
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            {
              nombre: "Daniel Moreno",
              especialidad: "Desarrollador Web",
              foto: "https://i.pravatar.cc/300?img=56",
            },
            {
              nombre: "Felipe Diaz",
              especialidad: "Redes e infraestructura",
              foto: "https://i.pravatar.cc/300?img=11",
            },
            {
              nombre: "Balentina Pinilla",
              especialidad: "Soporte técnico",
              foto: "https://i.pravatar.cc/300?img=23",
            },
            {
              nombre: "Nikole Mayorca",
              especialidad: "Ventas",
              foto: "https://i.pravatar.cc/300?img=2",
            },
          ].map((persona, i) => (
            <div
              key={i}
              className="group bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl text-center transition-all duration-300 hover:-translate-y-4 hover:shadow-blue-500/30 border border-gray-800 hover:border-blue-500"
            >
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-gray-700 group-hover:border-blue-500 transition"
              />

              <h4 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {persona.nombre}
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                {persona.especialidad}
              </p>
            </div>
          ))}
        </div>
      </section>

     {/* SERVICIOS */}
<section id="servicios" className="py-24 px-6 text-center">
  
  {/* TITULO */}
  <div className="max-w-3xl mx-auto mb-16">
    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
      Nuestros Servicios
    </h3>
    <p className="text-gray-400 text-lg">
      Soluciones tecnológicas diseñadas para impulsar tu negocio, optimizar procesos 
      y garantizar un rendimiento eficiente en cada área.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {[
      [
        "🌐",
        "Desarrollo Web",
        "Creamos páginas web modernas, rápidas y totalmente responsivas, enfocadas en brindar una experiencia de usuario atractiva y efectiva, ayudando a posicionar tu marca en el entorno digital.",
      ],
      [
        "🛠️",
        "Soporte Técnico",
        "Brindamos mantenimiento y soporte continuo para tus equipos y sistemas, asegurando estabilidad, rendimiento óptimo y soluciones rápidas ante cualquier inconveniente.",
      ],
      [
        "📡",
        "Redes e Infraestructura",
        "Implementamos redes seguras y eficientes, optimizando la conectividad, el rendimiento y la protección de la información dentro de tu empresa.",
      ],
      [
        "🤖",
        "Automatización con IA",
        "Automatizamos procesos mediante inteligencia artificial, reduciendo tiempos operativos y mejorando la productividad en cada área de tu negocio.",
      ],
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-purple-500/20 border border-gray-800 hover:border-purple-500 text-center"
      >
        {/* ICONO */}
        <div className="text-5xl mb-5 flex justify-center group-hover:scale-110 transition">
          {item[0]}
        </div>

        {/* TITULO */}
        <h4 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
          {item[1]}
        </h4>

        {/* TEXTO */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {item[2]}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-8 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">Contacto</h3>

        <p className="text-gray-400 mb-12 text-lg">
          ¿Quieres trabajar con nosotros? Déjanos tus datos
        </p>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-5 text-left"
        >
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            placeholder="Mensaje"
            className="p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* BOTONES FLOTANTES */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4">
          {open && (
            <div className="flex flex-col gap-4 mb-2">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-black p-4 rounded-full shadow-lg hover:scale-110 transition"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="bg-gradient-to-r from-blue-500 to-blue-700 p-5 rounded-full shadow-xl hover:scale-110 transition"
          >
            {open ? "✖" : < FaPlus size={20} />}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black text-gray-500 text-sm">
        © 2026 Desarrollado por DF Tech Service - Daniel Moreno
          
        
      </footer>
    </div>
  );
}

export default App;

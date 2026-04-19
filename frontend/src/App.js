import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaPlus,
} from "react-icons/fa";

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
      <section className="relative text-center py-28 px-6 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* GLOW */}
        <div className="absolute w-[700px] h-[500px] bg-blue-500/20 blur-3xl top-10 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-blue-400 text-xs mb-4 uppercase tracking-widest">
            Disponible para proyectos
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Tecnología que <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              impulsa tu negocio
            </span>
          </h1>

          <p className="text-gray-400 mb-10">
            Desarrollo web, redes, soporte técnico e inteligencia artificial
            para empresas modernas y pequeños negocios
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold hover:scale-105 transition"
            >
              Iniciar proyecto 
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 transition"
            >
              Ver servicios
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-14 border border-gray-800 rounded-xl overflow-hidden">
            {[
              ["+50", "Proyectos"],
              ["98%", "Clientes satisfechos"],
              ["3", "Especialistas"],
              ["24/7", "Soporte"],
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border-r border-b border-gray-800 text-center last:border-r-0"
              >
                <h4 className="text-2xl font-bold">{item[0]}</h4>
                <p className="text-gray-400 text-sm">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NOSOTROS */}
      <section id="nosotros" className="py-20 px-8 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">
          Sobre Nosotros
        </h3>

        <p className="max-w-5xl mx-auto text-gray-400 text-lg leading-relaxed mb-8">
          En DF Tech Service hacemos que la tecnología trabaje para ti.
          Combinamos experiencia técnica con visión estratégica para ofrecer
          soluciones digitales que generan impacto real en tu negocio.
        </p>

        {/* LISTA */}
        <ul className="max-w-xl mx-auto space-y-3 mb-10">
          {[
            "Más de 2 años transformando negocios con tecnología",
            "Equipo  con especialización en cada área",
            "Atención personalizada y acompañamiento continuo",
            "Metodologías ágiles para entregas rápidas y eficientes",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 text-gray-400 text-sm"
            >
              <span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* BOTÓN */}
        <a
          href="#personal"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 no-underline"
        >
          Conoce al equipo
        </a>
      </section>
      {/* NUESTRO PERSONAL */}
      <section id="personal" className="py-20 px-8 bg-gray-950">
        <h3 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Las personas detrás de cada solución
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            {
              nombre: "Daniel Moreno",
              especialidad:
                "Desarrollador web enfocado en crear soluciones escalables, automatización de procesos y experiencias digitales de alto rendimiento",
              foto: "https://i.pravatar.cc/300?img=56",
            },
            {
              nombre: "Felipe Diaz",
              especialidad:
                "Especialista en redes e infraestructura tecnológica, encargado de diseñar, implementar y optimizar entornos seguros, eficientes y de alta disponibilidad",
              foto: "https://i.pravatar.cc/300?img=11",
            },
            {
              nombre: "Balentina Pinilla",
              especialidad:
                "Profesional en soporte técnico, orientada a la resolución ágil de incidencias, mantenimiento de equipos y atención personalizada al cliente",
              foto: "https://i.pravatar.cc/300?img=23",
            },
            /*{
              nombre: "Nikole Mayorca",
              especialidad: "Ejecutiva de ventas enfocada en identificar oportunidades de negocio, asesorar clientes y ofrecer soluciones tecnológicas alineadas a sus necesidades",
              foto: "https://i.pravatar.cc/300?img=2",
            },*/
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
        <div className="max-w-3xl mx-auto mb-14">
          <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
            Todo lo que necesitas
            <br></br>
            en un solo lugar
          </h3>
          <p className="text-gray-400 text-lg">
            Soluciones tecnológicas diseñadas para impulsar tu negocio,
            optimizar procesos y garantizar un rendimiento eficiente en cada
            área.
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
              <p className="text-gray-400 text-sm leading-relaxed">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>
      import {motion} from "framer-motion";
      {/* CÓMO TRABAJAMOS */}
      <section className="py-24 px-6 bg-[#020617] text-white text-center">
        {/* TAG */}
        <div className="inline-block mb-6 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm tracking-wide animate-fade-in">
          CÓMO TRABAJAMOS
        </div>

        {/* TITULO */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight animate-fade-in delay-100">
          Proceso claro, <br /> resultados garantizados
        </h2>

        {/* GRID */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              num: "01",
              titulo: "Diagnóstico",
              desc: "Analizamos tus necesidades y definimos objetivos claros.",
            },
            {
              num: "02",
              titulo: "Propuesta",
              desc: "Diseñamos una solución personalizada con alcance y costos definidos.",
            },
            {
              num: "03",
              titulo: "Ejecución",
              desc: "Desarrollamos e implementamos con seguimiento constante.",
            },
            {
              num: "04",
              titulo: "Entrega y soporte",
              desc: "Lanzamos y brindamos acompañamiento post-entrega.",
            },
          ].map((paso, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* NUMERO */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-400 text-lg font-bold mb-5 transition group-hover:bg-blue-500/10">
                {paso.num}
              </div>

              {/* TITULO */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {paso.titulo}
              </h3>

              {/* DESCRIPCION */}
              <p className="text-slate-400 text-sm max-w-xs group-hover:text-slate-300 transition">
                {paso.desc}
              </p>

              {/* LINEA ANIMADA */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-8 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">Contacto</h3>

        <p className="text-gray-400 mb-12 text-lg">
          ¿Quieres cotizar con nosotros? dejanos tus datos y te contactamos
        </p>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-[#0b1324] border border-indigo-500/10 rounded-2xl p-8 space-y-6"
        >
          {/* FILA 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest text-slate-400 mb-2 uppercase">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-slate-400 mb-2 uppercase">
                Empresa
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa || ""}
                onChange={handleChange}
                placeholder="Tu empresa"
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* CORREO */}
          <div>
            <label className="block text-xs tracking-widest text-slate-400 mb-2 uppercase">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tu@correo.com"
              className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* SERVICIO */}
          <div>
            <label className="block text-xs tracking-widest text-slate-400 mb-2 uppercase">
              Servicio de interés
            </label>
            <select
              name="servicio"
              value={formData.servicio || "Desarrollo Web"}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option>Desarrollo Web</option>
              <option>Soporte Técnico</option>
              <option>Redes e Infraestructura</option>
              <option>Automatización con IA</option>
              <option>Otro</option>
            </select>
          </div>

          {/* MENSAJE */}
          <div>
            <label className="block text-xs tracking-widest text-slate-400 mb-2 uppercase">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-4 rounded-xl font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-blue-500/30 transition"
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
            {open ? "✖" : <FaPlus size={20} />}
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

//exportar

export default App;

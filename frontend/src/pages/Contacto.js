import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.msg);
  };

  return (
    <section style={{ padding: "40px" }}>
      <h2>Contacto</h2>
      <form onSubmit={enviar}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <br />
        <input name="correo" placeholder="Correo" onChange={handleChange} />
        <br />
        <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange} />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
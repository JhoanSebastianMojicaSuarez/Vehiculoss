import React, { useState } from "react";
import "./App.css";

const motos = [
  {
    id: 1,
    nombre: "Honda XR 150",
    precio: 12500000,
    descripcion: "Moto doble propósito ideal para ciudad y campo. Motor 150cc, frenos de disco, suspensión reforzada.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyc3XfIZRWSCgSVutlfXm24yrdPyhLLMefGUmapkR854on2jpZTDwhUgeSCXtcrs0Bw0I&usqp=CAU",
    marca: "Honda",
  },
  {
    id: 2,
    nombre: "Yamaha MT-03",
    precio: 28500000,
    descripcion: "Estilo naked, motor bicilíndrico 321cc, ABS, inyección electrónica. Pura adrenalina urbana.",
    imagen: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/Mt03_2025_gris.jpg",
    marca: "Yamaha",
  },
  {
    id: 3,
    nombre: "Suzuki Gixxer 250",
    precio: 16000000,
    descripcion: "Deportiva y eficiente. Motor 250cc, 26HP, gran torque y diseño aerodinámico.",
    imagen: "https://images.ctfassets.net/8zlbnewncp6f/1NDbhJm6acy5k0QgQGKFWP/1f25f7348a689e48084c792334fed2ea/susuki-gixxer-250-plano-lateral.png",
    marca: "Suzuki",
  },
  {
    id: 4,
    nombre: "KTM Duke 200",
    precio: 21000000,
    descripcion: "Diseño agresivo, motor 200cc, frenos ABS, suspensión WP. Perfecta para los que buscan emociones fuertes.",
    imagen: "https://crmotos.com/wp-content/uploads/2021/05/ktm-duke-200-2023_0000s_0004_519042_MY23-KTM-200-DUKE_EU3_WHITE_90-Right_EU_-Global.jpg",
    marca: "KTM",
  },
  {
    id: 5,
    nombre: "BMW G 310 R",
    precio: 34500000,
    descripcion: "Tecnología alemana. Motor 313cc, diseño premium, estabilidad y confort.",
    imagen: "https://www.motofichas.com/images/cache/01-bmw-g-310-r-2024-estudio-sport-azul-01-398-a-mobile.jpg",
    marca: "BMW",
  },
  {
    id: 6,
    nombre: "Royal Enfield Meteor 350",
    precio: 25500000,
    descripcion: "Estilo clásico con alma moderna. Motor monocilíndrico 349cc, ideal para largos recorridos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cZuE8lhj9Oi8Vi6EIYU-6-_88pZk1FPeUg&s",
    marca: "Royal Enfield",
  },
  {
    id: 7,
    nombre: "Harley Davidson Iron 883",
    precio: 62000000,
    descripcion: "Ícono del estilo cruiser. Motor V-Twin 883cc, escape doble, diseño atemporal.",
    imagen: "https://www.moto1pro.com/sites/default/files/harley-davidson-iron-883.jpg",
    marca: "Harley Davidson",
  },
  {
    id: 8,
    nombre: "Kawasaki Ninja 400",
    precio: 38000000,
    descripcion: "Potencia, aerodinámica y velocidad. Motor 399cc, ABS y postura deportiva.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE0Bvnpu6JFzbHn62_3u8EDOW5Ir3QGvkFA&s",
    marca: "Kawasaki",
  },
  {
    id: 9,
    nombre: "Italika Vortex 300",
    precio: 19000000,
    descripcion: "Deportiva mexicana con excelente relación costo-beneficio. Motor 300cc y estilo agresivo.",
    imagen: "https://dhqlmcogwd1an.cloudfront.net/images/phocagallery/Italika/Vort-X_300/01-italika-vort-x-300.jpeg",
    marca: "Italika",
  },
];

function App() {
  const [carrito, setCarrito] = useState([]);
  const [toast, setToast] = useState("");

  const agregarAlCarrito = (moto) => {
    if (carrito.find((item) => item.id === moto.id)) {
      mostrarToast("Esta moto ya está en el carrito 🚫");
      return;
    }
    setCarrito([...carrito, moto]);
    mostrarToast(`"${moto.nombre}" añadida 🏍️`);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((m) => m.id !== id));
    mostrarToast("Eliminada del carrito 🗑️");
  };

  const mostrarToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const total = carrito.reduce((sum, m) => sum + m.precio, 0);

  return (
    <div className="app">
      <header className="header">
        <h1 className="brand">🏍️ MotoZone</h1>
        <nav>
          <a href="#catalogo">Catálogo</a>
          <a href="#carrito">Carrito</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {toast && <div className="toast">{toast}</div>}

      <section className="hero">
        <h2>Encuentra la moto de tus sueños</h2>
        <p>Modelos nuevos, usados y personalizados — vive la experiencia MotoZone</p>
        <a href="#catalogo" className="btn-primary">
          Ver catálogo
        </a>
      </section>

      <section id="catalogo" className="catalogo">
        <h2>Catálogo de Motocicletas</h2>
        <div className="grid">
          {motos.map((m) => (
            <div key={m.id} className="card">
              <img src={m.imagen} alt={m.nombre} />
              <h3>{m.nombre}</h3>
              <p>{m.descripcion}</p>
              <p className="marca">{m.marca}</p>
              <span className="precio">${m.precio.toLocaleString()}</span>
              <button onClick={() => agregarAlCarrito(m)}>Agregar</button>
            </div>
          ))}
        </div>
      </section>


      <section>
        <h2 style={{ color: '#FFD600', textAlign: 'center', marginTop: '40px' }}>Carrito de compras</h2>
        {carrito.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#0055A4' }}>No hay motocicletas en el carrito.</p>
        ) : (
          <table className="carrito-table" style={{ margin: '0 auto', width: '80%', borderSpacing: '0' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Imagen</th>
                <th style={{ textAlign: 'left' }}>Modelo</th>
                <th style={{ textAlign: 'left' }}>Marca</th>
                <th style={{ textAlign: 'right' }}>Precio</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((moto, idx) => (
                <tr key={idx} style={{ verticalAlign: 'middle' }}>
                  <td style={{ textAlign: 'center', padding: '8px' }}>
                    <img src={moto.imagen} alt={moto.nombre} style={{ width: '70px', height: '50px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,85,164,0.10)' }} />
                  </td>
                  <td style={{ padding: '8px', fontWeight: 'bold', color: '#0055A4' }}>{moto.nombre}</td>
                  <td style={{ padding: '8px' }}>{moto.marca}</td>
                  <td style={{ padding: '8px', textAlign: 'right', color: '#FFD600', fontWeight: 'bold' }}>${moto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="total" style={{ textAlign: 'right', marginRight: '10%', color: '#00bfff', fontWeight: 'bold', fontSize: '1.2em' }}>
          Total: ${total}
        </p>
      </section>


      <footer id="contacto" className="footer">
        <p>📍 Calle 123 #45-67, Bogotá, Colombia</p>
        <p>📧 contacto@motozone.com</p>
        <div className="redes">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
        <p className="copy">© 2025 MotoZone. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

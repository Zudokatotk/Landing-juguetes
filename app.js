// Contador del carrito
let cartCount = 0;

const cartCountSpan = document.getElementById("cart-count");
const ctaButton = document.getElementById("btn-cta");
const ofertaButton = document.getElementById("btn-oferta");
const ofertaTexto = document.getElementById("texto-oferta");
const addButtons = document.querySelectorAll(".btn-add-cart");

// Evento click: botón principal del hero
ctaButton.addEventListener("click", () => {
  // Baja suavemente a la sección de productos
  const productosSection = document.getElementById("productos");
  window.scrollTo({
    top: productosSection.offsetTop - 70,
    behavior: "smooth",
  });
});

// Evento click: botones "Agregar al carrito"
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;

    const producto = btn.dataset.producto;
    alert(`Añadiste "${producto}" al carrito 🧸`);
  });
});

// Evento click: botón de oferta
ofertaButton.addEventListener("click", () => {
  const ofertas = [
    "2x1 en bloques de construcción hoy.",
    "10% de descuento en todos los dinosaurios.",
    "Envío gratis por compras mayores a Bs. 150.",
    "Regalo sorpresa por cada muñeca comprada.",
  ];

  const randomIndex = Math.floor(Math.random() * ofertas.length);
  ofertaTexto.textContent = ofertas[randomIndex];
});
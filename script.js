// Lista de proyectos (cámbialos por los tuyos)
const projects = [
 
  {
    title: 'E-commerce',
    desc: 'video Tienda virtual creada con Shopify.',
    pdf: 'https://drive.google.com/file/d/17Y9pA6ihNjTAZZNnQt9ni3NwMNJTzbH4/view?usp=sharing', // Reemplaza con el enlace real a tu PDF
    code: '',
    image:  'img/energia.png'
  },
  
  
  {
    title: 'Gnexis',
    desc: 'Descripción detallada del proyecto Gnexis y su impacto.',
    pdf: 'https://drive.google.com/file/d/1wJqpHET4y3PwetpKJ1x_y82KUXWFudj2/view?usp=sharing', // <--- Pega aquí el enlace de tu PDF
    code: '', 
    image: 'img/foto-01.img/gnexis.png' // Opcional: agrega una imagen del proyecto
  }
];

const projectsGrid = document.getElementById('projects-grid');

projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'project-card';
  
  if (p.image) {
    card.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url(${p.image})`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  }
  
  card.innerHTML = `
    <div class="project-content">
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="project-actions" style="margin-top: 1.5rem;">
        ${p.pdf ? `<a class="btn btn-primary" href="${p.pdf}" target="_blank" style="width:100%; text-align:center;">Ver Proyecto (PDF)</a>` : ''}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

// Protección básica XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================
// Formulario de contacto
// ============================

const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Tu número de WhatsApp con código de país
  const phone = "573118874675"; 
  
  const text = encodeURIComponent(
    `Hola, mi nombre es ${name}.\n\n` +
    `*Correo:* ${email}\n` +
    `*Mensaje:* ${message}`
  );
  
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});

// limpiar formulario
document.getElementById('clear').addEventListener('click', () => form.reset());

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

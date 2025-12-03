// Lista de proyectos (cámbialos por los tuyos)
const projects = [
  {
    title: 'App de Gestión',
    desc: 'App web fullstack con React + Node + PostgreSQL.',
    live: 'https://tu-sitio.com',
    code: 'https://github.com/tu_usuario/gestion-app',
    image: 'img/project1.jpg'
  },
  {
    title: 'E-commerce',
    desc: 'Tienda virtual creada con Shopify.',
    live: 'https://ecommerce-demo.com',
    code: 'https://github.com/tu_usuario/ecommerce'
  },
  {
    title: 'API REST',
    desc: 'API con JWT y tests automatizados.',
    live: '',
    code: 'https://github.com/tu_usuario/api-boilerplate'
  }
];

// ============================
// Render lista del panel lateral
// ============================

const projectList = document.getElementById('project-list');
const template = document.getElementById('project-template');

projects.forEach(p => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.project-title').textContent = p.title;
  clone.querySelector('.project-desc').textContent = p.desc;

  const thumb = clone.querySelector('.project-thumb');
  if (p.image && thumb) {
    thumb.src = p.image;
    thumb.alt = p.title;
  } else if (thumb) {
    thumb.remove();
  }

  const live = clone.querySelector('.link-live');
  const code = clone.querySelector('.link-code');

  if (p.live) {
    live.href = p.live;
  } else {
    live.remove();
  }

  code.href = p.code;

  projectList.appendChild(clone);
});


// ============================
// Render tarjetas grandes
// ============================

const projectsGrid = document.getElementById('projects-grid');

projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${escapeHtml(p.title)}</h3>
    <p>${escapeHtml(p.desc)}</p>
    <div style="margin-top: .8rem; display:flex; gap:.6rem">
      ${p.live ? `<a class="btn btn-outline" href="${p.live}" target="_blank">Ver</a>` : ''}
      <a class="btn" href="${p.code}" target="_blank">Código</a>
    </div>
  `;

  // Si el proyecto tiene imagen, aplicarla como fondo de la card
  if (p.image ){
    card.classList.add('has-bg');
    card.style.backgroundImage = `url(${p.image})`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    // overlay para mejorar legibilidad
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    card.appendChild(overlay);
  }

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

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Completa todos los campos.");
    return;
  }

  const subject = encodeURIComponent(`Mensaje de ${name}`);
  const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);

  // mailto (simple). Para producción usa backend real.
  window.location.href = `mailto:joan@example.com?subject=${subject}&body=${body}`;
});

// limpiar formulario
document.getElementById('clear').addEventListener('click', () => form.reset());

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

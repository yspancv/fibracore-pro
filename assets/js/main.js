// assets/js/main.js (producción)

document.addEventListener("DOMContentLoaded", () => {  
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;  
      // Save
      localStorage.setItem("lang", lang);
      window.currentLang = lang;  
      // Apply immediately
      if (typeof applyLang === "function") {
        applyLang();
      }
    });
  });
/*  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      window.currentLang = lang;
      if (typeof applyLang === 'function') applyLang();
    });
  });*/

  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav ul");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const opened = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!opened));
      nav.classList.toggle("open");
      document.body.classList.toggle("no-scroll", !opened);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").substring(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  const el = (id) => document.getElementById(id);
  if (el("year")) el("year").innerText = new Date().getFullYear();
  if (el("f_direccion")) el("f_direccion").innerText = CONFIG.DIRECCION;
  if (el("f_email")) { el("f_email").innerText = CONFIG.EMAIL_CONTACTO; el("f_email").href = `mailto:${CONFIG.EMAIL_CONTACTO}`; }
  if (el("f_tel"))   { el("f_tel").innerText = CONFIG.TELEFONO; el("f_tel").href = `tel:${CONFIG.TELEFONO.replace(/\s|\+/g,'')}`; }
  if (el("f_whatsapp")) el("f_whatsapp").href = `https://wa.me/${CONFIG.WHATSAPP.replace(/\D/g,'')}`;

  const solicitudForm = document.getElementById("solicitud-form");
  if (solicitudForm) {
    solicitudForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre  = document.getElementById("sol_nombre").value.trim();
      const email   = document.getElementById("sol_email").value.trim();
      const tel     = (document.getElementById("sol_tel") || { value: "" }).value.trim();
      const mensaje = document.getElementById("sol_mensaje").value.trim();
      if (!nombre || !email || !mensaje) { alert(LANG[currentLang].msg_required_fields); return; }
      const recipients = (CONFIG.DESTINATARIOS_FORMULARIO_SOLICITUD || [CONFIG.EMAIL_CONTACTO]).join(",");
      const body = `Nombre: ${nombre}
Email: ${email}
Teléfono: ${tel}

Mensaje:
${mensaje}
`;
      window.location.href = `mailto:${recipients}?subject=Solicitud%20Fibracore.pro&body=${encodeURIComponent(body)}`;
      alert(LANG[currentLang].msg_sent_ok); solicitudForm.reset();
    });
  }

  const formContact = document.getElementById("form_contact");
  if (formContact) {
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = (document.getElementById("ct_nombre") || {}).value || "";
      const email  = (document.getElementById("ct_email")  || {}).value || "";
      const msg    = (document.getElementById("ct_mensaje")|| {}).value || "";
      if (!nombre.trim() || !email.trim() || !msg.trim()) { alert(LANG[currentLang].msg_required_fields); return; }
      alert(LANG[currentLang].msg_sent_ok); formContact.reset();
    });
  }

  const formEmpleo = document.getElementById("form_empleo");
  if (formEmpleo) {
    formEmpleo.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!CONFIG.ADMITE_CARGA_CV) { alert("Carga de CV deshabilitada."); return; }
      const nombre = (document.getElementById("cv_nombre") || {}).value || "";
      const email  = (document.getElementById("cv_email")  || {}).value || "";
      const file   = (document.getElementById("cv_archivo")|| {}).files?.[0];
      if (!nombre.trim() || !email.trim() || !file) { alert(LANG[currentLang].msg_required_fields); return; }
      alert(LANG[currentLang].msg_cv_ok); formEmpleo.reset();
    });
  }

  const slider = document.getElementById("home-slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    let idx = 0; function show(i) { slides.forEach((s, k) => s.style.display = (k === i) ? "block" : "none"); }
    show(idx); setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 5000);
  }

  if (CONFIG.AGENTE_ACTIVADO && CONFIG.AGENTE_SDK_URL) {
    const s = document.createElement("script"); s.src = CONFIG.AGENTE_SDK_URL; s.dataset.agentId = CONFIG.AGENTE_ID || ""; document.body.appendChild(s);
  }
});

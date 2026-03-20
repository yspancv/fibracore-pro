// assets/js/i18n.js (producción) — Soporta ES/EN/PT
const LANG = {
  ES: {
    menu_home: "Inicio",
    menu_about: "Quiénes Somos",
    menu_products: "Productos",
    menu_request: "Solicitud",
    menu_support: "Soporte",
    menu_contact: "Contáctanos",
    menu_jobs: "Empleo",

    hero_title: "Soluciones en Fibra Óptica para Colombia y LATAM",
    hero_sub: "Instalación FTTx, patch cords a medida, venta de equipos y soporte técnico especializado.",
    cta_view_products: "Ver Productos",
    cta_request: "Solicitar",

    families_title: "Familias de Producto",
    services_title: "Servicios de la Sucursal",

    products_title: "Productos",
    products_intro: "Explora nuestras familias para instalación, medición y mantenimiento de redes de fibra óptica.",
    products_compare_title: "Comparativa (ejemplo)",
    products_compare_desc: "Edita los modelos destacados desde el archivo de configuración.",

    request_title: "Solicitud",
    request_intro: "Diligencia el formulario. Los campos marcados (*) son obligatorios.",
    form_name_label: "Nombre (*)",
    form_email_label: "Email (*)",
    form_phone_label: "Teléfono (opcional)",
    form_message_label: "Mensaje (*)",
    form_send_btn: "Enviar solicitud",
    request_note: "Si tu cliente de correo no se abre automáticamente, copia el contenido y envíalo a nuestro email.",

    support_title: "Soporte Técnico",
    support_intro: "Accede a manuales, catálogos, firmware, videos y preguntas frecuentes.",
    support_faq: "Preguntas Frecuentes",

    contact_title: "Contáctanos",

    jobs_title: "Oportunidades Laborales",
    jobs_intro: "En Fibracore.pro buscamos técnicos e ingenieros apasionados por la fibra óptica.",

    ph_name: "Tu nombre",
    ph_email: "tucorreo@dominio.com",
    ph_phone: "+57 ...",
    ph_message: "Cuéntanos tu necesidad...",
    ph_jobs_message: "Mensaje (opcional)",

    msg_required_fields: "Por favor completa los campos obligatorios.",
    msg_sent_ok: "¡Enviado correctamente!",
    msg_cv_ok: "Solicitud enviada correctamente. Nuestro equipo revisará tu CV.",

    footer_whatsapp: "WhatsApp"
  },
  EN: {
    menu_home: "Home",
    menu_about: "About Us",
    menu_products: "Products",
    menu_request: "Request",
    menu_support: "Support",
    menu_contact: "Contact Us",
    menu_jobs: "Jobs",

    hero_title: "Fiber Optic Solutions for Colombia and LATAM",
    hero_sub: "FTTx installation, custom patch cords, equipment sales and expert support.",
    cta_view_products: "View Products",
    cta_request: "Request",

    families_title: "Product Families",
    services_title: "Branch Services",

    products_title: "Products",
    products_intro: "Explore our families for installation, measurement and maintenance of fiber networks.",
    products_compare_title: "Comparison (example)",
    products_compare_desc: "Edit the highlighted models from the configuration file.",

    request_title: "Request",
    request_intro: "Fill the form. Fields marked (*) are required.",
    form_name_label: "Name (*)",
    form_email_label: "Email (*)",
    form_phone_label: "Phone (optional)",
    form_message_label: "Message (*)",
    form_send_btn: "Send request",
    request_note: "If your email client doesn't open automatically, copy the content and send it to our email.",

    support_title: "Technical Support",
    support_intro: "Access manuals, catalogs, firmware, videos and FAQs.",

    support_faq: "Frequently Asked Questions",

    contact_title: "Contact Us",

    jobs_title: "Job Opportunities",
    jobs_intro: "At Fibracore.pro we seek technicians and engineers passionate about fiber optics.",

    ph_name: "Your name",
    ph_email: "you@email.com",
    ph_phone: "+57 ...",
    ph_message: "Tell us what you need...",
    ph_jobs_message: "Message (optional)",

    msg_required_fields: "Please complete required fields.",
    msg_sent_ok: "Sent successfully!",
    msg_cv_ok: "Application sent. Our team will review your CV.",

    footer_whatsapp: "WhatsApp"
  },
  PT: {
    menu_home: "Início",
    menu_about: "Quem Somos",
    menu_products: "Produtos",
    menu_request: "Solicitação",
    menu_support: "Suporte",
    menu_contact: "Contato",
    menu_jobs: "Emprego",

    hero_title: "Soluções em Fibra Óptica para Colômbia e LATAM",
    hero_sub: "Instalação FTTx, patch cords sob medida, venda de equipamentos e suporte técnico.",
    cta_view_products: "Ver Produtos",
    cta_request: "Solicitar",

    families_title: "Famílias de Produtos",
    services_title: "Serviços da Filial",

    products_title: "Produtos",
    products_intro: "Explore nossas famílias para instalação, medição e manutenção de redes ópticas.",
    products_compare_title: "Comparativo (exemplo)",
    products_compare_desc: "Edite os modelos em destaque no arquivo de configuração.",

    request_title: "Solicitação",
    request_intro: "Preencha o formulário. Campos marcados (*) são obrigatórios.",
    form_name_label: "Nome (*)",
    form_email_label: "Email (*)",
    form_phone_label: "Telefone (opcional)",
    form_message_label: "Mensagem (*)",
    form_send_btn: "Enviar solicitação",
    request_note: "Se o cliente de email não abrir, copie o conteúdo e envie para nosso email.",

    support_title: "Suporte Técnico",
    support_intro: "Acesse manuais, catálogos, firmware, vídeos e FAQs.",
    support_faq: "Perguntas Frequentes",

    contact_title: "Contato",

    jobs_title: "Oportunidades de Emprego",
    jobs_intro: "Na Fibracore.pro buscamos técnicos e engenheiros apaixonados por fibra óptica.",

    ph_name: "Seu nome",
    ph_email: "seu@email.com",
    ph_phone: "+57 ...",
    ph_message: "Conte-nos sua necessidade...",
    ph_jobs_message: "Mensagem (opcional)",

    msg_required_fields: "Por favor, complete os campos obrigatórios.",
    msg_sent_ok: "Enviado com sucesso!",
    msg_cv_ok: "Candidatura enviada. Nossa equipe analisará seu CV.",

    footer_whatsapp: "WhatsApp"
  }
};

let currentLang = localStorage.getItem("lang") || "ES";

function applyLang() {
  // Update visible text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (LANG[currentLang][key]) {
      el.textContent = LANG[currentLang][key]; // instant update
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (LANG[currentLang][key]) {
      el.setAttribute("placeholder", LANG[currentLang][key]);
    }
  });
}
/*function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (LANG[currentLang][key]) el.innerText = LANG[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (LANG[currentLang][key]) el.setAttribute("placeholder", LANG[currentLang][key]);
  });
}*/

document.addEventListener("DOMContentLoaded", applyLang);

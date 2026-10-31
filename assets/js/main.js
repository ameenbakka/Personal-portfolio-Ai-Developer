/**
 * Main JavaScript for Ameen Sahil's Portfolio
 */

// Project Data
const projectsData = [
  // --- FLAGSHIP ENTERPRISE & SAAS PRODUCTS ---
  {
    id: "winner-erp",
    title: "Winner ERP",
    subtitle: "Enterprise Resource Planning Platform (GCC & Saudi Arabia)",
    category: "enterprise",
    categoryLabel: "Enterprise ERP",
    badge: "Production Enterprise",
    badgeColor: "emerald",
    links: [
      { label: "Live ERP App", url: "https://zoomplus.winnererp.com" },
      { label: "Product Website", url: "https://www.winnererp.com/" }
    ],
    primaryUrl: "https://zoomplus.winnererp.com",
    description: "A comprehensive Saudi-based enterprise ERP platform built to handle end-to-end corporate financial and operational workflows. Aligned with GCC business regulations and official ZATCA Phase-2 e-invoicing compliance.",
    modules: ["Accounting & General Ledger", "ZATCA E-Invoicing", "Inventory & Multi-Warehouse", "Sales & Purchase Cycles", "Fixed Assets Tracking", "VAT & Tax Filing"],
    stack: [".NET Core", "ASP.NET MVC", "SQL Server", "Stored Procedures", "REST API", "Clean Architecture"],
    impact: "Processes daily multi-currency transactions, enterprise invoicing with zero compliance error, and automated financial statements for commercial entities in Saudi Arabia and the GCC."
  },
  {
    id: "care4-emr",
    title: "Care4 EMR",
    subtitle: "Hospital Management & Paperless Clinical System (Dubai)",
    category: "enterprise",
    categoryLabel: "Healthcare & EMR",
    badge: "Live Healthcare Suite",
    badgeColor: "cyan",
    links: [
      { label: "Live System", url: "https://www.care4emr.com" }
    ],
    primaryUrl: "https://www.care4emr.com",
    description: "A state-of-the-art Dubai-based EMR and Hospital Management System enabling completely paperless clinical workflows, real-time patient flow control, and comprehensive hospital administration.",
    modules: ["Doctor Workbench", "Digital Token Management", "Patient Registration & Vitals", "Clinical Consultation", "Pharmacy & Inventory", "Laboratory & Billing"],
    stack: ["ASP.NET Core", "Web API", "SQL Server", "SignalR / Real-Time", "Bootstrap", "Clean Architecture"],
    impact: "Streamlines patient wait times via live token calling and displays, provides doctors instantaneous medical history timelines, and handles end-to-end clinic operations."
  },
  {
    id: "ezq",
    title: "eZq - Smart Queue Management",
    subtitle: "High-Traffic Queue & Customer Flow Automation (Dubai)",
    category: "enterprise",
    categoryLabel: "Queue Automation",
    badge: "Enterprise Deployment",
    badgeColor: "purple",
    links: [],
    primaryUrl: null,
    description: "A robust Queue Management System deployed in Dubai typing centers and governmental service hubs, engineered to manage dense daily foot traffic and structured desk-to-desk customer workflows.",
    modules: ["Self-Service Kiosk", "Token Display Screens", "Cashier & Teller Desk", "CEO Executive Dashboard", "Customer Feedback Surveys", "SLA & Flow Analytics"],
    stack: [".NET Core Web API", "SQL Server", "Real-Time Token Flow", "Kendo UI", "JWT Auth"],
    impact: "Empowered operations executives with real-time CEO dashboards, tracking service counter velocity, token turnaround, and eliminating customer queue bottlenecks."
  },
  {
    id: "sutra-work",
    title: "Sutra",
    subtitle: "Modern Agile Task & Team Management Platform",
    category: "saas",
    categoryLabel: "SaaS Product",
    badge: "Active SaaS Platform",
    badgeColor: "emerald",
    links: [
      { label: "Launch Sutra App", url: "https://app.sutrawork.com/" }
    ],
    primaryUrl: "https://app.sutrawork.com/",
    description: "An intuitive, high-velocity task and project management ecosystem engineered for distributed teams, agile squads, and fast-moving modern agencies.",
    modules: ["Kanban & Sprint Boards", "Team Collaboration Hub", "Task Lifecycles & Milestones", "Time Tracking", "Productivity Analytics"],
    stack: ["React", ".NET Core API", "RESTful Architecture", "Tailwind CSS", "Cloud Hosting"],
    impact: "Designed to simplify project execution, replace clunky spreadsheets, and provide transparent deliverables tracking across technical and client-facing teams."
  },
  {
    id: "work-force",
    title: "Work Force HRMS",
    subtitle: "Next-Gen Human Resource & Payroll Management System",
    category: "saas",
    categoryLabel: "HR & Enterprise",
    badge: "Business Platform",
    badgeColor: "blue",
    links: [],
    primaryUrl: null,
    description: "An integrated Human Resource Management System automating employee lifecycles from onboarding through payroll computation, biometric attendance, and leave workflows.",
    modules: ["Payroll & Salary Slips", "Attendance & Biometric Sync", "Leave Approval Workflows", "Employee Self-Service (ESS)", "Appraisal & Performance"],
    stack: [".NET Core", "Entity Framework", "SQL Server", "REST API", "Reporting Services"],
    impact: "Eliminates manual HR calculations, reduces compliance errors, and brings seamless self-service access to managers and staff members."
  },
  {
    id: "pharmaz",
    title: "pharmaZ",
    subtitle: "Intelligent Pharmacy Inventory & POS Management System",
    category: "saas",
    categoryLabel: "Healthcare Retail",
    badge: "Specialized Suite",
    badgeColor: "emerald",
    links: [],
    primaryUrl: null,
    description: "A high-precision pharmacy management and point-of-sale system tailored for retail pharmacies, hospital dispensaries, and pharmaceutical distributors.",
    modules: ["Batch & Expiry Date Tracking", "Prescription Dispensing", "Rapid Barcode POS Billing", "Supplier Reorders & Alerts", "Multi-Store Central Sync"],
    stack: [".NET Core", "C#", "SQL Server", "Dapper", "Desktop & Web APIs"],
    impact: "Prevents dead stock through automated expiry alerts, speeds up prescription fulfillment, and optimizes working capital for pharmacy chains."
  },

  // --- UOWLDEV CLIENT & ENTERPRISE WEB DEPLOYMENTS (11 WEBSITES) ---
  {
    id: "uowl-1",
    title: "Almas College of Nursing",
    subtitle: "Official Academic Institution Portal",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "cyan",
    links: [{ label: "Visit Website", url: "https://www.almascollegeofnursing.ac.in/" }],
    primaryUrl: "https://www.almascollegeofnursing.ac.in/",
    description: "Comprehensive institutional website for Almas College of Nursing, showcasing nursing programs, faculty accreditation, student admissions, and campus facilities.",
    stack: ["Umbraco CMS", "C# / ASP.NET", "Responsive UI", "SEO Structure"],
    impact: "High-performance institutional hub serving thousands of prospective nursing students and academic faculty."
  },
  {
    id: "uowl-2",
    title: "Thali FX",
    subtitle: "Creative VFX & Visual Production Studio",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "purple",
    links: [{ label: "Visit Website", url: "https://www.thalifx.com/" }],
    primaryUrl: "https://www.thalifx.com/",
    description: "Dynamic, cinematic portfolio website built for Thali FX visual effects and creative animation studio with immersive media showcases.",
    stack: ["Modern Web Stack", "Responsive Design", "Video Integration", "SEO"],
    impact: "Premium visual showcase driving high-value client acquisitions for media and film productions."
  },
  {
    id: "uowl-3",
    title: "Noor Al Zameel",
    subtitle: "International Enterprise Corporate Portal (UAE)",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "emerald",
    links: [{ label: "Visit Website", url: "https://www.nooralzameel.com/en" }],
    primaryUrl: "https://www.nooralzameel.com/en",
    description: "Multilingual corporate enterprise portal for Noor Al Zameel, highlighting industrial capabilities, commercial trade, and GCC regional operations.",
    stack: ["Umbraco CMS", "Multilingual", "Enterprise UI", "Performance Tuning"],
    impact: "Strengthened corporate digital positioning across the GCC market with streamlined business inquiries."
  },
  {
    id: "uowl-4",
    title: "Fednok",
    subtitle: "Federation & Community Organization Platform",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "blue",
    links: [{ label: "Visit Website", url: "https://www.fednok.org/" }],
    primaryUrl: "https://www.fednok.org/",
    description: "Official non-profit portal for Fednok, providing community initiatives, organizational directory, membership events, and public notices.",
    stack: ["Web Application", "CMS Integration", "Accessible UI", "Secure Backend"],
    impact: "Connects thousands of community members and streamlines event participation."
  },
  {
    id: "uowl-5",
    title: "Blackstone Cube",
    subtitle: "Corporate Technology & IT Solutions Platform",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "emerald",
    links: [{ label: "Visit Website", url: "https://www.blackstonecube.com/" }],
    primaryUrl: "https://www.blackstonecube.com/",
    description: "Official corporate website for Black Stone Cube Pvt. Ltd, highlighting enterprise software engineering services, consulting, and digital products.",
    stack: ["ASP.NET / Umbraco", "Tailwind / Modern CSS", "Clean Architecture", "Lead Funnel"],
    impact: "Central business hub establishing enterprise credibility and showcasing software engineering solutions."
  },
  {
    id: "uowl-6",
    title: "SecuLobby",
    subtitle: "Visitor Security & Smart Lobby Solutions",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "cyan",
    links: [{ label: "Visit Website", url: "https://www.seculobby.com/" }],
    primaryUrl: "https://www.seculobby.com/",
    description: "Product and marketing web platform for SecuLobby, a modern digital visitor management and facility security solution.",
    stack: ["Umbraco CMS", "Interactive Showcase", "B2B Lead Flow", "Responsive UI"],
    impact: "Educates facilities managers on smart lobby check-ins and drives high-intent B2B demo bookings."
  },
  {
    id: "uowl-7",
    title: "Smart Maids",
    subtitle: "Premier On-Demand Cleaning Services (Dubai, UAE)",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "emerald",
    links: [{ label: "Visit Website", url: "https://smartmaids.ae/" }],
    primaryUrl: "https://smartmaids.ae/",
    description: "A high-conversion service booking and customer portal for Smart Maids, one of Dubai's leading residential and commercial cleaning brands.",
    stack: ["Responsive Frontend", "Service Booking Funnels", "WhatsApp Integration", "Local SEO"],
    impact: "Powers thousands of weekly customer booking inquiries and on-demand cleaning reservations across Dubai."
  },
  {
    id: "uowl-8",
    title: "Winner ERP Official Web",
    subtitle: "Flagship Enterprise Product Showcase",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "blue",
    links: [{ label: "Visit Website", url: "https://www.winnererp.com/" }],
    primaryUrl: "https://www.winnererp.com/",
    description: "Dedicated corporate product showcase and customer acquisition portal for Winner ERP, detailing ZATCA compliance and accounting features.",
    stack: ["Umbraco CMS", "Interactive Demo Requests", "Feature Showcase", "Conversion Optimized"],
    impact: "Drives customer acquisition and demos across Saudi Arabia and the GCC region."
  },
  {
    id: "uowl-9",
    title: "uOwlDev Agency Portal",
    subtitle: "Enterprise CMS & Software Engineering Agency",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "purple",
    links: [{ label: "Visit Website", url: "https://www.uowldev.com/" }],
    primaryUrl: "https://www.uowldev.com/",
    description: "The primary agency portal representing uOwlDev, showcasing enterprise Umbraco CMS expertise, bespoke software development, and digital transformation.",
    stack: ["Umbraco CMS", "C# Razor", "Block Grid Components", "Performance SEO"],
    impact: "Serves as the foundation for enterprise client projects, component reusability, and client discovery."
  },
  {
    id: "uowl-10",
    title: "Stand Up Leads",
    subtitle: "B2B Lead Generation & Growth Engine",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "emerald",
    links: [{ label: "Visit Website", url: "https://www.standupleads.com/" }],
    primaryUrl: "https://www.standupleads.com/",
    description: "High-performance digital platform built for Stand Up Leads, specializing in data-driven B2B lead generation, client funnels, and marketing automation.",
    stack: ["Modern Web Architecture", "Conversion Funnels", "Analytics Integration", "Lead Magnets"],
    impact: "Generates qualified sales pipelines for B2B enterprises and growth-oriented service providers."
  },
  {
    id: "uowl-11",
    title: "Aikyam Heritage",
    subtitle: "Luxury Heritage Hospitality & Tourism Experience",
    category: "uowldev",
    categoryLabel: "uOwlDev Deployment",
    badge: "Live Website",
    badgeColor: "amber",
    links: [{ label: "Visit Website", url: "https://www.aikyamheritage.com/" }],
    primaryUrl: "https://www.aikyamheritage.com/",
    description: "An elegant, culturally immersive hospitality website for Aikyam Heritage, designed to showcase heritage suites, authentic cultural dining, and reservations.",
    stack: ["Visual Storytelling", "High-Speed Imagery", "Booking Integration", "Mobile Optimization"],
    impact: "Delivers an evocative luxury brand presence that boosts direct heritage retreat bookings."
  }
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initLucide();
  initNavigation();
  renderProjects("all");
  initProjectFilters();
  initProjectSearch();
  initContactForm();
  initCopyButtons();
});

// Re-render lucide icons
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navigation scroll tracking and mobile toggle
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header background
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-slate-950/90", "backdrop-blur-md", "border-b", "border-slate-800/80", "shadow-xl");
    } else {
      navbar.classList.remove("bg-slate-950/90", "backdrop-blur-md", "border-b", "border-slate-800/80", "shadow-xl");
    }

    // Active link highlighting
    let current = "";
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-cyan-400", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-cyan-400", "font-semibold");
      }
    });
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close when clicking any mobile link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// Render Projects List
function renderProjects(filter = "all", searchQuery = "") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = projectsData.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.subtitle.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.stack && item.stack.some((s) => s.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-500 stroke-1"></i>
        <h4 class="text-lg font-medium text-slate-300">No projects found</h4>
        <p class="text-sm text-slate-500 mt-1">Try selecting a different filter or clearing your search keywords.</p>
      </div>
    `;
    initLucide();
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const hasLinks = item.links && item.links.length > 0;
      const primaryUrl = item.primaryUrl;

      // Badges color map
      const badgeStyles = {
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        amber: "bg-amber-500/10 text-amber-400 border-amber-500/20"
      };
      const badgeClass = badgeStyles[item.badgeColor] || badgeStyles.cyan;

      return `
        <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
          <!-- Top subtle glow -->
          <div class="absolute -top-24 -right-24 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none"></div>

          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-3 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badgeClass}">
                <span class="w-1.5 h-1.5 rounded-full ${item.badgeColor === 'emerald' ? 'bg-emerald-400 live-indicator' : 'bg-cyan-400'}"></span>
                ${item.badge}
              </span>
              <span class="text-xs font-mono uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded border border-slate-700/50">
                ${item.categoryLabel}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
              <span>${item.title}</span>
              ${primaryUrl ? `
                <a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-cyan-400 transition-colors p-1" title="Open live site">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              ` : ''}
            </h3>
            <p class="text-xs font-medium text-cyan-400/90 mt-1 mb-3">${item.subtitle}</p>
            <p class="text-slate-300 text-sm leading-relaxed mb-5">${item.description}</p>

            <!-- Key Modules if available -->
            ${item.modules ? `
              <div class="mb-5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <p class="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Key Modules & Capabilities:</p>
                <div class="flex flex-wrap gap-1.5">
                  ${item.modules.map(mod => `<span class="text-xs px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/40">&bull; ${mod}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${item.stack.map(st => `
                <span class="badge-pill">
                  ${st}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Links -->
          <div class="pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-2">
              ${hasLinks ? item.links.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                   class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/40 transition-all duration-200">
                  <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                  <span>${link.label}</span>
                  <i data-lucide="arrow-up-right" class="w-3 h-3 text-slate-400"></i>
                </a>
              `).join('') : `
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-slate-400 bg-slate-900/80 border border-slate-800">
                  <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
                  <span>Enterprise / Internal Infrastructure</span>
                </span>
              `}
            </div>

            <button onclick="openProjectModal('${item.id}')" class="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1 group/btn ml-auto">
              <span>Technical Details</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  // Re-initialize lucide icons for newly rendered items
  initLucide();
}

// Project Filter Buttons
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("bg-cyan-500", "text-slate-950", "font-bold", "shadow-lg", "shadow-cyan-500/20");
        b.classList.add("bg-slate-900/80", "text-slate-300", "border-slate-800");
      });

      btn.classList.add("bg-cyan-500", "text-slate-950", "font-bold", "shadow-lg", "shadow-cyan-500/20");
      btn.classList.remove("bg-slate-900/80", "text-slate-300", "border-slate-800");

      const filterValue = btn.getAttribute("data-filter");
      const searchInput = document.getElementById("project-search");
      renderProjects(filterValue, searchInput ? searchInput.value : "");
    });
  });
}

// Project Search
function initProjectSearch() {
  const searchInput = document.getElementById("project-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeBtn = document.querySelector(".filter-btn.bg-cyan-500");
    const activeFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    renderProjects(activeFilter, e.target.value);
  });
}

// Project Modal Details
window.openProjectModal = function (projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  if (!modalContainer || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs px-2.5 py-0.5 rounded-full font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            ${project.categoryLabel}
          </span>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            ${project.badge}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-white font-display">${project.title}</h3>
        <p class="text-cyan-400 text-sm mt-0.5">${project.subtitle}</p>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="py-5 space-y-5 max-h-[70vh] overflow-y-auto pr-2">
      <div>
        <h4 class="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">System Overview & Engineering Focus</h4>
        <p class="text-slate-300 text-sm leading-relaxed">${project.description}</p>
      </div>

      ${project.impact ? `
        <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30">
          <h4 class="text-xs uppercase font-semibold text-cyan-400 tracking-wider mb-1 flex items-center gap-1.5">
            <i data-lucide="trending-up" class="w-4 h-4"></i> Business Impact & Scale
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${project.impact}</p>
        </div>
      ` : ''}

      ${project.modules ? `
        <div>
          <h4 class="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">Core Modules Developed</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${project.modules.map(mod => `
              <div class="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
                <span>${mod}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div>
        <h4 class="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">Architectural & Tech Stack</h4>
        <div class="flex flex-wrap gap-2">
          ${project.stack.map(st => `
            <span class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800">
              ${st}
            </span>
          `).join('')}
        </div>
      </div>

      ${project.links && project.links.length > 0 ? `
        <div class="pt-4 border-t border-slate-800">
          <h4 class="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">Live Access & Deliverables</h4>
          <div class="flex flex-wrap gap-3">
            ${project.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>${l.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
  document.body.style.overflow = "hidden";
  initLucide();
};

window.closeProjectModal = function () {
  const modalContainer = document.getElementById("project-modal");
  if (!modalContainer) return;
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex");
  document.body.style.overflow = "auto";
};

// Copy to Clipboard with Toast Notification
function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        });
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) return;

  const toastMessage = document.getElementById("toast-message");
  if (toastMessage) toastMessage.textContent = message;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const btnEmail = document.getElementById("btn-send-email");
  const btnWhatsApp = document.getElementById("btn-send-whatsapp");

  const buildMessage = () => {
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and project message.");
      return null;
    }

    return {
      name,
      email,
      phone,
      service,
      message,
      text: `Hello Ameen Sahil,\n\nMy name is ${name}.\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nInterested Service: ${service}\n\nProject Details:\n${message}\n\nSent from your portfolio website.`
    };
  };

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener("click", (e) => {
      e.preventDefault();
      const data = buildMessage();
      if (!data) return;

      const encodedMsg = encodeURIComponent(data.text);
      const waUrl = `https://wa.me/917909221323?text=${encodedMsg}`;
      window.open(waUrl, "_blank");
      showToast("Redirecting to WhatsApp to send your message...");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = buildMessage();
      if (!data) return;

      const subject = encodeURIComponent(`New Project Inquiry from ${data.name} - ${data.service}`);
      const body = encodeURIComponent(data.text);
      const mailtoUrl = `mailto:ameensahil1323@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;
      showToast("Opening your email client to send message to ameensahil1323@gmail.com...");
    });
  }
}

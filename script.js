/* ----------------------------------------------------
   PROJECT DETAILS DATABASE
---------------------------------------------------- */
const projectDetails = {
  flamingo: {
    title: "Flamingo — AI Language Learning App",
    tags: ["KMP", "Compose Multiplatform", "Gemini 2.0 Flash", "AI Vision", "Lottie"],
    icon: "🦩",
    htmlContent: `
      <h4>Overview</h4>
      <p>Flamingo is a cutting-edge cross-platform language learning application that leverages advanced AI vision capabilities to turn real-world objects into interactive lessons. Developed during a rapid 2-week sprint by a two-person team, the application achieves over 90% code sharing between Android and iOS using Kotlin Multiplatform and Compose Multiplatform.</p>
      
      <h4>Key Contributions & Architecture</h4>
      <ul>
        <li><strong>Gemini 2.0 Flash Integration:</strong> Architected the integration with Google's Gemini AI, handling image compression and sending secure multipart HTTP requests to the Gemini Vision API.</li>
        <li><strong>AI-Driven Workflows:</strong> Created prompts that instruct the LLM to identify photographed objects, translate them into target languages, and suggest contextual sentences.</li>
        <li><strong>Animated Stickers:</strong> Integrated Lottie animations within Compose Multiplatform, dynamically matching AI output tags with interactive, multilingual stickers.</li>
        <li><strong>Modern Stack:</strong> Utilized Koin for dependency injection, Ktor Client for multiplatform networking, and Voyager for cross-platform navigation and state management.</li>
      </ul>
      
      <h4>Outcome</h4>
      <p>Demonstrated the feasibility of fast-paced, high-fidelity AI application prototyping on KMP, delivering fully responsive, native-looking designs on both Android and iOS inside a two-week window.</p>
    `
  },
  oase: {
    title: "OASE — ATM Operations & Maintenance App (BCA)",
    tags: ["Android", "Face Recognition", "DexGuard", "Java 17", "16 KB Page Alignment", "MVVM"],
    icon: "🏧",
    htmlContent: `
      <h4>Overview</h4>
      <p>OASE is a mission-critical internal Android application utilized by BCA (PT Bank Central Asia Tbk) field engineers across Indonesia. The application streamlines day-to-day ATM machine maintenance, repair logs, and cash loading workflows under strict banking compliance guidelines.</p>
      
      <h4>Key Contributions & Architecture</h4>
      <ul>
        <li><strong>Multi-modal Authentication:</strong> Developed and owned the secure login system, integrating native Biometric APIs alongside a fallback custom face recognition module using local OpenCV vector computations.</li>
        <li><strong>Advanced Code Protection:</strong> Implemented and configured DexGuard obfuscation, resource encryption, debugger checks, root detection, and hook-prevention rules to protect sensitive banking APIs.</li>
        <li><strong>Modern Baseline Migration:</strong> Led the team's transition from Java 11 to Java 17 and updated AGP baselines, enabling modern compilation features and improving build speeds.</li>
        <li><strong>16 KB Page Size Alignment:</strong> Debugged and resolved critical page-alignment crashes on Android 16-ready systems, recompiling native C++ library dependencies with the <code>-z max-page-size=16384</code> flag.</li>
      </ul>
      
      <h4>Outcome</h4>
      <p>Successfully secured the daily operations of field teams servicing thousands of ATMs, maintaining 99.9% crash-free sessions and protecting client-side source code against reverse engineering attempts.</p>
    `
  },
  geofencing: {
    title: "Geofencing Operator Validation System",
    tags: ["Android", "Google Play Services", "WorkManager", "Jetpack Room", "DataStore"],
    icon: "📍",
    htmlContent: `
      <h4>Overview</h4>
      <p>Developed as a core security module for BCA field applications, this system enforces physical presence checks by ensuring operators can only log maintenance tasks when situated inside a strict 250m geofence radius around designated ATM machines.</p>
      
      <h4>Key Contributions & Architecture</h4>
      <ul>
        <li><strong>Geofencing Implementation:</strong> Utilized Google Play Services Location API to define precise circular geofences. Developed native event broadcasts to trigger background verifications.</li>
        <li><strong>Anti-Spoofing & Mock Detection:</strong> Created a custom mock-location validation layer that inspects location provider flags, evaluates velocity consistency, and filters out mock provider signals (e.g. GPS spoofer apps).</li>
        <li><strong>Offline-First Synchronization:</strong> Integrated Jetpack Room and EncryptedSharedPreferences (migrated from legacy Hawk storage) to store queue data offline.</li>
        <li><strong>Background Operations:</strong> Used Android WorkManager to reliably sync validation logs with BCA backend servers, even when the app is closed or network connection is spotty.</li>
      </ul>
      
      <h4>Outcome</h4>
      <p>Completely mitigated unauthorized remote logging, ensuring 100% audit compliance for physical ATM audits across BCA branches.</p>
    `
  },
  camera: {
    title: "KMP Camera Integration",
    tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Peekaboo", "Expect/Actual"],
    icon: "📸",
    htmlContent: `
      <h4>Overview</h4>
      <p>This project focused on implementing and optimizing native camera controls within a unified Kotlin Multiplatform and Compose Multiplatform environment, eliminating the need to write separate native UI wrappers for each mobile platform.</p>
      
      <h4>Key Contributions & Architecture</h4>
      <ul>
        <li><strong>Peekaboo Library Integration:</strong> Configured and customized the Peekaboo camera library to create a custom, performance-optimized camera preview overlay.</li>
        <li><strong>Expect/Actual Implementations:</strong> Handled platform-specific camera permissions and lifecycle bindings, mapping iOS <code>AVFoundation</code> classes and Android <code>CameraX</code> layers into shared Kotlin code.</li>
        <li><strong>Image Processing:</strong> Implemented canvas scaling and client-side image compression rules inside the shared KMP layer, optimizing picture data for rapid upload speeds.</li>
      </ul>
      
      <h4>Outcome</h4>
      <p>Established a reusable multiplatform camera module template, reducing time-to-market for camera features in KMP projects by roughly 40%.</p>
    `
  }
};

/* ----------------------------------------------------
   TYPEWRITER EFFECT
---------------------------------------------------- */
const roles = [
  "Mobile Engineer",
  "Android & KMP Specialist",
  "AI Integration Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.querySelector(".typed-text");
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between roles

function type() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let delay = isDeleting ? erasingDelay : typingDelay;
  
  if (!isDeleting && charIndex === currentRole.length) {
    delay = newTextDelay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 500; // pause before next role
  }
  
  setTimeout(type, delay);
}

/* ----------------------------------------------------
   THEME TOGGLE & GITHUB STATS
---------------------------------------------------- */
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Colors matching dark/light styles for Github Stats
const darkStatsParams = "theme=dark&hide_border=true&title_color=00ffff&icon_color=00ffff&text_color=f3f4f6&bg_color=111827";
const lightStatsParams = "theme=default&hide_border=true&title_color=2563eb&icon_color=2563eb&text_color=334155&bg_color=ffffff";

const darkLangsParams = "layout=compact&hide_border=true&title_color=00ffff&text_color=f3f4f6&bg_color=111827";
const lightLangsParams = "layout=compact&hide_border=true&title_color=2563eb&text_color=334155&bg_color=ffffff";

function updateGitHubStatsTheme(theme) {
  const statsImg = document.getElementById("github-stats-img");
  const langsImg = document.getElementById("github-langs-img");
  
  if (statsImg && langsImg) {
    if (theme === "dark") {
      statsImg.src = `https://github-readme-stats.vercel.app/api?username=bysonz07&show_icons=true&${darkStatsParams}`;
      langsImg.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=bysonz07&${darkLangsParams}`;
    } else {
      statsImg.src = `https://github-readme-stats.vercel.app/api?username=bysonz07&show_icons=true&${lightStatsParams}`;
      langsImg.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=bysonz07&${lightLangsParams}`;
    }
  }
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
htmlElement.setAttribute("data-theme", savedTheme);
updateGitHubStatsTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
  updateGitHubStatsTheme(newTheme);
});

/* ----------------------------------------------------
   HEADER SCROLL EFFECT
---------------------------------------------------- */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ----------------------------------------------------
   MOBILE MENU TOGGLE
---------------------------------------------------- */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navMenu.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

/* ----------------------------------------------------
   SCROLL SPY (NAVBAR HIGHLIGHTING)
---------------------------------------------------- */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 120)) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ----------------------------------------------------
   SKILLS FILTER & SEARCH
---------------------------------------------------- */
const skillsSearch = document.getElementById("skills-search");
const tabButtons = document.querySelectorAll(".tab-btn");
const skillPills = document.querySelectorAll(".skill-pill");

let activeFilter = "all";
let searchQueries = "";

function filterSkills() {
  skillPills.forEach(pill => {
    const pillCategory = pill.getAttribute("data-category");
    const pillName = pill.getAttribute("data-name");
    
    const matchesCategory = activeFilter === "all" || pillCategory === activeFilter;
    const matchesSearch = pillName.includes(searchQueries.toLowerCase());
    
    if (matchesCategory && matchesSearch) {
      pill.classList.remove("hidden");
    } else {
      pill.classList.add("hidden");
    }
  });
}

// Search input handler
skillsSearch.addEventListener("input", (e) => {
  searchQueries = e.target.value;
  filterSkills();
});

// Category tabs handler
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-filter");
    filterSkills();
  });
});

/* ----------------------------------------------------
   PROJECT DETAILS MODAL STUFF
---------------------------------------------------- */
const modalBackdrop = document.getElementById("modal-backdrop");
const modalBodyContent = document.getElementById("modal-body-content");

function openProjectModal(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;
  
  // Construct modal content
  let tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  
  modalBodyContent.innerHTML = `
    <div class="modal-project-header">
      <div class="project-tags">${tagsHtml}</div>
      <h3 class="modal-project-title">${project.icon} ${project.title}</h3>
    </div>
    <div class="modal-project-body">
      ${project.htmlContent}
    </div>
  `;
  
  modalBackdrop.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProjectModal() {
  modalBackdrop.classList.remove("show");
  document.body.style.overflow = ""; // Re-enable background scroll
}

// Close modal on Escape key press
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

/* ----------------------------------------------------
   CONTACT FORM & TOAST UTILS
---------------------------------------------------- */
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function copyText(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage);
  }).catch(err => {
    console.error("Could not copy text: ", err);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const subject = document.getElementById("form-subject").value;
  const message = document.getElementById("form-message").value;
  
  // Set button loading state
  const submitBtn = e.target.querySelector("button[type='submit']");
  const origBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = `<span>Sending...</span> <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`;
  submitBtn.disabled = true;
  
  setTimeout(() => {
    // Copy content to clipboard
    const fullClipboardText = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(fullClipboardText).then(() => {
      // Trigger Mailto link
      const mailtoUrl = `mailto:dnpn07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      window.location.href = mailtoUrl;
      
      showToast("Message copied to clipboard & mail client opened!");
    }).catch(() => {
      // Fallback mailto trigger
      const mailtoUrl = `mailto:dnpn07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      window.location.href = mailtoUrl;
      
      showToast("Mail client opened!");
    });
    
    // Reset form and button
    e.target.reset();
    submitBtn.innerHTML = origBtnText;
    submitBtn.disabled = false;
  }, 1200);
}

/* ----------------------------------------------------
   LOCAL TIME CLOCK (TANGERANG - WIB UTC+7)
---------------------------------------------------- */
function updateLocalTime() {
  const localTimeSpan = document.getElementById("local-time");
  if (!localTimeSpan) return;
  
  const now = new Date();
  
  // Calculate UTC time, then add 7 hours for WIB
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibTime = new Date(utc + (3600000 * 7));
  
  let hours = wibTime.getHours();
  let minutes = wibTime.getMinutes();
  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  
  localTimeSpan.textContent = `${hours}:${minutes} WIB`;
}

// Start Typewriter & Clock on page load
window.addEventListener("DOMContentLoaded", () => {
  // Start Typing Tagline
  if (typedTextSpan) {
    setTimeout(type, 1000);
  }
  
  // Start clock
  updateLocalTime();
  setInterval(updateLocalTime, 30000); // update every 30s
});

# Difa Naufal — Developer Portfolio (bysonz07.github.io)

This repository contains the source code for my professional developer portfolio page, hosted live at [bysonz07.github.io](https://bysonz07.github.io). 

It is designed to highlight my work as a **Mobile Engineer**, **Android & KMP Specialist**, and **AI Integration Developer**.

## 🚀 Live Site
Check it out live here: **[bysonz07.github.io](https://bysonz07.github.io)**

---

## 🎨 Features
- **Modern Cyber Aesthetic:** Tailored HSL color themes (Dark/Light mode) with glowing background blobs, card gradients, and smooth slide transitions.
- **Dynamic Tagline Typewriter:** Highlights core roles: *Mobile Engineer*, *Android & KMP Specialist*, and *AI Integration Developer*.
- **Interactive Skills Explorer:** Real-time skill filtering by category (Mobile, AI & Backend, Architecture, Tools) alongside instant search inputs.
- **Collapsible Experience Timeline:** Tracks my history at PT Bank Central Asia Tbk (BCA), Elite Tutors, Apple Developer Academy, and Zayana Organic.
- **Detailed Project Showcases:** Provides deep technical walkthroughs, architecture definitions, and migration descriptions in interactive modals for key projects (Flamingo, OASE, Geofencing, KMP Camera).
- **GitHub Insights Panel:** Automatically integrates dynamic GitHub stats and top languages widgets tailored to the active theme.
- **Tangerang Local Clock:** Displays my current timezone (WIB UTC+7) dynamically.
- **Interactive Contact Panel:** Fully functional form simulation that validates inputs, copies messages to the clipboard, and pre-fills email clients (`mailto:`).
- **Professional Print Style:** Custom CSS rules formatting the entire portfolio page into a clean, minimalist 2-page print layout suitable for physical CVs or PDF downloads (triggered via the "Print CV" button).

---

## 🛠️ Technology Stack
- **HTML5:** Semantic architecture (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Vanilla CSS3:** Layout systems (Flexbox, CSS Grid), HSL variables, dark mode styling, custom keyframe transitions, and `@media print` rules.
- **JavaScript (ES6):** Dynamic typewriter effects, theme switching, GitHub API widgets mapping, timezone computation, and modal logic.

---

## 📂 Project Structure
- `index.html` — Base layout structure, components, and SEO meta tags.
- `style.css` — Styling tokens, layout structures, responsiveness, animations, and printer styling.
- `script.js` — Core application logic, details database, timezone clocks, and DOM interactions.
- `README.md` — Project documentation.

---

## 💻 Running & Testing Locally

Since this is a lightweight static site, you don't need any complex build configurations. Simply open `index.html` directly in your browser or run a simple local web server:

### Python 3
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Node.js (http-server)
```bash
npm install -g http-server
http-server . -p 8000
```
Then visit: `http://localhost:8000`

---

## 🚢 Deployment to GitHub Pages
1. Push this code directly to your default branch (usually `main`) on your GitHub repository named `bysonz07/bysonz07.github.io`.
2. Go to **Settings** → **Pages** on your repository.
3. Under **Build and deployment**, ensure:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or default branch), path `/ (root)`
4. Save the settings. GitHub will automatically run a build action and deploy your new portfolio page within a few minutes!

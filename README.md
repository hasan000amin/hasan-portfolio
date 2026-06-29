# Portfolio — Hasan Amin, S.T., M.Sc.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-≥18-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.21-000000?logo=express)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

Portfolio website modern untuk **Hasan Amin, S.T., M.Sc.** — Fullstack Developer & Dosen dengan tema Jujutsu Kaisen.

## ✨ Fitur

- 🎨 **Tema Dark/Light Mode** — Dark mode default, toggle dengan localStorage
- 🎭 **JJK Inspired** — Nuansa hitam, ungu, biru gelap, efek glow & glassmorphism
- 📱 **Fully Responsive** — Desktop, tablet, dan mobile
- 🎞️ **Animasi Halus** — AOS + CSS Animations
- ⚡ **Performa** — Minimal dependencies, optimized assets
- 📬 **Contact Form** — Siap diintegrasikan dengan nodemailer
- 🖥️ **Particles Background** — Canvas particle effect

## 🚀 Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Template** | EJS |
| **CSS** | Tailwind CSS |
| **Icons** | Lucide (inline SVG) |
| **Animations** | AOS Library + CSS Animations |

## 📁 Struktur Proyek

```
portfolio/
├── app.js                  # Entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── README.md
├── src/
│   └── input.css           # Tailwind source
├── public/
│   ├── css/
│   │   └── style.css       # Compiled Tailwind
│   ├── js/
│   │   └── main.js         # Vanilla JS
│   └── images/
├── views/
│   ├── index.ejs           # Main page
│   ├── layout/
│   │   └── main.ejs        # Layout wrapper
│   ├── partials/
│   │   ├── head.ejs        # Head meta tags
│   │   ├── navbar.ejs      # Navigation
│   │   └── footer.ejs      # Footer
│   └── sections/
│       ├── hero.ejs
│       ├── about.ejs
│       ├── skills.ejs
│       ├── experience.ejs
│       ├── projects.ejs
│       ├── services.ejs
│       ├── techstack.ejs
│       ├── certificates.ejs
│       └── contact.ejs
├── routes/
│   └── index.js
├── controllers/
│   └── pageController.js
├── middleware/
│   └── errorHandler.js
└── config/
    └── app.js
```

## 🛠️ Instalasi & Menjalankan

```bash
# Clone / masuk direktori
cd portfolio

# Install dependencies
npm install

# Build CSS
npm run build

# Development mode (hot reload)
npm run dev

# Production mode
npm start
```

Buka di browser: **http://localhost:3000**

## ⚙️ Konfigurasi

Copy `.env.example` ke `.env` dan isi sesuai kebutuhan:

```bash
cp .env.example .env
```

## 📝 TODO

Data yang perlu diganti/diisi:

- [ ] Profile image di hero section — `/public/images/`
- [ ] Email di `controllers/pageController.js`
- [ ] Social media links (LinkedIn, GitHub, Instagram, TikTok, Google Scholar)
- [ ] Nomor telepon
- [ ] Link project demo & source code
- [ ] Link sertifikat
- [ ] Link publikasi Google Scholar
- [ ] CV PDF download
- [ ] Konfigurasi SMTP untuk contact form (optional)

## 🎨 Tema

Tema terinspirasi dari anime **Jujutsu Kaisen** dengan palet warna:
- `#0a0a0f` — Dark background
- `#7c3aed` — Purple accent (Gojo's energy)
- `#1e1b4b` — Deep blue
- `#22d3ee` — Cyan glow
- `#c084fc` — Light purple

Glassmorphism: `backdrop-filter: blur()` dengan `rgba(255,255,255,0.05)` background.

## 📄 Lisensi

MIT © 2026 Hasan Amin

---

_Dibangun dengan_ ♥ _dan Jujutsu Kaisen vibes_

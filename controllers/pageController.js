// =============================================
// Page Controller
// Handles all page rendering and form logic
// =============================================

// --- Portfolio Data ---
const portfolioData = {
  navLinks: [
    { href: '#hero', label: 'Beranda' },
    { href: '#about', label: 'Tentang' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#experience', label: 'Pengalaman' },
    { href: '#projects', label: 'Proyek' },
    { href: '#services', label: 'Layanan' },
    { href: '#contact', label: 'Kontak' },
  ],
  personal: {
    name: 'Hasan Amin',
    nickname: 'Hasan',
    titles: [
      'Fullstack Developer',
      'Senior Software Developer',
      'Dosen',
      'Network Specialist',
    ],
    headline: {
      en: 'Fullstack Developer with 10+ years of experience in web development, IoT, and system security.',
      id: 'Fullstack Developer dengan 10+ tahun pengalaman di pengembangan web, IoT, dan keamanan sistem.',
    },
    location: 'Bandung, Jawa Barat',
    email: 'hasan@example.com', // TODO: Ganti dengan email asli
    phone: '+62xxx-xxxx-xxxx', // TODO: Ganti dengan nomor telepon
    university: 'Universitas Pamulang',
    faculty: 'S1 Sistem Komputer',
    googleScholar: 'https://scholar.google.com/citations?user=YOUR_ID', // TODO: Ganti
    citations: 10,
    hIndex: 2,
    profileImage: '/images/profile-placeholder.jpg', // TODO: Ganti dengan foto
  },

  social: {
    linkedin: 'https://linkedin.com/in/hasanamin', // TODO: Ganti
    github: 'https://github.com/hasanamin', // TODO: Ganti
    instagram: 'https://instagram.com/hasanamin', // TODO: Ganti
    tiktok: 'https://tiktok.com/@hasanamin', // TODO: Ganti
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID', // TODO: Ganti
  },

  about: {
    description: [
      {
        en: 'Fullstack Developer with 10+ years of experience in web development, IoT, and system security. Experienced as a Software Developer at STT Duta Bangsa (2014–2024), currently active as a Remote Developer at PT. Sinergi Sarana Teknologi (2019–present), and a Computer Systems Lecturer at Universitas Pamulang (2024–present).',
        id: 'Fullstack Developer dengan 10+ tahun pengalaman di pengembangan web, IoT, dan keamanan sistem. Berpengalaman sebagai Software Developer di STT Duta Bangsa (2014–2024) dan saat ini aktif sebagai Remote Developer di PT. Sinergi Sarana Teknologi (2019–sekarang) serta Dosen di Universitas Pamulang (2024–sekarang).',
      },
      {
        en: 'Skilled in developing web-based applications using Laravel, Node.js, and Nuxt.js, as well as IoT systems with ThingsBoard, MQTT, BeagleBone, and SCADA. Active in research and community service, with publications on Google Scholar (10 citations, h-index 2).',
        id: 'Memiliki keahlian dalam pengembangan aplikasi berbasis web menggunakan Laravel, Node.js, dan Nuxt.js, serta pengembangan sistem IoT dengan ThingsBoard, MQTT, BeagleBone, dan SCADA. Aktif dalam penelitian dan pengabdian masyarakat, dengan publikasi di Google Scholar (10 sitasi, h-index 2).',
      },
    ],
    stats: [
      { label: { en: 'Years Exp.', id: 'Tahun Pengalaman' }, value: '10+' },
      { label: { en: 'Apps Built', id: 'Aplikasi Dibangun' }, value: '6+' },
      { label: { en: 'Active Roles', id: 'Peran Aktif' }, value: '3' },
      { label: { en: 'Certifications', id: 'Sertifikasi' }, value: '2' },
    ],
  },

  skills: [
    { name: 'Laravel', level: 95, icon: 'code-2' },
    { name: 'Node.js', level: 90, icon: 'server' },
    { name: 'Nuxt.js / Vue.js', level: 85, icon: 'globe' },
    { name: 'IoT / Embedded', level: 90, icon: 'cpu' },
    { name: 'MQTT', level: 88, icon: 'radio' },
    { name: 'SCADA', level: 85, icon: 'gauge' },
    { name: 'BeagleBone', level: 82, icon: 'microchip' },
    { name: 'ThingsBoard', level: 85, icon: 'monitor' },
    { name: 'Machine Learning', level: 75, icon: 'brain' },
    { name: 'Cyber Security', level: 78, icon: 'shield' },
    { name: 'Linux / Server', level: 90, icon: 'terminal' },
    { name: 'Networking', level: 88, icon: 'network' },
  ],

  experiences: [
    {
      title: {
        en: 'Computer Systems Lecturer',
        id: 'Dosen Sistem Komputer',
      },
      company: 'Universitas Pamulang',
      period: {
        en: '2024 – Present',
        id: '2024 – Sekarang',
      },
      description: {
        en: 'Teaching Computer Networks, Computer Networks Practicum, Cloud Computing, and Computer Security courses for the Bachelor of Computer Systems program.',
        id: 'Mengajar mata kuliah Jaringan Komputer, Praktikum Jaringan, Cloud Computing, dan Keamanan Komputer untuk program studi S1 Sistem Komputer.',
      },
      type: 'work',
    },
    {
      title: 'Remote Developer',
      company: 'PT. Sinergi Sarana Teknologi',
      period: {
        en: '2019 – Present',
        id: '2019 – Sekarang',
      },
      description: {
        en: 'Developing and maintaining web-based, IoT, and industrial system applications. Implementing MQTT, SCADA, and ThingsBoard solutions for industrial clients.',
        id: 'Mengembangkan dan memelihara aplikasi berbasis web, IoT, dan sistem industrial. Implementasi solusi MQTT, SCADA, dan ThingsBoard untuk klien industri.',
      },
      type: 'work',
    },
    {
      title: 'Software Developer',
      company: 'STT Duta Bangsa',
      period: {
        en: '2014 – 2024',
        id: '2014 – 2024',
      },
      description: {
        en: 'Developing academic information systems, Library MIS, Practicum MIS, Stock MIS, Repository MIS, and various internal campus applications.',
        id: 'Mengembangkan sistem informasi akademik, SIM Perpustakaan, SIM Praktikum, SIM Stock, SIM Repository, dan berbagai aplikasi internal kampus.',
      },
      type: 'work',
    },
  ],

  projects: [
    {
      title: 'SIM Perpustakaan',
      year: '2016',
      description: {
        en: 'Web-based Library Management Information System for managing book collections, members, and borrowing transactions.',
        id: 'Sistem Informasi Manajemen Perpustakaan berbasis web untuk mengelola koleksi buku, anggota, dan transaksi peminjaman.',
      },
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      category: 'Web App',
      link: '#',
      github: '#',
    },
    {
      title: 'SIM Praktikum',
      year: '2017',
      description: {
        en: 'Practicum management information system for managing schedules, grades, and student practicum reports.',
        id: 'Sistem informasi manajemen praktikum untuk mengelola jadwal, nilai, dan laporan praktikum mahasiswa.',
      },
      tech: ['Laravel', 'MySQL', 'jQuery'],
      category: 'Web App',
      link: '#',
      github: '#',
    },
    {
      title: 'SIM Stock',
      year: '2019',
      description: {
        en: 'Stock Management Information System for managing inventory, inbound/outbound transactions, and stock reports.',
        id: 'Sistem Informasi Manajemen Stok barang untuk mengelola inventaris, transaksi masuk/keluar, dan laporan stok.',
      },
      tech: ['Laravel', 'MySQL', 'Tailwind'],
      category: 'Web App',
      link: '#',
      github: '#',
    },
    {
      title: 'SIM Repository',
      year: '2020',
      description: {
        en: 'Institutional repository for managing scientific works, theses, and academic publications.',
        id: 'Repository institusi untuk mengelola karya ilmiah, skripsi, dan publikasi akademik.',
      },
      tech: ['Laravel', 'MySQL', 'Vue.js'],
      category: 'Web App',
      link: '#',
      github: '#',
    },
    {
      title: 'Fuel Management System',
      year: '2020',
      description: {
        en: 'IoT-based fuel management system for real-time fuel distribution monitoring and control.',
        id: 'Sistem manajemen bahan bakar berbasis IoT untuk monitoring dan kontrol distribusi BBM secara real-time.',
      },
      tech: ['Node.js', 'MQTT', 'ThingsBoard', 'BeagleBone'],
      category: 'IoT',
      link: '#',
      github: '#',
    },
    {
      title: 'SIM Wisuda',
      year: '2023',
      description: {
        en: 'Graduation management information system for registration, verification, and management of graduation participant data.',
        id: 'Sistem informasi manajemen wisuda untuk pendaftaran, verifikasi, dan pengelolaan data peserta wisuda.',
      },
      tech: ['Nuxt.js', 'Laravel', 'PostgreSQL'],
      category: 'Web App',
      link: '#',
      github: '#',
    },
    {
      title: 'IoT Gas Leak Detector',
      year: '2024',
      description: {
        en: 'LPG gas leak detection device based on BeagleBone with real-time MQTT notifications.',
        id: 'Alat pendeteksi kebocoran gas LPG berbasis BeagleBone dengan notifikasi real-time via MQTT.',
      },
      tech: ['BeagleBone', 'MQTT', 'Node.js', 'ThingsBoard'],
      category: 'IoT',
      link: '#',
      github: '#',
    },
    {
      title: 'SCADA Monitoring Dashboard',
      year: '2024',
      description: {
        en: 'SCADA dashboard for real-time industrial process monitoring and control with sensor data visualization.',
        id: 'Dashboard SCADA untuk monitoring dan kontrol proses industri secara real-time dengan visualisasi data sensor.',
      },
      tech: ['Node.js', 'MQTT', 'SCADA', 'WebSocket'],
      category: 'Industrial Automation',
      link: '#',
      github: '#',
    },
    {
      title: 'Sentiment Analysis SVM-DT',
      year: '2024',
      description: {
        en: 'User review sentiment analysis using Support Vector Machine and Decision Tree methods.',
        id: 'Analisis sentimen ulasan pengguna menggunakan metode Support Vector Machine dan Decision Tree.',
      },
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      category: 'Machine Learning',
      link: '#',
      github: '#',
    },
  ],

  services: [
    {
      title: 'Web Development',
      description: {
        en: 'Modern web application development using Laravel, Node.js, Nuxt.js, and the latest technologies.',
        id: 'Pengembangan aplikasi web modern menggunakan Laravel, Node.js, Nuxt.js, dan teknologi terkini.',
      },
      icon: 'globe',
      features: ['Full-stack Web App', 'RESTful API', 'Single Page Application', 'Progressive Web App'],
    },
    {
      title: 'IoT & Embedded Systems',
      description: {
        en: 'End-to-end IoT solutions from sensors to dashboard using BeagleBone, MQTT, ThingsBoard, and SCADA.',
        id: 'Solusi IoT end-to-end dari sensor hingga dashboard menggunakan BeagleBone, MQTT, ThingsBoard, dan SCADA.',
      },
      icon: 'cpu',
      features: ['Sensor Integration', 'Real-time Monitoring', 'MQTT Broker Setup', 'SCADA Systems'],
    },
    {
      title: 'Industrial Automation',
      description: {
        en: 'Industrial process automation with integration of SCADA systems, PLC, and monitoring dashboards.',
        id: 'Automasi proses industri dengan integrasi sistem SCADA, PLC, dan dashboard monitoring.',
      },
      icon: 'gauge',
      features: ['SCADA Implementation', 'PLC Programming', 'HMI Development', 'Process Optimization'],
    },
    {
      title: 'Cyber Security',
      description: {
        en: 'System security audit and consulting to protect your digital infrastructure.',
        id: 'Audit dan konsultasi keamanan sistem untuk melindungi infrastruktur digital Anda.',
      },
      icon: 'shield',
      features: ['Security Audit', 'Penetration Testing', 'Network Security', 'Security Hardening'],
    },
    {
      title: 'Machine Learning',
      description: {
        en: 'Machine learning implementation for data analysis, prediction, and intelligent decision making.',
        id: 'Implementasi machine learning untuk analisis data, prediksi, dan pengambilan keputusan cerdas.',
      },
      icon: 'brain',
      features: ['Data Analysis', 'Predictive Modeling', 'NLP & Sentiment Analysis', 'Classification'],
    },
    {
      title: 'Cloud & Server',
      description: {
        en: 'Linux server setup and management, cloud infrastructure, and application deployment.',
        id: 'Setup dan manajemen server Linux, cloud infrastructure, dan deployment aplikasi.',
      },
      icon: 'server',
      features: ['Ubuntu Server', 'Docker Container', 'CI/CD Pipeline', 'Cloud Migration'],
    },
  ],

  techStack: [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', category: 'Backend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', category: 'Frontend' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Language' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Language' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'Language' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'DevOps' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'DevOps' },
    { name: 'MQTT', icon: '', category: 'IoT' },
    { name: 'ThingsBoard', icon: '', category: 'IoT' },
    { name: 'BeagleBone', icon: '', category: 'IoT' },
    { name: 'SCADA', icon: '', category: 'IoT' },
  ],

  certificates: [
    {
      title: 'CCNA Routing & Switching',
      issuer: 'Cisco Academy',
      year: '2019',
      description: {
        en: 'Associate-level networking certification covering routing, switching, and network troubleshooting.',
        id: 'Sertifikasi jaringan tingkat associate mencakup routing, switching, dan troubleshooting jaringan.',
      },
      link: '#',
    },
    {
      title: 'Workshop Ubuntu Server',
      issuer: 'Intra Training',
      year: '2017',
      description: {
        en: 'Ubuntu Server administration training covering installation, configuration, and server security.',
        id: 'Pelatihan administrasi server Ubuntu meliputi instalasi, konfigurasi, dan keamanan server.',
      },
      link: '#',
    },
    {
      title: 'Wifi Corner 2.0',
      issuer: 'Universitas Bhayangkara',
      year: '2018',
      description: {
        en: 'Workshop on wireless network management and enterprise WiFi infrastructure.',
        id: 'Workshop manajemen jaringan nirkabel dan infrastruktur WiFi enterprise.',
      },
      link: '#',
    },
  ],

  publications: [
    {
      title: 'Analisis Pemahaman Konsep Gerak Parabola melalui Media Pembelajaran Berbasis Sensor dengan Pendekatan Inkuiri',
      journal: 'IKRA-ITH Teknologi, Vol. 10(1)',
      year: '2026',
      authors: 'MAA Fathurohman, H Amin',
      link: '#',
    },
    {
      title: 'Analisis Sentimen Ulasan Pengguna J&T Menggunakan Metode Support Vector Machine dan Decision Tree',
      journal: 'Penelitian Mandiri',
      year: '2024',
      authors: 'H Amin',
      link: '#',
    },
  ],

  communityServices: [
    {
      title: {
        en: 'Digital System Implementation for PHBI Maulid Nabi',
        id: 'Implementasi Sistem Digital PHBI Maulid Nabi',
      },
      description: {
        en: 'Management of PHBI Maulid Nabi Muhammad SAW 1447H activities at Al-Husna Mosque, Griya Sutera Balaraja',
        id: 'Pengelolaan kegiatan PHBI Maulid Nabi Muhammad SAW 1447H di Masjid Al-Husna Griya Sutera Balaraja',
      },
      year: '2025',
      type: 'PKM',
    },
    {
      title: {
        en: 'IoT Technology for Elderly Hydration Reminder',
        id: 'Teknologi IoT untuk Alat Pengingat Hidrasi Lansia',
      },
      description: {
        en: 'Application of IoT Technology through Wokwi Simulation for Developing Elderly Hydration Reminder Devices at SMKN 3 Kota Serang',
        id: 'Penerapan Teknologi IoT Melalui Simulasi Wokwi untuk Pengembangan Alat Pengingat Hidrasi Lansia di SMKN 3 Kota Serang',
      },
      year: '2025',
      type: 'PKM',
    },
    {
      title: {
        en: 'LPG Gas Leak Detector Based on BeagleBone',
        id: 'Alat Pendeteksi Kebocoran Gas LPG Berbasis Beaglebone',
      },
      description: {
        en: 'Introduction of LPG Gas Leak Detection Device Based on BeagleBone for the community',
        id: 'Pengenalan Alat Pendeteksi Kebocoran Gas LPG Berbasis Beaglebone untuk masyarakat',
      },
      year: '2024',
      type: 'PKM',
    },
  ],

  teaching: [
    { course: 'Jaringan Komputer', sks: 3, semester: 'Genap 2024/2025' },
    { course: 'Praktikum Jaringan', sks: 3, semester: 'Genap 2024/2025' },
    { course: 'Cloud Computing', sks: 3, semester: 'Genap 2024/2025' },
    { course: 'Keamanan Komputer', sks: 3, semester: 'Genap 2024/2025' },
  ],
};

// =============================================
// Controller Methods
// =============================================

/**
 * Render homepage
 */
exports.home = (req, res) => {
  res.render('index', {
    title: 'Hasan Amin - Fullstack Developer & Dosen',
    description: 'Portfolio website Hasan Amin - Fullstack Developer, IoT Specialist, dan Dosen',
    data: portfolioData,
    siteTitle: 'Hasan Amin',
    lang: req.lang,
  });
};

/**
 * Handle contact form submission
 */
exports.contact = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: req.lang === 'id'
        ? 'Mohon lengkapi semua field yang wajib diisi (nama, email, pesan).'
        : 'Please fill in all required fields (name, email, message).',
    });
  }

  // TODO: Implement email sending via nodemailer here

  console.log(`📧 Contact form submission from ${name} (${email}): ${subject || '(no subject)'}`);

  res.json({
    success: true,
    message: req.lang === 'id'
      ? 'Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.'
      : 'Thank you! Your message has been sent. I\'ll get back to you soon.',
  });
};

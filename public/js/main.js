// =============================================
// Portfolio - Hasan Amin
// Main JavaScript File
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // Theme Toggle (Dark/Light Mode)
  // =============================================
  const initTheme = () => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark if no saved preference
    if (savedTheme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }

    updateThemeIcons();
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateThemeIcons();
  };

  const updateThemeIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Desktop toggle icons
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    if (darkIcon && lightIcon) {
      darkIcon.classList.toggle('hidden', !isDark);
      lightIcon.classList.toggle('hidden', isDark);
    }
    
    // Mobile toggle icons
    const darkIconM = document.getElementById('theme-icon-dark-mobile');
    const lightIconM = document.getElementById('theme-icon-light-mobile');
    if (darkIconM && lightIconM) {
      darkIconM.classList.toggle('hidden', !isDark);
      lightIconM.classList.toggle('hidden', isDark);
    }
  };

  // Theme toggle buttons
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Init theme
  initTheme();

  // =============================================
  // Mobile Menu Toggle
  // =============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Animate hamburger icon
      const icon = mobileMenuBtn.querySelector('svg');
      if (!mobileMenu.classList.contains('hidden')) {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        `;
      } else {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        `;
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('svg');
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        `;
      });
    });
  }

  // =============================================
  // Navbar Scroll Effect
  // =============================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      navbar.classList.add('bg-jjk-darker/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-jjk-darker/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
      navbar.classList.add('bg-transparent');
    }
    
    lastScroll = currentScroll;
  });

  // =============================================
  // Smooth Scroll for Nav Links
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // =============================================
  // Typing Effect in Hero Section
  // =============================================
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const titles = JSON.parse(typingElement.getAttribute('data-titles') || '["Fullstack Developer", "Senior Software Developer", "Dosen", "Network Specialist"]');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const typeEffect = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        currentText = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      typingElement.textContent = currentText;

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => isDeleting = true, 2000);
        setTimeout(typeEffect, 2100);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 500);
        return;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();
  }

  // =============================================
  // Skills Progress Bar Animation
  // =============================================
  const animateSkillBars = () => {
    document.querySelectorAll('.skill-bar').forEach(bar => {
      const width = bar.getAttribute('data-width');
      if (width) {
        bar.style.width = width;
      }
    });
  };

  // Use Intersection Observer for skill bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.width = bar.getAttribute('data-width') || '0%';
        }, 200);
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('#skills .w-full.h-1\\.5 div').forEach(bar => {
    if (bar.getAttribute('data-width')) {
      skillObserver.observe(bar);
    }
  });

  // =============================================
  // Project Filter
  // =============================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projects-grid > div');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => {
        b.classList.remove('bg-jjk-purple', 'text-white');
        b.classList.add('glass-card', 'text-gray-400', 'hover:text-jjk-purple-light');
      });
      btn.classList.add('bg-jjk-purple', 'text-white');
      btn.classList.remove('glass-card', 'text-gray-400', 'hover:text-jjk-purple-light');

      // Filter projects
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =============================================
  // Contact Form Handler
  // =============================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <div class="loading-spinner"></div>
        <span>Mengirim...</span>
      `;

      formStatus.classList.remove('hidden', 'text-green-400', 'text-red-400');
      formStatus.textContent = '';

      try {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          formStatus.classList.remove('hidden', 'text-red-400');
          formStatus.classList.add('text-green-400');
          formStatus.textContent = result.message;
          contactForm.reset();
        } else {
          formStatus.classList.remove('hidden', 'text-green-400');
          formStatus.classList.add('text-red-400');
          formStatus.textContent = result.message || 'Gagal mengirim pesan. Silakan coba lagi.';
        }
      } catch (error) {
        formStatus.classList.remove('hidden', 'text-green-400');
        formStatus.classList.add('text-red-400');
        formStatus.textContent = 'Terjadi kesalahan jaringan. Silakan coba lagi.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Auto-hide status after 5 seconds
        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      }
    });
  }

  // =============================================
  // Particles Background (Canvas)
  // =============================================
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(canvas.width * 0.05), 80);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    // Setup
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 200);
    });

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
  }

  // =============================================
  // Active Section Highlight (Scroll Spy)
  // =============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateActiveSection = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-jjk-purple-light');
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === current) {
        link.classList.add('text-jjk-purple-light');
      }
    });
  };

  window.addEventListener('scroll', updateActiveSection);

  // =============================================
  // Window Load Animation
  // =============================================
  // Add fade-in class to body after load
  document.body.classList.add('fade-in');
});

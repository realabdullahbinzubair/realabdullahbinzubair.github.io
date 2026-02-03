// ==========================================
// MODERN PORTFOLIO - ENHANCED INTERACTIONS
// ==========================================

// Navigation Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.getElementById('main-nav').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Enhanced Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger animation only once
      if (!entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
      }
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => {
  observer.observe(el);
});

// Parallax Effect for Hero Image
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image');
      
      if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      
      ticking = false;
    });
    
    ticking = true;
  }
});

// Enhanced Project Card Interactions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  // 3D Tilt Effect
  card.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });

  // Magnetic Effect on Project Tags
  const tags = card.querySelectorAll('.project-tags span');
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Blog Card Hover Effects
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    const category = this.querySelector('.blog-category');
    if (category) {
      category.style.transform = 'scale(1.1)';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    const category = this.querySelector('.blog-category');
    if (category) {
      category.style.transform = 'scale(1)';
    }
  });
});

// Stat Cards Counter Animation
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
  observer.observe(card);
  
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.stat-icon');
    if (icon) {
      icon.style.animation = 'none';
      setTimeout(() => {
        icon.style.animation = 'iconBounce 0.6s ease';
      }, 10);
    }
  });
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
  @keyframes iconBounce {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(-5deg); }
    75% { transform: scale(1.1) rotate(5deg); }
  }
`;
document.head.appendChild(style);

// Skills Hover Effects
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    const check = this.querySelector('.skill-check');
    const level = this.querySelector('.skill-level');
    
    if (check) {
      check.style.transform = 'scale(1.15) rotate(360deg)';
    }
    if (level) {
      level.style.transform = 'scale(1.05)';
    }
  });
  
  item.addEventListener('mouseleave', function() {
    const check = this.querySelector('.skill-check');
    const level = this.querySelector('.skill-level');
    
    if (check) {
      check.style.transform = 'scale(1) rotate(0deg)';
    }
    if (level) {
      level.style.transform = 'scale(1)';
    }
  });
});

// Button Ripple Effect
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .project-btn');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .btn-primary, .btn-secondary, .project-btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Cursor Effect (Desktop only)
if (window.innerWidth > 768) {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .blog-card, .stat-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });

  // Add custom cursor styles
  const cursorStyle = document.createElement('style');
  cursorStyle.textContent = `
    .custom-cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.2s ease, border-color 0.2s ease;
      mix-blend-mode: difference;
    }

    .custom-cursor.cursor-hover {
      transform: scale(1.8);
      border-color: rgba(255, 255, 255, 0.8);
    }

    * {
      cursor: none !important;
    }
  `;
  document.head.appendChild(cursorStyle);
}

// Active Navigation Link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-links a.active {
    color: var(--color-black);
  }
  
  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(activeStyle);

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// Add progress bar styles
const progressStyle = document.createElement('style');
progressStyle.textContent = `
  #scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(to right, var(--color-black), var(--color-gray-700));
    z-index: 10001;
    transition: width 0.1s ease;
  }
`;
document.head.appendChild(progressStyle);

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Social Links Stagger Animation
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach((link, index) => {
  link.style.animationDelay = `${1 + (index * 0.1)}s`;
});

// Performance: Reduce animations on low-end devices
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}

// Page Load Animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger hero animations
  const heroElements = document.querySelectorAll('#hero .fade-in, #hero .fade-in-delay-1, #hero .fade-in-delay-2, #hero .fade-in-delay-3, #hero .fade-in-delay-4, #hero .fade-in-delay-5');
  heroElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});

// Contact Card Magnetic Effect
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      card.style.transform = `translateY(-4px) translate(${x * 0.1}px, ${y * 0.1}px)`;
    }
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) translate(0, 0)';
  });
});

// Blog Link Arrow Animation
const blogLinks = document.querySelectorAll('.blog-link');
blogLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    const svg = this.querySelector('svg');
    if (svg) {
      svg.style.transform = 'translateX(6px)';
    }
  });
  
  link.addEventListener('mouseleave', function() {
    const svg = this.querySelector('svg');
    if (svg) {
      svg.style.transform = 'translateX(0)';
    }
  });
});

// Smooth Reveal for Footer
const footer = document.querySelector('footer');
if (footer) {
  observer.observe(footer);
}

// Console Easter Egg
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #000;');
console.log('%cLooking at the code? Feel free to reach out!', 'font-size: 14px; color: #666;');
console.log('%c📧 abdullah.zubair035@gmail.com', 'font-size: 12px; color: #999;');

// Performance Monitoring
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.log('Slow animation detected:', entry.name, entry.duration + 'ms');
      }
    }
  });
  
  perfObserver.observe({ entryTypes: ['measure'] });
}

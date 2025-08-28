// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Viral Fashion Campaign",
    category: "short-form",
    description: "High-energy fashion showcase optimized for Instagram Reels with lightning-fast cuts and trending music synchronization.",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    views: "2.3M",
    engagement: "12.5%",
    platform: "Instagram Reels",
    duration: "0:30"
  },
  {
    id: 2,
    title: "Tech Product Launch",
    category: "long-form",
    description: "Comprehensive product launch video with professional cinematography and detailed feature explanations.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    views: "890K",
    engagement: "8.7%",
    platform: "YouTube",
    duration: "5:42"
  },
  {
    id: 3,
    title: "Epic Gaming Montage",
    category: "gaming",
    description: "Action-packed gaming highlights with dynamic transitions and explosive visual effects for maximum impact.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    views: "1.8M",
    engagement: "15.3%",
    platform: "Twitch/YouTube",
    duration: "3:21"
  },
  {
    id: 4,
    title: "Championship Football Edit",
    category: "football",
    description: "Emotional football highlights capturing the intensity and passion of championship moments with cinematic flair.",
    thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    views: "3.1M",
    engagement: "18.9%",
    platform: "Social Media",
    duration: "1:45"
  },
  {
    id: 5,
    title: "Luxury Brand eCommerce Ad",
    category: "ecommerce",
    description: "Sophisticated product advertisement showcasing luxury items with premium aesthetics and compelling storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    views: "1.2M",
    engagement: "9.8%",
    platform: "Facebook/Instagram",
    duration: "1:00"
  },
  {
    id: 6,
    title: "Documentary: Urban Life",
    category: "documentary",
    description: "Compelling documentary segment exploring urban culture with authentic storytelling and professional color grading.",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    views: "654K",
    engagement: "11.2%",
    platform: "Documentary Channel",
    duration: "8:15"
  },
  {
    id: 7,
    title: "Color Grading Showcase",
    category: "color-grading",
    description: "Before and after demonstration of professional color grading techniques transforming ordinary footage into cinematic gold.",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    views: "445K",
    engagement: "14.7%",
    platform: "Educational",
    duration: "2:30"
  },
  {
    id: 8,
    title: "Anime Music Video",
    category: "anime",
    description: "Dynamic anime music video with synchronized editing, visual effects, and seamless scene transitions.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    views: "2.7M",
    engagement: "22.4%",
    platform: "YouTube/TikTok",
    duration: "3:45"
  },
  {
    id: 9,
    title: "Brand Campaign Ad",
    category: "ads",
    description: "Multi-platform advertising campaign with consistent branding and optimized versions for different social media platforms.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    views: "1.9M",
    engagement: "13.6%",
    platform: "Multi-platform",
    duration: "1:15"
  }
];

// Global variables
let currentTestimonial = 0;
let portfolioItems = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing EditKaro app...');
  initializeNavigation();
  initializePortfolio();
  initializeTestimonials();
  initializeModal();
  initializeAnimations();
  initializeContactForm();
  initializeRippleEffect();
  initializeSmoothScroll();
  console.log('App initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');

  if (!navToggle || !navMenu || !navbar) {
    console.error('Navigation elements not found');
    return;
  }

  // Mobile menu toggle
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      
      // Handle smooth scroll for navigation links
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar background on scroll
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.15)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
    
    // Hide/show navbar on scroll
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Portfolio functionality
function initializePortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!portfolioGrid) {
    console.error('Portfolio grid not found');
    return;
  }

  console.log('Rendering portfolio items...');
  renderPortfolio(portfolioData);
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter portfolio items
      filterPortfolio(filter);
    });
  });

  console.log(`Portfolio initialized with ${portfolioData.length} items`);
}

function renderPortfolio(items) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  portfolioGrid.innerHTML = '';
  
  items.forEach((item, index) => {
    const portfolioItem = createPortfolioItem(item, index);
    portfolioGrid.appendChild(portfolioItem);
  });
  
  portfolioItems = document.querySelectorAll('.portfolio-item');
  console.log(`Rendered ${portfolioItems.length} portfolio items`);
}

function createPortfolioItem(item, index) {
  const portfolioItem = document.createElement('div');
  portfolioItem.className = 'glass-card portfolio-item fade-in';
  portfolioItem.setAttribute('data-category', item.category);
  portfolioItem.setAttribute('data-id', item.id);
  portfolioItem.style.animationDelay = `${index * 0.1}s`;
  
  portfolioItem.innerHTML = `
    <img src="${item.thumbnail}" alt="${item.title}" class="portfolio-thumbnail" loading="lazy">
    <div class="portfolio-overlay">
      <h3 class="portfolio-title">${item.title}</h3>
      <p class="portfolio-description">${item.description}</p>
      <div class="portfolio-meta">
        <span class="portfolio-category">${item.category.replace('-', ' ')}</span>
        <span>${item.views} views</span>
        <span>${item.duration}</span>
      </div>
    </div>
  `;
  
  // Add click event to open modal
  portfolioItem.addEventListener('click', function() {
    console.log('Opening modal for:', item.title);
    openVideoModal(item);
  });
  
  return portfolioItem;
}

function filterPortfolio(filter) {
  portfolioItems.forEach((item, index) => {
    const category = item.getAttribute('data-category');
    
    if (filter === 'all' || category === filter) {
      item.classList.remove('hidden');
      item.style.display = 'block';
      item.style.animation = `slideUp 0.5s ease-out ${index * 0.05}s forwards`;
    } else {
      item.classList.add('hidden');
      item.style.display = 'none';
    }
  });
  
  console.log(`Filtered portfolio by: ${filter}`);
}

// Modal functionality
function initializeModal() {
  const videoModal = document.getElementById('video-modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');

  if (!videoModal || !modalClose || !modalOverlay) {
    console.error('Modal elements not found');
    return;
  }

  modalClose.addEventListener('click', closeVideoModal);
  modalOverlay.addEventListener('click', closeVideoModal);
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      closeVideoModal();
    }
  });
}

function openVideoModal(item) {
  const videoModal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalViews = document.getElementById('modal-views');
  const modalEngagement = document.getElementById('modal-engagement');
  const modalPlatform = document.getElementById('modal-platform');

  if (!videoModal || !modalVideo) {
    console.error('Modal elements not found');
    return;
  }

  modalVideo.src = item.videoUrl;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalViews.textContent = `${item.views} views`;
  modalEngagement.textContent = `${item.engagement} engagement`;
  modalPlatform.textContent = item.platform;
  
  videoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Play video after a short delay
  setTimeout(() => {
    modalVideo.play().catch(e => console.log('Video autoplay prevented:', e));
  }, 300);
}

function closeVideoModal() {
  const videoModal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');

  videoModal.classList.add('hidden');
  document.body.style.overflow = '';
  modalVideo.pause();
  modalVideo.src = '';
}

// Testimonials carousel
function initializeTestimonials() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!testimonialCards.length || !prevBtn || !nextBtn) {
    console.error('Testimonial elements not found');
    return;
  }

  showTestimonial(currentTestimonial);
  
  nextBtn.addEventListener('click', function() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });
  
  prevBtn.addEventListener('click', function() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    });
  });
  
  // Auto-advance testimonials
  setInterval(function() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  }, 6000);

  console.log('Testimonials initialized');
}

function showTestimonial(index) {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const indicators = document.querySelectorAll('.indicator');

  testimonialCards.forEach((card, i) => {
    card.classList.remove('active', 'prev');
    
    if (i === index) {
      card.classList.add('active');
    } else if (i < index) {
      card.classList.add('prev');
    }
  });
  
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Contact form handling
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  const projectTypeSelect = document.getElementById('project-type');

  if (!contactForm) {
    console.error('Contact form not found');
    return;
  }

  // Fix the dropdown issue by ensuring it retains selected value
  if (projectTypeSelect) {
    projectTypeSelect.addEventListener('change', function() {
      console.log('Project type selected:', this.value);
      this.setAttribute('data-selected', this.value);
    });
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', data);
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.querySelector('span').textContent;
    
    submitButton.querySelector('span').textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      submitButton.querySelector('span').textContent = 'Message Sent!';
      
      setTimeout(() => {
        submitButton.querySelector('span').textContent = originalText;
        submitButton.disabled = false;
        contactForm.reset();
      }, 2000);
    }, 1500);
  });

  console.log('Contact form initialized');
}

// Ripple effect for buttons
function initializeRippleEffect() {
  document.querySelectorAll('.btn--animated').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = this.querySelector('.ripple');
      if (!ripple) return;

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple-animation 0.6s linear';
      
      setTimeout(() => {
        ripple.style.animation = '';
      }, 600);
    });
  });
}

// Smooth scroll functionality
function initializeSmoothScroll() {
  // CTA buttons
  const ctaButton = document.getElementById('cta-button');
  const portfolioButton = document.getElementById('portfolio-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
  
  if (portfolioButton) {
    portfolioButton.addEventListener('click', function(e) {
      e.preventDefault();
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        const offsetTop = portfolioSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
}

// Scroll animations
function initializeAnimations() {
  const animatedElements = document.querySelectorAll('.stat-card, .service-card');
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    animationObserver.observe(el);
  });
  
  // Stats counter animation
  const statValues = document.querySelectorAll('.stat-value');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(stat => {
    statsObserver.observe(stat);
  });

  console.log('Animations initialized');
}

function animateCounter(element) {
  const text = element.textContent;
  const value = parseFloat(text.replace(/[^\d.]/g, ''));
  const suffix = text.match(/[^\d.]+$/)?.[0] || '';
  const duration = 2000;
  const steps = 60;
  const increment = value / steps;
  const stepDuration = duration / steps;
  
  let current = 0;
  let step = 0;
  
  const timer = setInterval(() => {
    step++;
    current += increment;
    
    if (step >= steps) {
      current = value;
      clearInterval(timer);
    }
    
    // Format the number appropriately
    let displayValue = Math.round(current).toString();
    element.textContent = displayValue + suffix;
  }, stepDuration);
}

// Error handling for video loading
window.addEventListener('load', function() {
  const modalVideo = document.getElementById('modal-video');
  if (modalVideo) {
    modalVideo.addEventListener('error', function() {
      console.error('Video failed to load');
      const modalDescription = document.getElementById('modal-description');
      if (modalDescription) {
        modalDescription.innerHTML = '<p style="color: var(--color-error);">Sorry, this video is currently unavailable.</p>';
      }
    });
  }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
  // Tab navigation improvements
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Expose some functions globally for debugging
window.EditkaroApp = {
  filterPortfolio,
  openVideoModal,
  closeVideoModal,
  showTestimonial,
  portfolioData
};
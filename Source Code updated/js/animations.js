// Animations JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Detect intersection with viewport
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Create intersection observer for animations
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation based on the class
        if (entry.target.classList.contains('fade-in')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        } else if (entry.target.classList.contains('slide-in-left')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        } else if (entry.target.classList.contains('slide-in-right')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
        
        // Stop observing the element after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Apply initial states and observe elements
  function setupAnimations() {
    // Fade-in animations
    document.querySelectorAll('.fade-in').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      // Add delay if specified
      if (element.classList.contains('delay-1')) {
        element.style.transitionDelay = '0.2s';
      } else if (element.classList.contains('delay-2')) {
        element.style.transitionDelay = '0.4s';
      } else if (element.classList.contains('delay-3')) {
        element.style.transitionDelay = '0.6s';
      }
      
      observer.observe(element);
    });
    
    // Slide-in-left animations
    document.querySelectorAll('.slide-in-left').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateX(-50px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      // Add delay if specified
      if (element.classList.contains('delay-1')) {
        element.style.transitionDelay = '0.2s';
      } else if (element.classList.contains('delay-2')) {
        element.style.transitionDelay = '0.4s';
      } else if (element.classList.contains('delay-3')) {
        element.style.transitionDelay = '0.6s';
      }
      
      observer.observe(element);
    });
    
    // Slide-in-right animations
    document.querySelectorAll('.slide-in-right').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateX(50px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      // Add delay if specified
      if (element.classList.contains('delay-1')) {
        element.style.transitionDelay = '0.2s';
      } else if (element.classList.contains('delay-2')) {
        element.style.transitionDelay = '0.4s';
      } else if (element.classList.contains('delay-3')) {
        element.style.transitionDelay = '0.6s';
      }
      
      observer.observe(element);
    });
  }
  
  // Run animation setup
  setupAnimations();
  
  // Add hover animations for benefit cards
  const benefitCards = document.querySelectorAll('.benefit-card');
  
  benefitCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.benefit-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.benefit-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add subtle parallax effect on scroll
  let heroImage = document.querySelector('.hero-image');
  let ingredientsImage = document.querySelector('.ingredients-image');
  
  window.addEventListener('scroll', function() {
    if (heroImage) {
      const scrollPosition = window.scrollY;
      const parallaxOffset = scrollPosition * 0.1;
      
      if (parallaxOffset < 50) { // Limit the parallax effect
        heroImage.style.transform = `translateY(${parallaxOffset}px)`;
      }
    }
    
    if (ingredientsImage) {
      const rect = ingredientsImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPosition = rect.top;
        const parallaxOffset = scrollPosition * 0.05;
        
        ingredientsImage.style.transform = `translateY(${parallaxOffset}px)`;
      }
    }
  });
  
  // Add shine effect to CTAs
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-large');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      // Create shine effect
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      
      const shine = document.createElement('span');
      shine.style.position = 'absolute';
      shine.style.top = '0';
      shine.style.left = '-100%';
      shine.style.width = '100%';
      shine.style.height = '100%';
      shine.style.background = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)';
      shine.style.transform = 'skewX(-25deg)';
      shine.style.transition = 'all 0.6s ease';
      
      this.appendChild(shine);
       
      
      // Animate shine
      setTimeout(() => {
        shine.style.left = '100%';
      }, 50);
      
      // Remove shine element after animation completes
      setTimeout(() => {
        shine.remove();
      }, 650);
    });
  });
});
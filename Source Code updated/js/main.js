// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }
  
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScrollY = window.scrollY;
  });
  // FAQ

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
   });
  }
  // Testimonial Slider
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  
  function showSlide(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % testimonialCards.length;
      showSlide(currentSlide);
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
      showSlide(currentSlide);
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
    });
  });
  
  // Automatic testimonial rotation
  setInterval(function() {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
  }, 8000);
  
  // Countdown Timer
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  
  if (hoursElement && minutesElement && secondsElement) {
    // Set the initial time (24 hours from now)
    let totalSeconds = 24 * 60 * 60;
    
    function updateTimer() {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      hoursElement.textContent = hours.toString().padStart(2, '0');
      minutesElement.textContent = minutes.toString().padStart(2, '0');
      secondsElement.textContent = seconds.toString().padStart(2, '0');
      
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        // Reset the timer when it reaches zero (to 24 hours)
        totalSeconds = 24 * 60 * 60;
      }
    }
    
    // Update timer initially and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  // Newsletter Form Submission
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      if (email) {
        // Simulate form submission (would be replaced with actual API call)
        emailInput.value = '';
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for subscribing!';
        successMessage.style.color = '#C1D9B2';
        successMessage.style.fontWeight = '600';
        successMessage.style.marginTop = '8px';
        
        // Remove any existing messages and add new one
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
          existingMessage.remove();
        }
        
        newsletterForm.after(successMessage);
        
        // Remove message after 3 seconds
        setTimeout(() => {
          successMessage.style.opacity = '0';
          successMessage.style.transition = 'opacity 0.5s ease';
          setTimeout(() => successMessage.remove(), 500);
        }, 3000);
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // If mobile menu is open, close it
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Account for header height
          behavior: 'smooth'
        });
      }
    });
  });
});
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


//testimonial

 document.addEventListener('DOMContentLoaded', function() {
  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      text: "Working with this team transformed our online presence. Our website traffic increased by 150% within just three months of launching the new design.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "CEO, Startup Ventures",
      text: "The attention to detail and creative solutions provided were exceptional. They delivered exactly what we needed before the deadline.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "E-commerce Manager",
      text: "Our conversion rates improved dramatically after the website redesign. The team understood our vision perfectly and executed it flawlessly.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "David Wilson",
      role: "Founder, Creative Agency",
      text: "Reliable, professional, and talented. We've worked with many developers, but this team stands out for their communication and quality of work.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const sliderContainer = document.querySelector('.slider-container');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000; // 5 seconds

  // Create slides
  function createSlides() {
    testimonials.forEach((testimonial, index) => {
      // Create slide element
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
      
      slide.innerHTML = `
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
        <div class="testimonial-content">
          <p class="testimonial-text">"${testimonial.text}"</p>
          <h3 class="testimonial-author">${testimonial.name}</h3>
          <p class="testimonial-role">${testimonial.role}</p>
        </div>
      `;
      
      sliderContainer.appendChild(slide);
      
      // Create dots
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
      
      // Add click event to dots
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Reset all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Activate current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
    
    // Reset the auto-slide timer
    resetInterval();
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(currentSlide);
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(currentSlide);
  }

  // Auto slide
  function startInterval() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Reset interval
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Initialize slider
  createSlides();
  startInterval();
});



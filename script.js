const toggleButton = document.getElementById('toggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');


toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  overlay.classList.toggle('hidden'); 
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
});

const menuItems = document.querySelectorAll('#mobileMenu li a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });
});

    gsap.to(".icon-container", {
      xPercent: -50,
      ease: "none", 
      duration: 20, 
      repeat: -1,
  });

    gsap.from('#asset', {
      y: 60,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });


      
      gsap.registerPlugin(ScrollTrigger);
  
      //Animate hero section on scroll
      gsap.from("#hero", {
        scale:0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#hero",
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });
  
      // Animate skills section on scroll
      gsap.from(".opanim-left", {
        opacity:0,
        x: -500,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#tools",
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

      gsap.from(".opanim-right", {
        scale:0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#tools ",
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

     
  
      // Animate projects section on scroll
      gsap.from(".apear", {
        scale:0,
        duration:1,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none reset"
        },
        stagger: 0.5,
      });

      gsap.from(".blog-apear", {
        scale:0,
        duration: 1,
        scrollTrigger: {
          trigger: "#Blogs",
          start: "top 80%",
          toggleActions: "play none none reset"
        },stagger:0.5,
      });
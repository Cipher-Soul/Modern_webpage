let menu = document.querySelector("#toggle")


menu.addEventListener('click', () => {
    let sm_menu = document.querySelector(".mobile")
    sm_menu.classList.toggle('hidden') 
  })

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
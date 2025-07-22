 window.onload = function () {
    // === WHATSAPP DISPLAY LOGIC ===
    const contactmain = document.getElementById("via-mobile");
    const content1 = document.getElementById("whatsapp-contact");

    if (contactmain && content1) {
      contactmain.addEventListener("click", function () {
        content1.style.display = "block";
        contactmain.style.display = "none";
      });
    }

    // === NOTIFICATION LOGIC ===
    const txtbutton = "This message is from our team";
    const button = document.getElementById("button");

    if (button) {
      button.addEventListener("click", () => {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            const notification = new Notification("Progressive Web Application", {
              body: txtbutton,
              data: { hello: "world" },
              icon: "",
            });

            notification.addEventListener("error", () => {
              alert("Notification error");
            });
          }
        });
      });
    }

    console.log("Main JS fully loaded and initialized.");
  };

  // === SCROLL ANIMATION LOGIC (only one working instance) ===
  document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Optional: only animate once
        }
      });
    }, {
      threshold: 0.15
    });

    revealElements.forEach((el) => observer.observe(el));

    console.log("Scroll animation JS loaded");
  });

  if (window.innerWidth < 768) {
  model.scale.set(0.5, 0.5, 0.5); // Smaller for mobile
} else {
  model.scale.set(1, 1, 1);
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enableRotate = true;
controls.enablePan = false;
controls.enableDamping = true;

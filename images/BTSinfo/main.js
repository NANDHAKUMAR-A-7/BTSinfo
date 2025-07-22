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
          console.log("The user accepted");
          const notification = new Notification("Progressive Web Application", {
            body: txtbutton,
            data: { hello: "world" },
            icon: "",
          });

          notification.addEventListener("error", (e) => {
            alert("Notification error");
          });
        }
      });
    });
  }

  console.log("Main JS fully loaded and initialized.");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.6 });

const section = document.querySelectorAll('.trans');
observer.observe(section);
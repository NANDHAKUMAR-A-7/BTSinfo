//add service worker connection

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("pwa-cache").then(function (cache) {
      return cache.addAll(["/", "/manifest.json", "/icon.png"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

// add event listener for send button

const sendbtn = document.getElementById("sendbtn");
const username = document.getElementById("name");
const mail = document.getElementById("email");
const message = document.getElementById("message");

message.addEventListener("click", function (event) {
  console.log(event.target);
  sendbtn.style.display = "block";
});
sendbtn.addEventListener("click", function (event) {
  alert(
    "Get Replay As Soon As Once Our Team Receive Your Message ! ...Thank You For Contacting Us."
  );
});

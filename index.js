//prog for  time delay

// Wait 3 seconds then fade out and redirect
setTimeout(() => {
const popup = document.getElementById("popup");
popup.classList.add("fade-out");

// Optional: add small delay before redirect to allow fade
setTimeout(() => {
window.location.href = "index1.html"; // Change to your main page
}, 500);
}, 2000);

// end of prog time delay.



const contactmain = document.getElementById("via-mobile");
const content1 = document.getElementById("whatsapp-contact");

function display(){
   contactmain.addEventListener("click",function() {
   content1.style.display = "block";
   contactmain.style.display = "none";
   });
}
console.log((display()));

console.log("Main JS loaded.");

var txtbutton = "this message is from out team";
const button = document.getElementById("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("The user accepted");
      const notification = new Notification("Progressive Web Application", {
        body: `${txtbutton}`,
        data: { hello: "world" },
        icon: "",
      });

      notification.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
  const butn = document.createElement("button");
  butn.innereText = "Close";
});

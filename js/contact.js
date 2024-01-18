const singlebutton = document.getElementById("singlebutton");
const Subject = document.getElementById("Subject");
const email = document.getElementById("email");
const Name = document.getElementById("name");
const phone = document.getElementById("phone");
const message = document.getElementById("textarea");

if (window.innerWidth < 1025) {
  singlebutton.addEventListener("touchstart", () => {
    const body = message.value + "%0D%0A" + Name.value + "%0D%0A" + phone.value;
    window.location.href = `mailto:renniehair@gmail.com?subject=${Subject.value}&body=${body}`;
  });
} else {
  singlebutton.addEventListener("click", () => {
    const body = message.value + "%0D%0A" + Name.value + "%0D%0A" + phone.value;
    window.location.href = `mailto:renniehair@gmail.com?subject=${Subject.value}&body=${body}`;
  });
}

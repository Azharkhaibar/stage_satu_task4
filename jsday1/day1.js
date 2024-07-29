let nSaya = "Azhar aja";
console.log(`nama syaa : ${nSaya}, ${typeof nSaya}`);

let angka = 0;
let a = (500 + 2) * angka + (2 + 1);
console.log(a);

// perbaikan

function on_alert(...y) {
  let x = [];
  if (x !== y) {
    x = y;
    for (let i = 0; i < x.length; i++) {
      console.log(`data : ${x[i]} , tes dulu`);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
 
  const contactForm = document.getElementById("contactForm");


  if (contactForm) {
    
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

     
      let nama = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phoneNumber = document.getElementById("phone").value;
      let subject = document.getElementById("subject").value;
      let message = document.getElementById("message").value;


      console.log(`Nama: ${nama}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phoneNumber}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);

     
      contactForm.reset();
    });
  } else {
    console.error('Form with ID "contactForm" not found.');
  }
});

const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

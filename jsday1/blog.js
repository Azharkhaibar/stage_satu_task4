document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactform");
  const cardContainer = document.querySelector(".blog__card__container");

  let dataBlog = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageUpload = document.getElementById("image").files[0];

    if (!title || !content || !imageUpload) {
      alert("Please fill in all fields");
      return;
    }

    let blog = {
      title,
      content,
      imageUpload,
    };

    dataBlog.push(blog);
    console.log(dataBlog);

    displayBlogs();

    form.reset();
  });

  function displayBlogs() {
    cardContainer.innerHTML = "";

    dataBlog.forEach((blogItem, index) => {
      const imageURL = URL.createObjectURL(blogItem.imageUpload);
      const newCard = document.createElement("div");
      newCard.className = "cardblog";

      newCard.innerHTML = `
        <div class="carditemblog">
          <img src="${imageURL}" alt="Blog Image" />
          <div class="text__desc">
            <h2>${blogItem.title}</h2>
            <p>${blogItem.content}</p>
            <div class="btn">
              <button class="edit-btn" data-index="${index}">Edit</button>
              <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
          </div>
        </div>
      `;

      newCard.querySelector(".delete-btn").addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        dataBlog.splice(index, 1);
        displayBlogs();
      });

      cardContainer.appendChild(newCard);
    });
  }
});

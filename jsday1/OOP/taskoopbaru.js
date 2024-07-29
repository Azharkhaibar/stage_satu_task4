const testimonials = [
  {
    id: 1,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 2,
  },
  {
    id: 2,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 4,
  },
  {
    id: 3,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 5,
  },
  {
    id: 4,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 1,
  },
  {
    id: 5,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 5,
  },
  {
    id: 6,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 2,
  },
  {
    id: 7,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 4,
  },
  {
    id: 8,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 3,
  },
  {
    id: 9,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 5,
  },
  {
    id: 10,
    Image: "images/boy-1252771_640.jpg",
    nama: "Azhar Khaibar Asykari",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus arcu porta urna dictum dapibus. Pellentesque tellus orci, ullamcorper at ex quis, sodales elementum metus. Aenean at blandit eros.",
    author: "Fullstack Developer",
    rating: 4,
  },
];

function alltestimonial() {
  const testimonialsHTML = testimonials
    .map(
      (testi) => `
                <div class="card__testi">
                    <div class="card__testi__item">
                        <img src="${testi.Image}" alt="Testimonial Image" />
                        <div class="penjelasan">
                            <p>${testi.content}</p>
                            <h2>${testi.nama}</h2>
                            <h4>${testi.author}</h4>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
  document.getElementById("cardoop").innerHTML = testimonialsHTML;
}

function FilterTestimonial(rating) {
  const filteredTestimonialByRating = testimonials.filter((testi) => testi.rating === rating);
  const testimonialsHTML = filteredTestimonialByRating
    .map(
      (testi) => `
                <div class="card__testi">
                    <div class="card__testi__item">
                        <img src="${testi.Image}" alt="Testimonial Image" />
                        <div class="penjelasan">
                            <p>${testi.content}</p>
                            <h2>${testi.nama}</h2>
                            <h4>${testi.author}</h4>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
  document.getElementById("cardoop").innerHTML = testimonialsHTML;
}

alltestimonial();

const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

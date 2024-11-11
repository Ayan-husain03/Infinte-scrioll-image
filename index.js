const apiUrl = "https://randomfox.ca/images/";
const container = document.querySelector(".container");

const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};
console.log(randomNumber());

const getData = () => {
  const randomImageNumber = randomNumber();
  const imageUrl = `${apiUrl}${randomImageNumber}.jpg`;
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "fox image";
  image.classList.add("image");
  container.appendChild(image);
};

const loadMore = () => {
    if (window.innerHeight + window.screenY >= document.body.offsetHeight-100) {
        getData()
    }
};


// Load initial set of images
for (let i = 0; i < 12; i++) {
  getData();
}


window.addEventListener("scroll", loadMore)
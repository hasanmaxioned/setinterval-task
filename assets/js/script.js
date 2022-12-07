const imageChange = document.querySelector("#change-image");
const image = ["./assets/images/hero.jpg", "./assets/images/offer.jpg"];

let limit = 0;

if(imageChange) {
    setInterval(function () {
    imageChange.src = image[limit];
    limit++;
    if(limit >= image.length) {
      limit = 0;
    }
  }, 1000)
}

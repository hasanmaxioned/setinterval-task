const imageChange = document.querySelector("#change-image");
const image = ["./assets/images/hero.jpg", 
"./assets/images/offer.jpg", "https://images.unsplash.com/photo-1670304888915-06234ea03e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1670370809845-4e40301ef55a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"];

let limit = 0;

if(imageChange) {
    
   let time = setInterval(function () {
    imageChange.src = image[limit];
    limit++;
    if(limit >= image.length) {
      limit = 0;
      // console.log("hi");
      // clearInterval(time);
      
    }
  }, 1000)
}

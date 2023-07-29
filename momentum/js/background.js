const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

const background = document.querySelector("#background");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

background.style.backgroundImage=`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(img/${chosenImage})`;
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// Add styles to adjust the image size
bgImage.style.width = "auto"; // Fit the image to the width of the window
bgImage.style.height = "auto"; // Maintain the aspect ratio
bgImage.style.display = "block"; // Remove any default margin

document.body.appendChild(bgImage);
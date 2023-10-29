const imageGallery = document.getElementById("image-gallery");

for (let i = 0; i <16 ; i++) {
  // const imageUrl = "images(2)/w2" + "(" + (i + 1) +").png" ;
  const imageUrl = "images (2)/w2 (" + (i ) + ").png";
  const index = i + 1;

  const thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = `Image ${index}`;
  img.onclick = () => openModal(imageUrl);

  thumbnail.appendChild(img);
  imageGallery.appendChild(thumbnail);
}


// Add a function to display the image in its original size
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = imageSrc;
  modal.style.display = "block";
  modalImage.style.maxWidth = "none";
  modalImage.style.maxHeight = "none";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

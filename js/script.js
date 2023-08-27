"use strict"

const changeImageButton = document.querySelector('#change-image');
const changeTextButton = document.querySelector('#change-text');
const previewImage = document.querySelector('#preview-image');
const previewText = document.querySelector('#preview-text');
const previewSender = document.querySelector('.preview-sender');
const senderInput = document.querySelector('#sender');
const downloadButton = document.querySelector('#download');



const assetsCount = 4;
let currentImageIndex = 1;
let currentTextIndex = 1;


function changeImage() {
  currentImageIndex++;
  if(currentImageIndex > 4) {
    currentImageIndex = 1;
  }
  console.log('cambio immagine', currentImageIndex);
  previewImage.src = `./images/img_${currentImageIndex}.png`;
}

function changeText() {
    currentTextIndex++;
    if(currentTextIndex > 4) {
      currentTextIndex = 1;
    } 
    console.log('cambio testo', currentTextIndex);
    previewText.src = `./images/txt_${currentTextIndex}.png`;
  }
  
function updateSender(){

    const txt = senderInput.value;
    
    if(txt.length > 0) {
        previewSender.innerText = txt;
    } else {
        previewSender.innerText = 'Buongiornissimo Kaffeeeee'
    }
}

function downloadImage {
    htmlToImage.toJpeg(previewArea)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });
}

// EVENTI DINAMICI

changeImageButton.addEventListener('click', changeImage);
changeTextButton.addEventListener('click', changeText);
senderInput.addEventListener('input', updateSender);
downloadButton.addEventListener('click', downloadImage);



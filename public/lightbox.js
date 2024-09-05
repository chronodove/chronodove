// Lightbox elements
let lightbox = document.getElementById('lightbox');
let lightboxImage = document.getElementById('lb-img');
let lightboxCaption = document.getElementById('lightbox-caption');
let closeBtn = document.getElementById('close');

// Function to open the lightbox
function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxCaption.textContent = alt;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add click event listeners to all images
document.querySelectorAll('.lightbox-img').forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src, image.alt);
    });
});

// Add click event listener to close button
closeBtn.addEventListener('click', closeLightbox);

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target !== lightboxImage && event.target !== lightboxCaption) {
        closeLightbox();
    }
});

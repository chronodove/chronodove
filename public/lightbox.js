function openLB(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.querySelector('.img-container').innerHTML = `<img src="${imageSrc}" id="display">`;
}



function closeLB() {
    document.getElementById("lightbox").style.display = "none";
}


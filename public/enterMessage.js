//wait until all content loads, then execute the function
console.log(localStorage.getItem('popupDismissed'));
document.addEventListener('DOMContentLoader', () => {
    // variables
    const popup = document.getElementById('enter');
    const closeBtn = document.getElementById('close');
    const check = document.getElementById('noshow');

    if (true) {
        popup.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        if (check.checked) {
          localStorage.setItem('popupDismissed', 'true');
        }
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });
});
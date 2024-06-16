
//theme switcher
function setTheme(theme){
    window.theme = theme;
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.addEventListener("DOMContentLoaded", function(event){
    let savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
    }
});


//font switcher


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
function changeFont(fontName) {
    document.body.style.fontFamily = fontName;
    console.log('Font changed to '+ fontName);
    
}


document.addEventListener('DOMContentLoaded', function() {
    var savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
        changeFont(savedFont);
        // Update the font selector dropdown value
        document.getElementById('font-select').value = savedFont;
    }
});

document.getElementById('font-select').addEventListener('change', function() {
    var selectedFont = this.value;
    changeFont(selectedFont);
});
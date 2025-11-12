let time = document.getElementById('time'); 

function updateTime() {
    let clock = new Date().toLocaleTimeString();
    time.innerText = clock;
}

setInterval(updateTime, 1000); 
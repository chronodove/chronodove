//loading spinner w/notes explaining what each part of the code does
//followed this tutorial (with some edits) -> https://youtu.be/q76TexbMXJg?si=Gp5w0oSYyFKgooFB

//see if the webpage has finished loading all resources or not. if so, preform the following function 
window.addEventListener("load", () => {
    //define loader
    const LOADER = document.querySelector(".loader");
    //if it has finished loading, initialize the "loader-hidden" class; hiding the loader but continuing the animation
    LOADER.classList.add("loader-hidden");
    //checks to see if the transition is over and once it does...
    LOADER.addEventListener("transitionend", () => {
    //...completely remove loader element from html, stopping the website from continuing to play the animation 
    document.body.removeChild(LOADER);
    })
 
})
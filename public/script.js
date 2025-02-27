//go back text & action
function goBack(){
  document.write('<div class="marquee"><div class="marquee-cont">don\'t you know you can never go back?</div></div>');
   document.write('<span id="link" onclick="history.back()">go back</span>');
}

//loader

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

//define amount of articles
const amount = document.getElementsByTagName('article');
let host = window.location.href;


//show hide passages + error message for no entry
function showThis(pass){
  //console.log(pass); //for testing purposes
  //check all articles to find targeted one
  for (let i = 0; i < amount.length; i++){
    //console.log("Check: ", amount[i].id); //for testing purposes
    let target = document.getElementById(pass);
    //see if that needs to be shown or not
    if (amount[i].id === target.id){
      //console.log("actions: show!"); //for testing purposes
      amount[i].style.display = 'block';
      // amount[i].style.overflow = 'scroll';

      //check if this is the diary page 
      if (host.includes("diary.html")){
        //write a message if there was no entry
        let ps = amount[i].getElementsByTagName('p');
        if (ps.length === 0){
          //console.log("this is running"); //for testing purposes
          amount[i].innerHTML = "<p>looks like nothing's written. something awful must have happened, or she was lazy. most likely the latter.</p>"
        }
      }

    } else {
      //console.log("action: hide!"); //for testing purposes
      amount[i].style.display = 'none';
    }
  }
}

//show all entries
function reset() {
  for (let i = 0; i < amount.length; i++) {
    amount[i].style.display = 'block';
  }
}
const wrapperDiv = document.getElementById('wrapper');
//go back text & action & marquee
function addMarquee() {
  const marqueeHTML = `
      <div class="marquee-text">
          <p class="item item1">don't you know you can never go back?</p>
          <p class="item item2">don't you know you can never go back?</p>
          <p class="item item3">don't you know you can never go back?</p>
          <p class="item item4">don't you know you can never go back?</p>
          <p class="item item5">don't you know you can never go back?</p>
          <p class="item item6">don't you know you can never go back?</p>
          <p class="item item7">don't you know you can never go back?</p>
          <p class="item item8">don't you know you can never go back?</p>
      </div>
  `;
  const marqueeDiv = document.createElement('div');
  marqueeDiv.innerHTML = marqueeHTML;
  wrapperDiv.appendChild(marqueeDiv);
  
  const link = document.createElement('span');
  link.id = 'link';
  link.textContent = 'go back';
  link.onclick = function() {
      history.back();
  };
  wrapperDiv.appendChild(link); 
}

addMarquee();
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


//show & hide passages + error message for no entry only for diary page
//console logs are for testing
function showThis(pass){
  //console.log(pass); 

  //check all articles to find targeted one
  for (let i = 0; i < amount.length; i++)
  {
    //console.log("Check: ", amount[i].id);

    let target = document.getElementById(pass);

    //check for target
    if (amount[i].id === target.id)
    {
      //console.log("actions: show!");
      amount[i].style.display = 'block';

      //check if this is the diary page + write a message
      if (host.includes("diary.html"))
      {
        let ps = amount[i].getElementsByTagName('p');
        if (ps.length === 0){
          //console.log("this is running"); 

          amount[i].innerHTML = "<p>looks like nothing's written.</p>"
        }
      }

    } 
    else 
    {
      //console.log("action: hide!"); 
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


//marquee https://github.com/Vahan0799/infinite-marquee

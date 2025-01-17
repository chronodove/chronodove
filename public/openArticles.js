//define amount of articles
const amount = document.getElementsByTagName('article');
let host = window.location.href;


function showThis(pass){
  //console.log(pass);

  //check all articles to find targeted one
  for (let i = 0; i < amount.length; i++){
    //console.log("Check: ", amount[i].id);
    let target = document.getElementById(pass);
    //see if that needs to be shown or not
    if (amount[i].id === target.id){
      //console.log("actions: show!");
      amount[i].style.display = 'block';
      amount[i].style.overflow = 'scroll';

      //check if this is the diary page 
      if (host.includes("diary.html")){
        let ps = amount[i].getElementsByTagName('p');
        if (ps.length === 0){
          console.log("this is running");
          amount[i].innerHTML = "<p>looks like nothing was written. i wonder what happened.</p>"
        }
      }

    } else {
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



//continuously check for empty articles
for(let i = 0; i < amount.length; i++){
  if (amount[i].getElementsByTagName('p')){

  }
}
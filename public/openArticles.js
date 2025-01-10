//define amount of articles
const amount = document.getElementsByTagName('article');
function showThis(pass){
  //console.log(pass);
  //define chosen article
  const target = document.getElementById(pass);
  //check all the elements
  for (let i = 0; i < amount.length; i++){
    //console.log("Check: ", amount[i].id);
    //see if that needs to be shown or not
    if (amount[i].id ===  target.id){
      //console.log("actions: show!");
      amount[i].style.display = 'block';
      amount[i].style.overflow = 'scroll';
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
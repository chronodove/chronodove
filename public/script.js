//date function
/*window.addEventListener('DOMContentLoaded', () => {
   const d = new Date();
   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

   let day = d.getDay() + 1;
   let month = months[d.getMonth()];

   

});*/


//navigation
function goBack(){
   document.write('<span id="link" onclick="history.back()">go back</span>');
}
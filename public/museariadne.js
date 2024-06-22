// Array of articles with their title and content
let articles = [
    {
      title: "week of 6/17",
      content: `<p><i>being sleepy is being a jellyfish</p><p>tiredly drifting away</p><p>waiting for the day to end</i></p><br><p>i repurposed this poem from my english class this year with some changes. it's pretty straight-forward, i was so tired in class lol.</p><p>when i think of jellyfishes i think of sleepy little guys, silly little guys with no energy and waiting for the day to end. in the meantime, they'll just float around aimlessly until they can rest...</p><p>they're always "go with the flow" and aren't bothered by anything! until they get eaten by a turtle.</p>`
    },
    {
      title: "",
      content: ``
    }
    // Add more articles as needed
  ];
  
  function openPopup(articleId) {
    let popup = document.getElementById("popup");
    let popupTitle = document.getElementById("popup-title")
    let popupText = document.getElementById("popup-text");
  
    // Get the article object based on its index in the array
    let article = articles[articleId];
  
    // Generate the content for the popup using the article object
    popupText.innerHTML = "<h2>" + article.title + "</h2>" + article.content;
    popup.style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
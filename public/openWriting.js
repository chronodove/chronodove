// Array of articles with their title and content
let articles = [
    {
      title: "Title 1",
      content: "<p>place holder number 1!</p>"
    },
    {
      title: "Title 2",
      content: "<h4>placeholder number 2!</h4>"
    }
    // Add more articles as needed
  ];
  
  function openPopup(articleId) {
    let popup = document.getElementById("popup");
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
  
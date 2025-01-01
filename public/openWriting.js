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
  
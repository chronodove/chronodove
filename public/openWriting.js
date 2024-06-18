// Array of articles with their title and content
let articles = [
    {
      title: "How to Display MS Fonts on Linux",
      content: "<p>when i first switched to linux, i didn't know just how much websites would change. especially on neocities.</p><p>this sites favourite font (and mine) is <b>MS PGothic.</b> with the MS standing for microsoft. </p><p>looking back now, i feel so embarrassed for not figuring this out further, so to heal my ashamed heart, i'll tell how i solved this. 5 months later.</p><p><b>you had to download them separately</b></p><p>microsoft fonts are already preinstalled within windows, allowing for the use and ability to display on websites using them.</p><p>if the appropriate file is not installed on the system, the browser is not able to fetch it and falls back on another font listed. if there is no other font listed, it will default to serif.</p><p>this is also why secondary fonts are important to make your site look as good as you'd like it.</p><h4>so, how do you download these fonts on linux?</h4><p>first, you'll need to find the fonts. you can find a lot of fonts on github or just googling the font you need. this can be risky, however so always check with something like virustotal or another file checker just for safe measure.</p><p>next, you'll need to load it into your system. i'm using endeavourOS with KDE Plasma desktop environment, so the settings might look different, but the steps should be the same.</p><p>navigate to the <b>FONTS</b> section in your settings. for me it looks like this.</p><img src='https://images2.imgbox.com/2a/b0/FAFxSDwz_o.png' alt='screenshot of settings to fonts'/><p>then go to something along the lines of <b>FONT MANAGEMENT.</b> click <b>import from file</b> and select your text file. i'm under the assumption that .woff, .ttf & others should work.</p><img src='https://images2.imgbox.com/d6/f7/NdsAMOvd_o.png' alt='screenshot of font management/><p>at first, it'll look like nothing happened, but that should mean it worked! to confirm, open your browser with that font and see if it displays, if everything was done correctly, you should see it!</p><p>i was absolutely stumped on this for a shameful amount of time, not even the stack sites would help me...but hopefully this helped you in some way or you've learned something new!!</p>"
    },
    {
      title: "writing prac 1",
      content: `<p>trying to write more often, this is just a brain exercise i did. i dissected the reasons as to why i feel so sad often.</p><p><em>How we are born to invent our own miseries! - Sophia Lee</em></p><h3>1) it's familiar</h3><p>when you've felt something for so long, you are bound to become accustomed to it.</p><h3>2) it's easy</h3><p>it's easier to say /"woe is me!/" than "i should change/"</p><h3>3) it's instinct</h3><p>you are not used to changing, you are used to sitting in the hole you've dug</p><h3>4) it's what you're good at</h3><p>i like being good at things</p><h3>5) it's reliable</h3><p>it's always there for you</p><h3>6) it's persistent</h3><p>it's always there (zoloft or not)</p><h3>7) it's scary</h3><p>i constantly long for happiness, but when i get the opportunity to have it, i run and hide in my filthy den.</p>`
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
  
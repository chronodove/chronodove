//wolf text
function randomtxt() {
  idArray = new Array()
  idArray [0] = "Did you know that the webmaster has an INSANE hatred of ants?"
  idArray [1] = "Dove found her username from a random username generator, funky."
  idArray [2] = "Her favorite dog species are bernese mountain dogs and australian shepherds." 
  idArray [3] = "She loves working with numbers, her favorite subject is math!"
  idArray [4] = "Don't tell her I told you this, <small>but she used to be a gacha kid when she was 9!</small>"
  idArray [5] = "She's allergic to nuts and eggs, she hates going out to eat since most foods have those..."
  idArray [6] = "She hasn't ever broken a bone."
  idArray [7] = "She's born in November during a snow storm!"
  idArray [8] = "Her favorite show of all time is Spongebob!"
  idArray [9] = "My name came from Dove's cousins girlfriend! I don't know why either!!"
  idArray [10] = "Her favorite colours are grey, black and red."
  idArray [11] = "She absolutely LOVES potatoes, like an insane amount."
  idArray [12] = "If you look her in the eyes she'll either stare back at you making you uncomfortable, or start crying. No inbetween."
  idArray [13] = "Did you know she loves taking random quizzes? You should check them out sometime!"
  idArray [14] = "You know the header on the homepage? Those quotes are from her favorite songs!"
  idArray [15] = "Aside from dogs, she also loves seals and birds!"
  idArray [16] = "She loves motorcyles, she hopes to get one some day!"
  idArray [17] = "Her favorite car is the 1997 Miata! She says \"they're such silly cars!!!!!\""
  idArray [18] = "Her favorite game of all time is Red Dead Redemption!"
  idArray [19] = "Her favorite books of all time are \"The Sky in the Deep\" and \"Monday's not Coming\"!"
  idArray [20] = "Despite loving creepy things, she can't stand zombies! They freak her out too much."
  document.getElementById("random").onclick = randomtxt;
  randomText = Math.floor(Math.random()*18);

  document.getElementById("p").innerHTML = idArray[randomText];
}

//popup 
function popup() {
  let p = document.getElementById("popup");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}


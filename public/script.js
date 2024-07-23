//random header text
let theText = new Array()
theText[0] = 'and i just, let bad thoughts, linger for far too long';
theText[1] = 'if i could, id be your little spoon';
theText[2] = 'the chemicals will bring you home again';
theText[3] = 'i know now, that i am homeward bound';
theText[4] = 'cruel, cruel world must i go on';
theText[5] = 'in love with a ghost, please don\'t come back';
theText[6] = 'in your head, in your head, they are crying';
theText[7] = 'im so sick infected with where i live';
theText[8] = 'colour me grey';
theText[9] = 'its not that bad when its face to face';
theText[10] = 'when you cried i wiped away all of your tears';
theText[11] = 'all my life i\'ve been waiting for you to bring a fairytale my way';
theText[12] = 'called to the devil and the devil said "hey? why you calling this late?"';
theText[13] = 'its so far, so far away';
theText[14] = 'i stand in the valley watching it';
theText[15] = 'but living in a fantasy without meaning';
theText[16] = 'so please, please, please';
theText[17] = 'snakes in love together as one';
theText[18] = 'im worse at what i do best';
theText[19] = 'breathe out, so i can breathe you in';
theText[20] = 'look at the stars, look how they shine for you';
theText[21] = 'im liquid smooth, come touch me too';
theText[22] = 'i think i\'d rather crucify than learn';
theText[23] = 'lie after lie, after lie, after lie';
theText[24] = 'my heart will never be, will never see, will never know';
theText[25] = 'ooh baby it\'s raining, raining. you can always come into me, come into me!';
theText[26] = 'time is a valuable thing, watch it fly by as the pendulum swings';
theText[27] = 'kattan main kiven din teri saun, tere bin, main toh jiyan naa mara!';
theText[28] = 'so many times i\'ve lied';
theText[29] = 'you are, everything. my most, demanding dream';
theText[30] = 'i don\'t believe that anybody, feels the way i do, about you now';
theText[31] = 'what\'s the matter, what\'s the matter, what\'s the matter you?!';
theText[32] = 'what\'s the matter babe, are you feeling blue?';
theText[33] = `i know i\'d never be, me, without the security;`;
theText[34] = `if the time that i was by your side just chokes you through the night`;
theText[35] = `bingo, bingo baby, i love you ain't that crazy!`;
theText[36] = `como la flor (como la flor) con tanto amor (con tanto amor)`;
theText[37] = `that big yellow moon, will light the way back to the on you love`;
theText[38] = `what a waste, army dreamers`;

let j = 0;
let p = theText.length;
let preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = theText[i]
}
let whichText = Math.round(Math.random()*(p-1));
function showText(){
//wrapper for the text array it can be changed if need
document.write('<h1 class="thetext">'+theText[whichText]+'<span class="cursor">_</span></h1>');
}
//navigation
function navigation(){
   document.write('&dagger;<a href="index.html"><h3>home</h3></a>&dagger;<a href="about.html"><h3>about</h3></a>&dagger;<a href="diary.html"><h3>journal</h3></a>&dagger;<a href="writing.html"><h3>writings</h3></a>&dagger;<a href="sitemap.html"><h3>extras</h3></a>&dagger;<a href="https://chronodove.atabook.org/"><h3>guestbook</h3></a>&dagger;<a href="credits.html"><h3>credits/resources</h3></a>&dagger;')
}

//footer
function footer(){
   document.write('<a href="https://neocities.org/site/chronodove">chronodove</a> <img src="https://i.postimg.cc/ZY2LpPYq/WYOXEzM.gif" alt="teeth opening and closing"> &cir; 2023');
}
//sample tooltip code

/*window.onload = function(){
   const TARGET = document.getElementById('tooltip-content');
   const TEXT = document.getElementById('tooltip-text');

   TARGET.addEventListener('mouseover', () => {
      TEXT.style.display = 'block';
   }, false);

   TARGET.addEventListener('mouseleave', () => {
      TEXT.style.display = 'none';
   }, false);
}*/
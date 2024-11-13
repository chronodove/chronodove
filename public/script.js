//random header text
let t = new Array()
t[0] = 'and i just, let bad thoughts, linger for far too long';
t[1] = 'if i could, id be your little spoon';
t[2] = 'the chemicals will bring you home again';
t[3] = 'i know now, that i am homeward bound';
t[4] = 'cruel, cruel world must i go on';
t[5] = 'in love with a ghost, please don\'t come back';
t[6] = 'in your head, in your head, they are crying';
t[7] = 'im so sick infected with where i live';
t[8] = 'colour me grey';
t[9] = 'its not that bad when its face to face';
t[10] = 'when you cried i wiped away all of your tears';
t[11] = 'all my life i\'ve been waiting for you to bring a fairytale my way';
t[12] = 'called to the devil and the devil said "hey? why you calling this late ?"';
t[13] = 'its so far, so far away';
t[14] = 'i stand in the valley watching it';
t[15] = 'but living in a fantasy without meaning';
t[16] = 'so please, please, please';
t[17] = 'snakes in love together as one';
t[18] = 'im worse at what i do best';
t[19] = 'breathe out, so i can breathe you in';
t[20] = 'look at the stars, look how they shine for you';
t[21] = 'im liquid smooth, come touch me too';
t[22] = 'i think i\'d rather crucify than learn';
t[23] = 'lie after lie, after lie, after lie';
t[24] = 'my heart will never be, will never see, will never know';
t[25] = 'ooh baby it\'s raining, raining. you can always come into me, come into me !';
t[26] = 'time is a valuable thing, watch it fly by as the pendulum swings';
t[27] = 'kattan main kiven din teri saun, tere bin, main toh jiyan naa mara!';
t[28] = 'so many times i\'ve lied';
t[29] = 'you are, everything. my most, demanding dream';
t[30] = 'i don\'t believe that anybody, feels the way i do, about you now';
t[31] = 'what\'s the matter, what\'s the matter, what\'s the matter you ? !';
t[32] = 'what\'s the matter babe, are you feeling blue?';
t[33] = `i know i\'d never be, me, without the security;`;
t[34] = `if the time that i was by your side just chokes you through the night`;
t[35] = `bingo, bingo, baby, i love you ain't that crazy!`;
t[36] = `como la flor (como la flor) con tanto amor (con tanto amor)`;
t[37] = `that big yellow moon, will light the way back to the one you love`;
t[38] = `what a waste, army dreamers`;
t[40] = `i'm not bored, or unhappy i'm still so strange and wild`;
t[41] = `i'll protect you my child, i'm forever strong`;
t[42] = `wait, they don't love you like i love you`;
t[43] = `find your name, do it all the same`;
t[44] = `the hate in my heart, it drives me so far `;
t[45] = `kan verbrennen, kan euch blenden`;
t[46] = `here they come, those feelings again !`;
t[47] = `and he doesn't give a damn about me`;
t[48] = `i walk because i was born`;
t[49] = `what a lovely hiding place`;
t[50] = `laughing while my heart hurts`;
t[51] = `haven't i given enough ? given enough ?`;
t[52] = `call me later, call me later`;
t[53] = `kirai demo、daisuki nano !`;
t[54] = `bloody angel, you're so pure`;
t[55] = `todokanai yume mite`;
t[56] = `it goes on and on and the record's spinning`;
t[57] = `sonna tokikso (sousa)`;
t[58] = `kesenai kizu name au yō ni`;
t[59] = `atashi vampire !`;
t[60] = `tada tachitsukusu dake mō iyananda`;
t[61] = `boku igai ga mabushi sugite`;
t[62] = `uragiri no seitō-ka konoyo ni kamisama wa inai ne`;

let j = 0;
let p = t.length;
let preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = t[i]
}

let whichText = Math.round(Math.random()*(p-1));
function showText(){
   //wrapper for the text array it can be changed if need
   document.write('<h1 class="t">'+t[whichText]+'<span class="cursor">_</span></h1>');
}

//navigation
function navigation(){
   document.write('&dagger;   <a href="index.html"><h3>home</h3></a>   &dagger;   <a href="about.html"><h3>about</h3></a>   &dagger;   <a href="diary.html"><h3>journal</h3></a>   &dagger;   <a href="dream.html"><h3>dreams</h3></a>   &dagger;   <a href="writing.html"><h3>writing</h3></a>   &dagger;   <a href="https://chronodove.atabook.org/"><h3>guestbook</h3></a>   &dagger;   <a href="credits.html"><h3>credits/resources</h3></a>   &dagger;');
}

//footer
function footer(){
   document.write('<a href="https://neocities.org/site/chronodove">chronodove</a>&nbsp;<img src="https://i.postimg.cc/ZY2LpPYq/WYOXEzM.gif" alt="teeth opening and closing"> &cir; 2023');
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
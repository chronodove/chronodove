//random header text
let t = new Array()
t[0] = 'and i just, let bad thoughts, linger for far too long';
t[1] = 'if i could, id be your little spoon';
t[2] = 'the chemicals will bring you home again !';
t[3] = 'i know now, that i am homeward bound';
t[4] = 'cruel, cruel world must i go on ?';
t[5] = 'in love with a ghost, please don\'t come back';
t[6] = 'in your head, in your head, they are crying';
t[7] = `i'm so sick infected with where i live`;
t[8] = 'colour me grey';
t[9] = 'it\'s not that bad when its face to face';
t[10] = 'when you cried i wiped away all of your tears';
t[11] = 'all my life i\'ve been waiting for you to bring a fairytale my way';
t[12] = 'called to the devil and the devil said "hey? why you calling this late ?"';
t[13] = `it's so far, so far away`;
t[14] = 'i stand in the valley watching it';
t[15] = 'but living in a fantasy without meaning';
t[16] = 'so please, please, please';
t[17] = 'snakes in love together as one';
t[18] = 'i\'m worse at what i do best';
t[19] = 'breathe out, so i can breathe you in';
t[20] = 'look at the stars, look how they shine for you';
t[21] = 'im liquid smooth, come touch me too';
t[22] = 'i think i\'d rather crucify than learn';
t[23] = 'lie after lie, after lie, after lie';
t[24] = 'my heart will never be, will never see, will never know';
t[25] = 'ooh baby it\'s raining, raining. you can always come into me, come into me !';
t[26] = 'time is a valuable thing, watch it fly by as the pendulum swings';
t[27] = 'kattan main kiven din teri saun, tere bin, main toh jiyan naa mara !';
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
t[39] = `i'm not bored, or unhappy i'm still so strange and wild`;
t[40] = `i'll protect you my child, i'm forever strong`;
t[41] = `wait, they don't love you like i love you`;
t[42] = `find your name, do it all the same`;
t[43] = `the hate in my heart, it drives me so far `;
t[44] = `kan verbrennen, kan euch blenden`;
t[45] = `here they come, those feelings again !`;
t[46] = `and he doesn't give a damn about me`;
t[47] = `i walk because i was born`;
t[48] = `what a lovely hiding place`;
t[49] = `laughing while my heart hurts`;
t[50] = `haven't i given enough ? given enough ?`;
t[51] = `call me later, call me later`;
t[52] = `kirai demo, daisuki nano !`;
t[53] = `bloody angel, you're so pure`;
t[54] = `todokanai yume mite`;
t[55] = `it goes on and on and the record's spinning`;
t[56] = `sonna tokikso (sousa)`;
t[57] = `kesenai kizu name au yo ni`;
t[58] = `atashi vampire !`;
t[59] = `tada tachitsukusu dake mo iyananda`;
t[60] = `boku igai ga mabushi sugite`;
t[61] = `uragiri no seito-ka konoyo ni kamisama wa inai ne`;
t[62] = `dare mo ga furimuku onna ni naru !!`;
t[63] = `donna ni kyou o ikinuite mo mukuwarenu everyday !!`;


//array length NOT the string length
let p = t.length;
//math.random is a float, so the round method is needed to convert it into an integer
//returns the (rounded) number from 0 -> 62 (actually 0 -> 63). the minus 1 is needed as it prevents an out of bounds error. 
// this is because it starts from 0, so the actual amount of strings saved is actually 63. had it started from 1, it would be 62. then it wouldn't be needed.
//math.random does NOT generate the number 1, but it gets extremely close. so if the value was a number close to 1, say 0.999 and we multiply by the amount of strings, 63, we would get something like 62.9. afterwards, it gets rounded up to 63. thereby causing the out of bound error.
//it is VERY IMPORTANT to remember that math.random generates floating numbers from 0, WHICH IS INCLUDED to 1, WHICH IS EXCLUDED!! 
let whichText = Math.round(Math.random()*(p-1));

function showText(){
   //writes the text
   document.write('<i>"'+t[whichText]+'"</i>');
}
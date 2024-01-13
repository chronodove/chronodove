let theText = new Array()

 
theText[0] = 'and i just, let bad thoughts, linger for far too long';
theText[1] = 'if i could, id be your little spoon';
theText[2] = 'the chemicals will bring you home again';
theText[3] = 'i know now, that i am homeward bound';
theText[4] = 'cruel, cruel world';
theText[5] = 'in love with a ghost, please dont come back';
theText[6] = 'in your head, in your head, they are crying';
theText[7] = 'im so sick infected with where i live';
theText[8] = 'colour me grey';
theText[9] = 'its not that bad when its face to face';
theText[10] = 'when you cried i wiped away all of your tears';
theText[11] = 'for you to bring a fairytale my way';
theText[12] = 'aint shit free but fallin out';
theText[13] = 'its so far, so far away';
theText[14] = 'i stand in the valley watching it';
theText[15] = 'but living in a fantasy without meaning';
theText[16] = 'so please, please, please';
theText[17] = 'snakes in love together as one';
theText[18] = 'im worse at what i do best';
theText[19] = 'breathe out, so i can breathe you in';
theText[20] = 'look at the stars, look how they shine for you';
theText[21] = 'im liquid smooth, come touch me too';
theText[22] = 'my heart will never be, will never see, will never know'

let j = 0;
let p = theText.length;
let preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = theText[i]
}
let whichText = Math.round(Math.random()*(p-1));
function showText(){
//This a wrapper for the text array it can be changed if need
document.write('<h1 class="thetext">'+theText[whichText]+'</h1>');
}
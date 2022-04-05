var uahgh = new Audio('./uahgh.mp3');
var uahgh1 = false;

var counter = 0;

function main(){
    console.log(counter);
    counter++;
    if(counter = 4){
        playAudio();
        counter = 0;
    }
}

function toggleAudio(name){
    console.log('Toggled ' + name);
    if(name){
        name = false;
    } else {
        name = true;
    }
    console.log(name);
    console.log(uahgh);
}

function playAudio(){
    if(uahgh1){
        uahgh.play();
        console.log('playing');
    }
}
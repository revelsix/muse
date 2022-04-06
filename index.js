var uahgh = new Audio('./uahgh.mp3');
var uahgh1 = false;

let counter = 0;

function main(){
    
    counter++;
    if(counter == 4){
        playAudio();
        console.log('audio played');
        counter = 0;
    }
    console.log(counter);
}

function toggleAudio(name){
    console.log('Toggled ' + name);
    if(name == uahgh1 && uahgh1 == true){
        uahgh1 = false;
    } else {
        uahgh1 = true;
    }
    console.log(name + ' name');
    console.log(uahgh1 + ' uahgh1');
}

function playAudio(){
    if(uahgh1){
        uahgh.play();
        console.log('playing');
    }
}
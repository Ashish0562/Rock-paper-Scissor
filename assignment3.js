let userdisplay = document.getElementById('user');
let computerdisplay = document.getElementById('computer');
let resultdisplay = document.getElementById('result');
let possible = document.getElementsByClassName('buttons');
let playercountdisplay = document.getElementById('pcount');
let computercountdisplay = document.getElementById('ccount');
let display = document.getElementById('countdisplay');
let input = document.querySelector('input');
let userchoise;
let computerchoice;
let playercount = 1;
let computercount = 1;

for (let x of possible) {

    x.addEventListener('click', function display(y) {
        userchoise = y.target.innerHTML;
        userdisplay.innerHTML = userchoise;

        generatecomputer();
        getresult();
        input.value -= 1;
        getcount();
        showingfinal();
    })

}
let final=document.getElementById('fresult');

function showingfinal() {
    if (input.value==0) {
        if (computercount > playercount) {
            final.innerHTML='YOU LOOSE'
        }else{
            final.innerHTML='YOU win'
        }
    }
}



function getcount() {
    display.innerHTML = input.value;
}

function generatecomputer() {
    let num = Math.floor(Math.random() * 3);

    if (num == '0') {
        computerchoice = 'ROCK';
    } else if (num == '1') {
        computerchoice = 'PAPER';
    } else {
        computerchoice = 'SCISSORS';
    }

    computerdisplay.innerHTML = computerchoice;
}


function getresult() {
    let result = '';

    if (computerchoice == 'ROCK' && userchoise == 'ROCK') {
        result = 'TIE'
    }
    if (computerchoice == 'PAPER' && userchoise == 'PAPER') {
        result = 'TIE'
    }
    if (computerchoice == 'SCISSORS' && userchoise == 'SCISSORS') {
        result = 'TIE'
    }
    if (computerchoice == 'ROCK' && userchoise == 'PAPER') {
        result = 'WIN';
        playercountdisplay.innerHTML = playercount++;
    }
    if (computerchoice == 'ROCK' && userchoise == 'SCISSORS') {
        result = 'LOSE';
        computercountdisplay.innerHTML = computercount++;
    }
    if (computerchoice == 'PAPER' && userchoise == 'ROCK') {
        result = 'LOSE';
        computercountdisplay.innerHTML = computercount++;
    }
    if (computerchoice == 'PAPER' && userchoise == 'SCISSORS') {
        result = 'WIN';
        playercountdisplay.innerHTML = playercount++;
    }
    if (computerchoice == 'SCISSORS' && userchoise == 'PAPER') {
        result = 'LOSE';
        computercountdisplay.innerHTML = computercount++;
    }
    if (computerchoice == 'SCISSORS' && userchoise == 'ROCK') {
        result = 'WIN';
        playercountdisplay.innerHTML = playercount++;
    }
    resultdisplay.innerHTML = result;

}








const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorDiv = document.getElementById("s");
const resultp = document.querySelector(".result > p");
const computerChoiceP = document.querySelector(".computerChoice > p");

//use math random to generate a computer choice
function getComputerChoice() {
    const computerChoices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

//function to display image relevant to computer choice
function displayComputerChoice(computerChoice) {
    if (computerChoice ==='r') {
        computerChoiceP.innerHTML= "<img src=\"https://image.flaticon.com/icons/svg/3094/3094121.svg\">";
    } else if (computerChoice === 'p') {
        computerChoiceP.innerHTML = "<img src=\"https://image.flaticon.com/icons/svg/3094/3094132.svg\">";;
    } else if (computerChoice === 's') {
        computerChoiceP.innerHTML = "<img src=\"https://image.flaticon.com/icons/svg/2919/2919560.svg\">";
    }
}

//functions to diplay results
function win() {
    resultp.innerHTML = 'Result: YOU WIN!'
}

function lose() {
    resultp.innerHTML = 'Result: YOU LOSE!'
}

function draw() {
    resultp.innerHTML = 'Result: IT\'S A DRAW'
}

//function to determine result - comparing user & comp choices
function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
    }
    (displayComputerChoice(computerChoice))
}

//event listeners
function main () {
rockDiv.addEventListener('click', function() {
    game("r")
    document.getElementById("r").style.borderColor="#eb4034";
})

paperDiv.addEventListener('click', function() {
    game("p")
    document.getElementById("p").style.borderColor="#eb4034";
})

scissorDiv.addEventListener('click', function() {
    game("s")
    document.getElementById("s").style.borderColor="#eb4034";
})
}

main ();
let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let totalHome = 0;
let totalGuest = 0;

// Calculations for the Home team's points
function home1Point(){
    totalHome += 1;
    homePoints.innerText = totalHome;
}

function home2Points(){
    totalHome += 2;
    homePoints.innerText = totalHome;
}

function home3Points(){
    totalHome += 3;
    homePoints.innerText = totalHome;
}

// Calculations for the Guest team's points
function guest1Point(){
    totalGuest += 1;
    guestPoints.innerText = totalGuest;
}

function guest2Points(){
    totalGuest += 2;
    guestPoints.innerText = totalGuest;
}

function guest3Points(){
    totalGuest += 3;
    guestPoints.innerText = totalGuest;
}

// New Game Button to reset the score
function newGame(){
    totalGuest = 0;
    totalHome = 0;
    homePoints.innerText = totalHome;
    guestPoints.innerText = totalGuest;
}

var homeScore = document.getElementById("home-score");
var guestScore = document.getElementById("guest-score");
var newGameButton = document.querySelector(".new-game");
var scoreHome = 0;
var scoreGuest = 0;


// Score for the Home
function onePointHome() {
    scoreHome += 1;
    homeScore.textContent = scoreHome;
    if (scoreHome > scoreGuest) {
        homeScore.style.border = '3px solid yellow';
        guestScore.style.border = '3px solid red';
    } else {
        homeScore.style.border = '3px solid red';
    }
}

function twoPointsHome() {
    scoreHome += 2;
    homeScore.textContent = scoreHome;
    if (scoreHome > scoreGuest) {
        homeScore.style.border = '3px solid yellow';
        guestScore.style.border = '3px solid red';
    } else {
        homeScore.style.border = '3px solid red';
    }
}

function threePointsHome() {
    scoreHome += 3;
    homeScore.textContent = scoreHome;
    if (scoreHome > scoreGuest) {
        homeScore.style.border = '3px solid yellow';
        guestScore.style.border = '3px solid red';
    } else {
        homeScore.style.border = '3px solid red';
    }
}


// Score for the Guests
function onePointGuest() {
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
    if (scoreHome < scoreGuest) {
        guestScore.style.border = '3px solid yellow';
        homeScore.style.border = '3px solid red';
    } else {
        guestScore.style.border = '3px solid red';
    }
}

function twoPointsGuest() {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
    if (scoreHome < scoreGuest) {
        guestScore.style.border = '3px solid yellow';
        homeScore.style.border = '3px solid red';
    } else {
        guestScore.style.border = '3px solid red';
    }
}

function threePointsGuest() {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;
    if (scoreHome < scoreGuest) {
        guestScore.style.border = '3px solid yellow';
        homeScore.style.border = '3px solid red';
    } else {
        guestScore.style.border = '3px solid red';
    }
}


// Reset the score
function resetScore() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
    homeScore.style.border = '3px solid red';
    guestScore.style.border = '3px solid red';
}



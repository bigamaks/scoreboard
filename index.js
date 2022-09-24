let score = 0;
let firstDisplay = document.getElementById("display-one");
let secondDisplay = document.getElementById("display-two");

function btnone() {
    score += 1;
    firstDisplay.textContent = score;
}
function btntwo() {
    score += 2;
    firstDisplay.textContent = score;
}
function btnthree() {
    score += 3;
    firstDisplay.textContent = score;
}
function btnfour() {
    score += 1;
    secondDisplay.textContent = score;
}
function btnfive() {
    score += 2;
    secondDisplay.textContent = score;
}
function btnsix() {
    score += 3;
    secondDisplay.textContent = score;
}

function newGame() {
    score = 0;
    firstDisplay.textContent = 0;
    secondDisplay.textContent = 0;
}

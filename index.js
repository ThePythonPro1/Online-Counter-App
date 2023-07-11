let saveEL = document.getElementById("saved-el");
let intEL = document.getElementById("element1");

let count = 0;

function increment() {
    count += 1;
    intEL.innerText = count;
}

function deincrement() {
    count -= 1;
    intEL.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEL.textContent += countStr;
}
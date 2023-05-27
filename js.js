let BlueB = document.querySelector('.Blue');
let RedB = document.querySelector('.Red');
let GreenB = document.querySelector('.Green')
let CleanB = document.querySelector('.Clean');
let Title = document.querySelector('h1');

function RedBack() {
    document.body.style.backgroundColor = "red"
    document.body.style.fontStyle = "italic"
    document.body.style.fontSize = "40px"
    Title.innerHTML = "RED"
}
function GreenBack() {
    document.body.style.backgroundColor = "green"
    document.body.style.fontStyle = "italic"
    document.body.style.fontSize = "40px"
    Title.innerHTML = "GREEN"
}
function BlueBack() {
    document.body.style.backgroundColor = "blue"
    document.body.style.fontStyle = "italic"
    document.body.style.fontSize = "40px"
    Title.innerHTML = "BLUE"
}
function Clean() {
    document.body.style.backgroundColor = "white"
    document.body.style.fontStyle = "normal"
    document.body.style.fontSize = "16px"
    Title.innerHTML = "CSS"
}

RedB.onclick = () => {
    RedBack();
};
GreenB.onclick = () => {
    GreenBack();
};
BlueB.onclick = () => {
    BlueBack();
};
CleanB.onclick = () => {
    Clean();
};
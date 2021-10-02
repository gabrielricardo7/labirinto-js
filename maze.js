// Maze (Labirinto): W = wall (muro), S = start (iniciar), F = finish (fim)
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const body = document.querySelector("body");
const maze = document.querySelector("#maze");
const player = document.createElement("div");
const modal = document.createElement("div");
const modalContent = document.createElement("div");
const btnClose = document.createElement("span");
const message = document.createElement("p");
const time = document.querySelector("#time");

let timer = 30;
let playerX = 0;
let playerY = 0;
let enable = true;

player.id = "player";
player.className = "slideRight";
modal.className = "modal";
modalContent.className = "modal-content";
btnClose.className = "close";

btnClose.innerHTML = "&times;";

btnClose.onclick = function () {
    showTime();
    modal.style.display = "none";
    resetMaze();
    setTimeout(function () {
        hurryUp();
    }, 500);
}

modalContent.appendChild(btnClose);
modalContent.appendChild(message);
modal.appendChild(modalContent);
body.appendChild(modal);

buildMaze();
gameStart();

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (enable) {
        if (keyName === "ArrowUp" || keyName === "w") {
            if (player.parentElement.parentElement.previousElementSibling.children[playerX].classList[0] === "cell") {
                player.className = "slideUp";
                player.parentElement.parentElement.previousElementSibling.children[playerX].appendChild(player);
                playerY--;
            }
        } else if (keyName === "ArrowDown" || keyName === "s") {
            if (player.parentElement.parentElement.nextElementSibling.children[playerX].classList[0] === "cell") {
                player.className = "slideDown";
                player.parentElement.parentElement.nextElementSibling.children[playerX].appendChild(player);
                playerY++;
            }
        } else if (keyName === "ArrowLeft" || keyName === "a") {
            if (player.parentElement.previousElementSibling.classList[0] === "cell") {
                player.className = "slideLeft";
                player.parentElement.previousElementSibling.appendChild(player);
                playerX--;
            }
        } else if (keyName === "ArrowRight" || keyName === "d") {
            if (player.parentElement.nextElementSibling.classList[0] === "cell") {
                player.className = "slideLeft";
                player.parentElement.nextElementSibling.appendChild(player);
                playerX++;
            }
        }
        if (player.parentElement.classList[1] === "finish") {
            youWin();
        }
    }
    if (keyName === "Enter" && modal.style.display === "block") {
        setTimeout(function () {
            btnClose.click();
        }, 500);
    }
});

function buildMaze() {
    for (let i = 0; i < map.length; i++) {
        const line = document.createElement("div");
        line.id = `${"line" + i}`;
        line.style.display = "flex";
        maze.appendChild(line);

        for (let j = 0; j < map[i].length; j++) {
            const cell = document.createElement("div");
            if (map[i][j] === "W") {
                cell.className = "wall";
            } else if (map[i][j] === "S") {
                cell.className = "start";
            } else if (map[i][j] === "F") {
                cell.className = "cell finish";
            } else {
                cell.className = "cell";
            }
            cell.classList.add("block");
            line.appendChild(cell);
        }
    }
    showTime();
}

function resetMaze() {
    setTimeout(function () {
        document.querySelector(".start").appendChild(player);
        timer = 30;
        playerX = 0;
        playerY = player.parentElement.parentElement.id.substring(4);
        enable = true;
    }, 100);
}

function showModal(msg) {
    enable = false;
    setTimeout(function () {
        message.innerHTML = msg;
        modal.style.display = "block";
    }, 300);
}

function youWin() {
    showModal("&#x2B50;<br>Parabéns…<br><br><strong>Você venceu!</strong><br><br><em>Chegou em " + (31 - timer) + " segundos.</em>");
}

function hurryUp() {
    if (enable) {
        if (timer === 0) {
            gameOver();
        }
        setTimeout(function () {
            if (timer > 0) {
                timer--;
                showTime();
                hurryUp();
            }
        }, 1000);
    }
}

function showTime() {
    time.innerText = "Tempo: " + timer;
}

function gameOver() {
    showModal("&#x231B;<br><em>O tempo acabou…</em><br><br><strong>Fim de jogo!</strong><br><br>Tentar de novo?");
}

function gameStart() {
    showModal("<strong>Labirinto JS &#x1f579;</strong><br>&copy; 2021 Gabriel Ricardo<br><br><em>Instruções:</em><br><br>Use as teclas direcionais (setas)<br>ou as teclas WASD [&uarr;&larr;&darr;&rarr;]<br>para atravessar o labirinto…<br><br>Pressione [&crarr;] (enter ou return)<br>para começar.");
}
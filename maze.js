// Labirinto | Maze: W = wall, S = start, F = finish
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

let playerX = 0;
let playerY = 0;
let enable = true;

player.id = "player";
player.className = "block";
modal.className = "modal";
modalContent.className = "modal-content";
btnClose.className = "close";

btnClose.innerHTML = "&times;";

btnClose.onclick = function () {
    modal.style.display = "none";
    resetMaze();
}

modalContent.appendChild(btnClose);
modalContent.appendChild(message);
modal.appendChild(modalContent);
body.appendChild(modal);

buildMaze();
resetMaze();

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (enable) {
        if (keyName === "ArrowUp") {
            if (player.parentElement.parentElement.previousElementSibling.children[playerX].classList[0] === "cell") {
                player.parentElement.parentElement.previousElementSibling.children[playerX].appendChild(player);
                playerY--;
            }
        } else if (keyName === "ArrowDown") {
            if (player.parentElement.parentElement.nextElementSibling.children[playerX].classList[0] === "cell") {
                player.parentElement.parentElement.nextElementSibling.children[playerX].appendChild(player);
                playerY++;
            }
        } else if (keyName === "ArrowLeft") {
            if (player.parentElement.previousElementSibling.classList[0] === "cell") {
                player.parentElement.previousElementSibling.appendChild(player);
                playerX--;
            }
        } else if (keyName === "ArrowRight") {
            if (player.parentElement.nextElementSibling.classList[0] === "cell") {
                player.parentElement.nextElementSibling.appendChild(player);
                playerX++;
            }
        }
        if (player.parentElement.classList[1] === "finish") {
            enable = false;
            showModal("Você venceu!");
        }
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
}

function resetMaze() {
    setTimeout(function () {
        document.querySelector(".start").appendChild(player);
        playerX = 0;
        playerY = player.parentElement.parentElement.id.substring(4);
        enable = true;
    }, 100);
}

function showModal(msg) {
    setTimeout(function () {
        message.innerText = msg;
        modal.style.display = "block";
    }, 100);
}
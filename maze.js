// W = wall, S = start, F = finish
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

const player = document.createElement("div");
player.id = "player";

let playerX = 0;
let playerY = 0;

for (let i = 0; i < map.length; i++) {
    const line = document.createElement("div");
    line.id = `${"line" + i}`;
    line.style = "display: flex; height: 32px; width: 672px;";
    document.querySelector("body").appendChild(line);

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

document.querySelector(".start").appendChild(player);

playerY = player.parentElement.parentElement.id.substring(4);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

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
});
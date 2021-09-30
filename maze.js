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
            cell.className = "finish";
        } else {
            cell.className = "space";
        }
        cell.classList.add("cell");
        line.appendChild(cell);
    }
}

document.querySelector(".start").appendChild(player);
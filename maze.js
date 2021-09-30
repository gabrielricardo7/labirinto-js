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

let variable = 0;
for (let i = 0; i < map.length; i++) {
    const line = document.createElement("div");
    line.id = `${"line" + i}`;
    line.style = "display: flex; height: 32px; width: 672px; background-color: #00a;";
    document.querySelector("body").appendChild(line);
    for (let j = 0; j < map[i].length; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        line.appendChild(cell);
        variable++;
        console.log(variable);
    }
}
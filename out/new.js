import { isEmpty, setValue } from './case.js';
import { color } from './color.js';
document.addEventListener("DOMContentLoaded", (event) => {
    newGame();
    console.log("nouvelle partie lancée !");
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newGame() {
    const i1 = getRandomInt(1, 4);
    const j1 = getRandomInt(1, 4);
    const i2 = getRandomInt(1, 4);
    const j2 = getRandomInt(1, 4);
    while (i1 == i2 && j1 == j2) {
        const i2 = getRandomInt(1, 4);
        const j2 = getRandomInt(1, 4);
    }
    ;
    if (Math.random() < 0.85) {
        setValue(i1, j1, 2);
    }
    else {
        setValue(i1, j1, 4);
    }
    if (Math.random() < 0.86) {
        setValue(i2, j2, 2);
    }
    else {
        setValue(i2, j2, 4);
    }
    color();
}
export function newCase() {
    let i = getRandomInt(1, 4);
    let j = getRandomInt(1, 4);
    while (!isEmpty(i, j)) {
        i = getRandomInt(1, 4);
        j = getRandomInt(1, 4);
    }
    if (Math.random() < 0.85) {
        setValue(i, j, 2);
    }
    else {
        setValue(i, j, 4);
    }
}
//# sourceMappingURL=new.js.map
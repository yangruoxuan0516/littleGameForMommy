import { isEmpty, getValue } from "./case.js";
import { showDialogWin, showDialogLose } from "./modal.js";
import { pop } from "./winning.js";
export function full() {
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            if (isEmpty(i, j)) {
                return false;
            }
        }
    }
    return true;
}
;
export function lose() {
    if (full()) {
        const scoreElement = document.getElementById('score');
        let score = Number(scoreElement.innerHTML);
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                if (getValue(i, j) == getValue(i + 1, j) || getValue(i, j) == getValue(i, j + 1)) {
                    return false;
                }
            }
        }
        // window.alert('Oops c\'est la fin ! T\'as fait ' + score + ' coups :3');
        showDialogLose();
        return true;
    }
}
;
export function win() {
    const scoreElement = document.getElementById('score');
    let score = Number(scoreElement.innerHTML);
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            if (getValue(i, j) == 8) {
                pop();
                showDialogWin();
                // window.alert('Bravo t\'as gagné ! T\'as fait ' + score + ' coups :3');
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=result.js.map
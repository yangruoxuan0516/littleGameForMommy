import { newGame } from "./new.js";
const rejouerButtonWin = document.getElementById("rejouerWin");
const rejouerButtonLose = document.getElementById("rejouerLose");
const dialogWin = document.getElementById("dialogWin");
const dialogLose = document.getElementById("dialogLose");
function openCheck(dialog) {
    if (dialog.open) {
        console.log("Dialog open");
    }
    else {
        console.log("Dialog closed");
    }
}
export function showDialogWin() {
    (dialogWin).showModal();
    // openCheck(dialogWin);
}
;
export function showDialogLose() {
    (dialogLose).showModal();
    // openCheck(dialogLose);
}
;
rejouerButtonWin.addEventListener("click", () => {
    dialogWin.close("animalNotChosen");
    // openCheck(dialogWin);
    newGame();
});
rejouerButtonLose.addEventListener("click", () => {
    dialogLose.close("animalNotChosen");
    // openCheck(dialogLose);
    newGame();
});
//# sourceMappingURL=modal.js.map
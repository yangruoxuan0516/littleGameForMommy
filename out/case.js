function getCell(i, j) {
    if (1 <= i && i <= 4 && 1 <= j && j <= 4) {
        const c = document.getElementById(i.toString() + j.toString());
        return c;
    }
    else {
        return undefined;
    }
}
;
export function setValue(i, j, value) {
    const cell = getCell(i, j);
    if (cell) {
        if (value == 0) {
            cell.innerHTML = '*';
        }
        else {
            cell.innerHTML = value.toString();
        }
        return true;
    }
    else {
        console.log('invalid cell');
        return false;
    }
}
;
export function getValue(i, j) {
    const cell = getCell(i, j);
    if (cell) {
        if (cell.innerHTML == '*') {
            // console.log(0);
            return 0;
        }
        else {
            // console.log(Number(cell.innerHTML))
            return Number(cell.innerHTML);
        }
    }
    else {
        console.log('invalid cell');
    }
}
;
export function isEmpty(i, j) {
    const cell = getCell(i, j);
    if (cell.innerHTML == '*') {
        return true;
    }
    else {
        return false;
    }
}
;
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
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (getValue(i, j) == getValue(i + 1, j) || getValue(i, j) == getValue(i, j + 1)) {
                return false;
            }
        }
    }
    return true;
}
;
export function win() {
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            if (getValue(i, j) == 2048) {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=case.js.map
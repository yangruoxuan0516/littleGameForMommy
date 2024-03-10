import { left, right, up, down } from './fusionMove.js';
import { newCase } from './new.js';
import { full, lose, win } from './result.js';
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (event) => {
        const scoreElement = document.getElementById('score');
        let score = Number(scoreElement.innerHTML);
        if (event.key === 'ArrowUp') {
            console.log(`haut`);
            let moved = false;
            for (let i = 1; i <= 4; i++) {
                if (up(i)) {
                    moved = true;
                }
            }
            if (moved) {
                score++;
            }
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE && moved) {
                newCase();
            }
        }
        else if (event.key === 'ArrowDown') {
            console.log(`bas`);
            let moved = false;
            for (let i = 1; i <= 4; i++) {
                if (down(i)) {
                    moved = true;
                }
                ;
            }
            if (moved) {
                score++;
            }
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE && moved) {
                newCase();
            }
        }
        else if (event.key === 'ArrowLeft') {
            console.log(`gauche`);
            let moved = false;
            for (let j = 1; j <= 4; j++) {
                if (left(j)) {
                    moved = true;
                }
                ;
            }
            if (moved) {
                score++;
            }
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE && moved) {
                newCase();
            }
        }
        else if (event.key === 'ArrowRight') {
            console.log(`droite`);
            let moved = false;
            for (let j = 1; j <= 4; j++) {
                if (right(j)) {
                    moved = true;
                }
                ;
            }
            if (moved) {
                score++;
            }
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE && moved) {
                newCase();
            }
        }
        scoreElement.innerHTML = score.toString();
    });
});
//# sourceMappingURL=clavier.js.map
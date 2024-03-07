import { left, right, up, down } from './fusionMove.js';
import { newCase } from './new.js';
import { full, lose, win } from './result.js';
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (event) => {
        const scoreElement = document.getElementById('score');
        let score = Number(scoreElement.innerHTML);
        if (event.key === 'w') {
            console.log(`haut`);
            for (let i = 1; i <= 4; i++) {
                up(i);
            }
            score++;
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE) {
                newCase();
            }
        }
        else if (event.key === 's') {
            console.log(`bas`);
            for (let i = 1; i <= 4; i++) {
                down(i);
            }
            score++;
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE) {
                newCase();
            }
        }
        else if (event.key === 'a') {
            console.log(`gauche`);
            for (let j = 1; j <= 4; j++) {
                left(j);
            }
            score++;
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE) {
                newCase();
            }
        }
        else if (event.key === 'd') {
            console.log(`droite`);
            for (let j = 1; j <= 4; j++) {
                right(j);
            }
            score++;
            const WIN = win();
            const LOSE = lose();
            const FULL = full();
            if (!FULL && !WIN && !LOSE) {
                newCase();
            }
        }
        scoreElement.innerHTML = score.toString();
    });
});
//# sourceMappingURL=clavier.js.map
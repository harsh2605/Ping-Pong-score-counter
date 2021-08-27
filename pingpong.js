const player1 = document.querySelector('#first');
const player2 = document.querySelector('#second');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#third');
const max_score_selector = document.querySelector('#plyto');
let p1_value = 0;
let p2_value = 0;
let max_Score = 7;
let isgameover = false;
player1.addEventListener('click', function () {
    if (!isgameover) {
        p1_value += 1;
        if (p1_value === max_Score) {
            isgameover = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
            alert('player 1 is the winner');
        }
        p1.textContent = p1_value;
    }

});
player2.addEventListener('click', function () {
    if (!isgameover) {
        p2_value += 1;
        if (p2_value === max_Score) {
            isgameover = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
            alert('player 2 is the winner');
        }
        p2.textContent = p2_value;
    }
});
reset.addEventListener('click', function () {
    p1_value = 0;
    p2_value = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    isgameover = false;
    p1.classList.remove('winner','loser');
    p2.classList.remove('winner','loser');
});
max_score_selector.addEventListener('change', function () {
    max_Score = parseInt(this.value);
    p1_value = 0;
    p2_value = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    isgameover = false;
    p1.classList.remove('winner','loser');
    p2.classList.remove('winner','loser');
})